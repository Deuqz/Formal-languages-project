from antlr4 import *
from LLexer import LLexer
from LVisitor import LVisitor
from LParser import LParser
import sys
from pprint import pprint


import codecs
import sys

class AbstractTree:
    tree = list()
    elem = dict()
    def print(self):
        print(self.tree)
        print(self.elem)

class CodeVisitor(LVisitor):
    g = AbstractTree()
    curVer = 0

    def visitStart(self, ctx):
        print("visitStart",ctx.getText())
        self.g.tree.append([])
        self.g.elem[0] = "__root__";
        self.visit(ctx.funcs())
        return self.g

    def commonVisitFunc(self, ctx, par):
        self.g.tree.append([])
        num = len(self.g.tree) - 1
        self.g.tree[par].append(num)
        self.g.elem[num] = ctx.name.text

        self.g.tree.append([])
        num1 = len(self.g.tree) - 1
        self.g.tree[num].append(num1)
        self.g.elem[num1] = "__args__"
        self.curVer = num1
        self.visit(ctx.toArgs())

        self.g.tree.append([])
        num2 = len(self.g.tree) - 1
        self.g.tree[num].append(num2)
        self.g.elem[num2] = "__body__"
        self.curVer = num2
        self.visit(ctx.toBody())

    def visitFuncGlob(self, ctx):
        print("VisitFuncGlob", ctx.getText())
        print("    nameFunc =", ctx.name.text)

        par = self.curVer
        self.commonVisitFunc(ctx, par)

        self.curVer = par
        self.visit(ctx.funcs())

    def visitFunc(self, ctx):
        print("VisitFunc", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.commonVisitFunc(ctx, self.curVer)

    def visitToArgsEmpty(self, ctx):
        print("VisitToArgsEmpty", ctx.getText())

    def visitToArgsNotEmpty(self, ctx):
        print("VisitToArgsNotEmpty", ctx.getText())
        self.visit(ctx.args())

    def commonArgsVal(self, ctx):
        self.g.tree.append([])
        num = len(self.g.tree) - 1
        self.g.elem[num] = ctx.name.text
        self.g.tree[self.curVer].append(num)

    def visitArgsVals(self, ctx):
        print("VisitArgsVal", ctx.getText())
        print("    nameArg =", ctx.name.text)
        self.commonArgsVal(ctx)
        self.visit(ctx.args())

    def visitArgsVal(self, ctx):
        print("VisitArgsName", ctx.getText())
        print("    nameArg =", ctx.name.text)
        self.commonArgsVal(ctx)

    def visitToBodyEmpty(self, ctx):
        print("VisitToBodyEmpty", ctx.getText())

    def visitToBodyNotEmpty(self, ctx):
        print("VisitToBodyNotEmpty", ctx.getText())
        self.visit(ctx.body())

    def visitBodyCode(self, ctx):
        print("VisitBodyCode", ctx.getText())
        self.visit(ctx.oper())
        self.visit(ctx.body())

    def visitBodyOper(self, ctx):
        print("VisitBodyOper", ctx.getText())
        self.visit(ctx.oper())

    def visitOpSkip(self, ctx):
        print("VisitOpSkip", ctx.getText())
        print("    ", ctx.name.text)
        
    def visitOpIfElse(self, ctx):
        print("VisitOpIfElse", ctx.getText())
        self.visit(ctx.expr())
        self.visit(ctx.manage)
        self.visit(ctx.alternative)

    def visitOpIf(self, ctx):
        print("VisitOpIf", ctx.getText())
        self.visit(ctx.expr())
        self.visit(ctx.toBody())

    def visitOpWhile(self, ctx):
        print("VisitOpWhile", ctx.getText())
        self.visit(ctx.expr())
        self.visit(ctx.toBody())
    
    def visitOpBind(self, ctx):
        print("VisitOpBind", ctx.getText())
        print("    nameValToBind =", ctx.name.text)
        self.visit(ctx.expr())

    def visitOpFuncCall(self, ctx):
        print("VisitOpFuncCall", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.visit(ctx.toArgsCall())

    def visitToArgsCallEmpty(self, ctx):
        print("VisitToArgsCallEmpty", ctx.getText())

    def visitToArgsCallNotEmpty(self, ctx):
        print("VisitToArgsCallNotEmpty", ctx.getText())
        self.visit(ctx.argsCall())

    def visitArgsCallVals(self, ctx):
        print("VisitArgsCallVals", ctx.getText())
        self.visit(ctx.val)
        self.visit(ctx.argsCall())

    def visitArgsCallVal(self, ctx):
        print("VisitArgsCallVal", ctx.getText())
        self.visit(ctx.val)

    def visitExprExp1(self, ctx):
        print("VisitExprExp1", ctx.getText())
        print("    val =", ctx.atom.text)
        self.visit(ctx.expr())

    def visitExprExp2(self, ctx):
        print("VisitExprExp2", ctx.getText())
        print("    name =", ctx.name.text)
        self.visit(ctx.toArgsCall())
        self.visit(ctx.expr())

    def visitExprExp3(self, ctx):
        print("VisitExprExp3", ctx.getText())
        self.visit(ctx.left)
        self.visit(ctx.right)

    def visitExprOpUn(self, ctx):
        print("VisitExprExp2", ctx.getText())
        print("    op =", ctx.op.text)
        self.visit(ctx.expr())

    def visitExprOpBin(self, ctx):
        print("VisitExprOpBin", ctx.getText())
        print("    op =", ctx.op.text)
        self.visit(ctx.left)
        self.visit(ctx.right)
        
    def visitExprParen(self, ctx):
        print("VisitExprParen", ctx.getText())
        self.visit(ctx.expr())
    
    def visitExprAtom(self, ctx):
        print("VisitExprAtom", ctx.getText())
        print("    nameVal =", ctx.atom.text)

    def visitExprFuncCall(self, ctx):
        print("VisitExprFuncCall", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.visit(ctx.toArgsCall())



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
    absTree.print()

if __name__ == '__main__':
    main()