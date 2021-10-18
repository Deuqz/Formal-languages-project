from antlr4 import *
from LLexer import LLexer
from LVisitor import LVisitor
from LParser import LParser
import sys
from pprint import pprint


import codecs
import sys
import os

class AbstractTree:
    tree = list()
    elem = dict()

    def print(self):
        print(self.tree)
        print(self.elem)

    def outFile(self, nameFile):
        with open(nameFile, 'w') as f:
            l = len(self.tree)
            for i in range(l):
                f.write("num: " + str(i) + "\n")
                f.write("meaning: " + self.elem[i] + "\n")
                if (len(self.tree[i]) != 0):
                    f.write("childrens:\n")
                    for x in self.tree[i]:
                        f.write(str(x) + " ")
                    f.write("\n")
                f.write("\n")
    
    def makePng(self, nameFile):
        with open(nameFile + "forPNG", 'w') as f:
            l = len(self.tree)
            f.write("digraph{\n")
            for i in range(l):
                if self.elem[i] == ">":
                    f.write("    " + str(i) + " [label=<&gt;>]\n")
                elif self.elem[i] == "<":
                    f.write("    " + str(i) + " [label=<&lt;>]\n")
                elif self.elem[i] == "&&":
                    f.write("    " + str(i) + " [label=<&amp;&amp;>]\n")
                else:
                    f.write("    " + str(i) + " [label=<" + self.elem[i] + ">]\n")
            for i in range(l):
                if (len(self.tree[i]) == 0): continue
                for x in self.tree[i]:
                    f.write("    " + str(i) + " -> " + str(x) + "\n")
            f.write("}")
        os.system("dot -Tpng " + nameFile + "forPNG > " + nameFile + ".png")
        os.system("rm " + nameFile + "forPNG")

    
    def addVer(self, par, s):
        self.tree.append([])
        num = len(self.tree) - 1
        self.tree[par].append(num)
        self.elem[num] = s
        return num

