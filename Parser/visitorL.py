from antlr4 import *
from antlr4.error.ErrorListener import *
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
        with open(nameFile + "forPNG.txt", 'w') as f:
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
        os.system("dot -Tpng " + nameFile + "forPNG.txt > " + nameFile + ".png")
        os.system("rm " + nameFile + "forPNG.txt")

    def checkCorrectness(self):
        flag = False
        for x in self.tree[0]:
            if self.elem[x] == "main":
                flag = True
                break
        if not flag:
            print("Error! The program doesn't contain \"main\" function")
            sys.exit(5)

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
        par = self.curVer
        self.commonVisitFunc(ctx, par)

        self.curVer = par
        self.visit(ctx.funcs())

    def visitFunc(self, ctx):
        self.commonVisitFunc(ctx, self.curVer)

    def visitToArgsEmpty(self, ctx):
        pass

    def visitToArgsNotEmpty(self, ctx):
        self.visit(ctx.args())

    def visitArgsVals(self, ctx):
        self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.args())

    def visitArgsVal(self, ctx):
        self.g.addVer(self.curVer, ctx.name.text)

    def visitToBodyEmpty(self, ctx):
        pass

    def visitToBodyNotEmpty(self, ctx):
        self.visit(ctx.body())

    def visitBodyCode(self, ctx):
        par = self.curVer
        self.visit(ctx.oper())
        self.curVer = par
        self.visit(ctx.body())

    def visitBodyOper(self, ctx):
        self.visit(ctx.oper())

    def visitOpSkip(self, ctx):
        self.g.addVer(self.curVer, "skip")

    def visitOpIfElse(self, ctx):
        par = self.g.addVer(self.curVer, "if")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.manage)
        self.curVer = self.g.addVer(par, "__else__")
        self.visit(ctx.alternative)

    def visitOpIf(self, ctx):
        par = self.g.addVer(self.curVer, "if")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.toBody())

    def visitOpWhile(self, ctx):
        par = self.g.addVer(self.curVer, "while")
        self.curVer = self.g.addVer(par, "__expr__")
        self.visit(ctx.expr())
        self.curVer = self.g.addVer(par, "__body__")
        self.visit(ctx.toBody())

    def visitOpBind(self, ctx):
        #print("    nameValToBind =", ctx.name.text)
        self.curVer = self.g.addVer(self.curVer, "=")
        self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.expr())

    def visitOpFuncCall(self, ctx):
        #print("    nameFunc =", ctx.name.text)
        self.curVer = self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.toArgsCall())

    def visitToArgsCallEmpty(self, ctx):
        pass

    def visitToArgsCallNotEmpty(self, ctx):
        self.visit(ctx.argsCall())

    def visitArgsCallVals(self, ctx):
        par = self.curVer
        self.visit(ctx.val)
        self.curVer = par
        self.visit(ctx.argsCall())

    def visitArgsCallVal(self, ctx):
        self.visit(ctx.val)

    def visitExprOpUn(self, ctx):
        par = self.curVer
        self.curVer = self.g.addVer(self.curVer, ctx.op.text)
        self.visit(ctx.expr())
        self.curVer = par

    def visitExprOpBin(self, ctx):
        op = ctx.op.text
        b = op == '==' or op == '/=' or op == '<' or op == '<=' or op == '>' or op == '>='
        if (b and self.inCompTree):
            print("Error! Operator " + ctx.op.text + " is not associative")
            sys.exit(4)
        elif(b):
            self.inCompTree = True
        par = self.curVer = self.g.addVer(self.curVer, ctx.op.text)
        self.visit(ctx.left)
        self.curVer = par
        self.visit(ctx.right)
        if (b):
            self.inCompTree = False

    def visitExprParen(self, ctx):
        self.visit(ctx.expr())

    def visitExprAtom(self, ctx):
        self.g.addVer(self.curVer, ctx.atom.text)

    def visitExprFuncCall(self, ctx):
        par = self.curVer
        self.curVer = self.g.addVer(self.curVer, ctx.name.text)
        self.visit(ctx.toArgsCall())
        self.curVer = par

class MyErrorListener(ErrorListener):
    def __init__(self, fileName, inputFile):
        self.fileName = fileName
        self.inpFile = inputFile

    def syntaxError(self, recognizer, offendingSymbol, line, column, msg, e):
        strings = self.inpFile.splitlines()
        print("{}:{}:{} - Error! Incorrect input".format(self.fileName, str(line), str(column)))
        print("    " + str(line) + "|" + strings[line - 1])
        print("    " + len(str(line)) * " " + "|" + column * " " + "^")
        sys.exit(3)


def main():
    if (len(sys.argv) == 1):
        print("Error! No input files")
        sys.exit(1)
    try:
        with open(sys.argv[1], 'r') as f:
            inputFile = f.read()
            print(inputFile)
    except Exception:
        print("Can't open file {} for reading".format(sys.argv[1]))
        sys.exit(2)
    lexer = LLexer(InputStream(inputFile))
    stream = CommonTokenStream(lexer)
    parser = LParser(stream)
    parser.removeErrorListeners()
    parser.addErrorListener(MyErrorListener(sys.argv[1], inputFile))
    tree = parser.start()
    absTree = CodeVisitor().visit(tree)
    absTree.checkCorrectness()
    print("Completed parsing")
    absTree.outFile(sys.argv[1] + ".out")
    absTree.makePng(sys.argv[1])

if __name__ == '__main__':
    main()