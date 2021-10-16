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
        self.visit(ctx.args())
        self.visit(ctx.body())
        self.visit(ctx.funcs())

    def visitFunc(self, ctx):
        print("VisitFunc", ctx.getText())
        print("    nameFunc =", ctx.name.text)
        self.visit(ctx.args())
        self.visit(ctx.body())

    def visitArgsEmpty(self, ctx):
        print("VisitArgsEmpty", ctx.getText())

    def visitArgsParen(self, ctx):
        print("VisitArgsParen", ctx.getText())
        self.visit(ctx.args())

    def visitArgsVal(self, ctx):
        print("VisitArgsVal", ctx.getText())
        print("    nameArg =", ctx.name.text)
        self.visit(ctx.args())

    def visitArgsName(self, ctx):
        print("VisitArgsName", ctx.getText())
        print("    nameArg =", ctx.name.text)

    def visitBodyEmpty(self, ctx):
        print("VisitBodyEmpty", ctx.getText())

    def visitBodyParen(self, ctx):
        print("VisitBodyParen", ctx.getText())
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