class CodeVisitor(LVisitor):
    g = AbstractTree()
    curVer = 0
    inCompTree = False

    def visitStart(self, ctx):
        #print("visitStart",ctx.getText())
        self.g.tree.append([])
        self.g.elem[0] = "__root__";
        self.visit(ctx.funcs())
        return self.g

    def commonVisitFunc(self, ctx, par):
        num = self.g.addVer(par, ctx.name.text)

        self.curVer = self.g.addVer(num, "__args__")
        self.visit(ctx.toArgs())

        self.curVer = self.g.addVer(num, "__body__")
        self.visit(ctx.toBody())

    def visitFuncGlob(self, ctx):
        #print("VisitFuncGlob", ctx.getText())
        #print("    nameFunc =", ctx.name.text)

        par = self.curVer
        self.commonVisitFunc(ctx, par)

        self.curVer = par
        self.visit(ctx.funcs())

    def visitFunc(self, ctx):
        #print("VisitFunc", ctx.getText())
        #print("    nameFunc =", ctx.name.text)
        self.commonVisitFunc(ctx, self.curVer)

    def visitToArgsEmpty(self, ctx):
        #print("VisitToArgsEmpty", ctx.getText())
        pass

    def visitToArgsNotEmpty(self, ctx):
        #print("VisitToArgsNotEmpty", ctx.getText())
        self.visit(ctx.args())

    def visitArgsVals(self, ctx):
        #print("VisitArgsVal", ctx.getText())
        #print("    nameArg =", ctx.name.text)
        self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.args())

    def visitArgsVal(self, ctx):
        #print("VisitArgsName", ctx.getText())
        #print("    nameArg =", ctx.name.text)
        self.g.addVer(self.curVer, ctx.name.text)

    def visitToBodyEmpty(self, ctx):
        #print("VisitToBodyEmpty", ctx.getText())
        pass

    def visitToBodyNotEmpty(self, ctx):
        #print("VisitToBodyNotEmpty", ctx.getText())
        self.visit(ctx.body())

    def visitBodyCode(self, ctx):
        #print("VisitBodyCode", ctx.getText())
        par = self.curVer
        self.visit(ctx.oper())
        self.curVer = par
        self.visit(ctx.body())

    def visitBodyOper(self, ctx):
        #print("VisitBodyOper", ctx.getText())
        self.visit(ctx.oper())

    def visitOpSkip(self, ctx):
        #print("VisitOpSkip", ctx.getText())
        #print("    ", ctx.name.text)
        self.g.addVer(self.curVer, "skip")
        
    def visitOpIfElse(self, ctx):
        #print("VisitOpIfElse", ctx.getText())
        par = self.g.addVer(self.curVer, "if")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.manage)
        self.curVer = self.g.addVer(par, "__else__")
        self.visit(ctx.alternative)

    def visitOpIf(self, ctx):
        #print("VisitOpIf", ctx.getText())
        par = self.g.addVer(self.curVer, "if")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.toBody())

    def visitOpWhile(self, ctx):
        #print("VisitOpWhile", ctx.getText())
        par = self.g.addVer(self.curVer, "while")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.toBody())
    
    def visitOpBind(self, ctx):
        #print("VisitOpBind", ctx.getText())
        #print("    nameValToBind =", ctx.name.text)
        self.curVer = self.g.addVer(self.curVer, "=")
        self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.expr())

    def visitOpFuncCall(self, ctx):
        #print("VisitOpFuncCall", ctx.getText())
        #print("    nameFunc =", ctx.name.text)
        self.curVer = self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.toArgsCall())

    def visitToArgsCallEmpty(self, ctx):
        #print("VisitToArgsCallEmpty", ctx.getText())
        pass

    def visitToArgsCallNotEmpty(self, ctx):
        #print("VisitToArgsCallNotEmpty", ctx.getText())
        self.visit(ctx.argsCall())

    def visitArgsCallVals(self, ctx):
        #print("VisitArgsCallVals", ctx.getText())
        par = self.curVer
        self.visit(ctx.val)
        self.curVer = par
        self.visit(ctx.argsCall())

    def visitArgsCallVal(self, ctx):
        #print("VisitArgsCallVal", ctx.getText())
        self.visit(ctx.val)

    def visitExprExp1(self, ctx):
        #print("VisitExprExp1", ctx.getText())
        #print("    val =", ctx.atom.text)
        self.curVer = self.g.addVer(self.curVer, '^')
        self.g.addVer(self.curVer, ctx.atom.text)
        self.visit(ctx.expr())

    def visitExprExp2(self, ctx):
        #print("VisitExprExp2", ctx.getText())
        #print("    name =", ctx.name.text)
        par = self.curVer = self.g.addVer(self.curVer, '^')
        self.curVer = self.g.addVer(par, ctx.name.text)
        self.visit(ctx.toArgsCall())
        self.curVer = par
        self.visit(ctx.expr())

    def visitExprExp3(self, ctx):
        #print("VisitExprExp3", ctx.getText())
        par = self.curVer = self.g.addVer(self.curVer, '^')
        self.visit(ctx.left)
        self.curVer = par
        self.visit(ctx.right)

    def visitExprOpUn(self, ctx):
        #print("VisitExprOpUn", ctx.getText())
        #print("    op =", ctx.op.text)
        par = self.curVer
        self.curVer = self.g.addVer(self.curVer, ctx.op.text)
        self.visit(ctx.expr())
        self.curVer = par

    def visitExprOpBin(self, ctx):
        #print("VisitExprOpBin", ctx.getText())
        #print("    op =", ctx.op.text)
        op = ctx.op.text
        b = op == '==' or op == '/=' or op == '<' or op == '<=' or op == '>' or op == '>='
        if (b and self.inCompTree):
            print("Error! Operator " + ctx.op.text + " is not associative")
            sys.exit(1)
        elif(b):
            self.inCompTree = True
        par = self.curVer = self.g.addVer(self.curVer, ctx.op.text)
        self.visit(ctx.left)
        self.curVer = par
        self.visit(ctx.right)
        if (b):
            self.inCompTree = False
        
    def visitExprParen(self, ctx):
        #print("VisitExprParen", ctx.getText())
        self.visit(ctx.expr())
    
    def visitExprAtom(self, ctx):
        #print("VisitExprAtom", ctx.getText())
        #print("    nameVal =", ctx.atom.text)
        self.g.addVer(self.curVer, ctx.atom.text)

    def visitExprFuncCall(self, ctx):
        #print("VisitExprFuncCall", ctx.getText())
        #print("    nameFunc =", ctx.name.text)
        par = self.curVer
        self.curVer = self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.toArgsCall())
        self.curVer = par



def main():
    fail = ""
    with open(sys.argv[1], 'r') as f:
        fail = f.read()
        print(fail)
    print("Start parse")
    lexer = LLexer(InputStream(fail))
    stream = CommonTokenStream(lexer)
    parser = LParser(stream)
    tree = parser.start()
    absTree = CodeVisitor().visit(tree)
    print("Complete parse")
    #absTree.print()
    absTree.outFile(sys.argv[1] + ".out")
    absTree.makePng(sys.argv[1])

if __name__ == '__main__':
    main()