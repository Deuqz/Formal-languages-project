from antlr4 import *
from LLexer import LLexer
from LVisitor import LVisitor
from LParser import LParser
import sys
from pprint import pprint


import codecs
import sys

class EvalVisitor(LVisitor):
    def visitStart(self, ctx):
        print("visitStart",ctx.getText())
        self.visit(ctx.funcs())

    def visitFuncGlob(self, ctx):
        print("VisitFuncGlob", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.visit(ctx.toArgs())
        self.visit(ctx.toBody())
        self.visit(ctx.funcs())

    def visitFunc(self, ctx):
        print("VisitFunc", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.visit(ctx.toArgs())
        self.visit(ctx.toBody())

    def visitToArgsEmpty(self, ctx):
        print("VisitToArgsEmpty", ctx.getText())

    def visitToArgsNotEmpty(self, ctx):
        print("VisitToArgsNotEmpty", ctx.getText())
        self.visit(ctx.args())

    def visitArgsVals(self, ctx):
        print("VisitArgsVal", ctx.getText())
        print("    nameArg =", ctx.name.text)
        self.visit(ctx.args())

    def visitArgsVal(self, ctx):
        print("VisitArgsName", ctx.getText())
        print("    nameArg =", ctx.name.text)

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
    EvalVisitor().visit(tree)
    #answer = EvalVisitor().visit(tree) 
    #print(answer)

if __name__ == '__main__':
    main()