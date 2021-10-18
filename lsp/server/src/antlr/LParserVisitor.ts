// Generated from grammar/LParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ArgsValsContext } from "./LParser";
import { ArgsValContext } from "./LParser";
import { ToBodyEmptyContext } from "./LParser";
import { ToBodyNotEmptyContext } from "./LParser";
import { ToArgsEmptyContext } from "./LParser";
import { ToArgsNotEmptyContext } from "./LParser";
import { OpBindContext } from "./LParser";
import { OpSkipContext } from "./LParser";
import { OpIfElseContext } from "./LParser";
import { OpIfContext } from "./LParser";
import { OpWhileContext } from "./LParser";
import { OpFuncCallContext } from "./LParser";
import { ExprExp1Context } from "./LParser";
import { ExprExp2Context } from "./LParser";
import { ExprExp3Context } from "./LParser";
import { ExprOpUnContext } from "./LParser";
import { ExprOpBinContext } from "./LParser";
import { ExprParenContext } from "./LParser";
import { ExprAtomContext } from "./LParser";
import { ExprFuncCallContext } from "./LParser";
import { FuncGlobContext } from "./LParser";
import { FuncContext } from "./LParser";
import { ToArgsCallEmptyContext } from "./LParser";
import { ToArgsCallNotEmptyContext } from "./LParser";
import { ArgsCallValsContext } from "./LParser";
import { ArgsCallValContext } from "./LParser";
import { BodyCodeContext } from "./LParser";
import { BodyOperContext } from "./LParser";
import { StartContext } from "./LParser";
import { FuncsContext } from "./LParser";
import { ToArgsContext } from "./LParser";
import { ArgsContext } from "./LParser";
import { ToBodyContext } from "./LParser";
import { BodyContext } from "./LParser";
import { OperContext } from "./LParser";
import { ToArgsCallContext } from "./LParser";
import { ArgsCallContext } from "./LParser";
import { ExprContext } from "./LParser";
import { VariableRefContext } from "./LParser";
import { FunctionRefContext } from "./LParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `argsVals`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsVals?: (ctx: ArgsValsContext) => Result;

	/**
	 * Visit a parse tree produced by the `argsVal`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsVal?: (ctx: ArgsValContext) => Result;

	/**
	 * Visit a parse tree produced by the `toBodyEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToBodyEmpty?: (ctx: ToBodyEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `toBodyNotEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToBodyNotEmpty?: (ctx: ToBodyNotEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `toArgsEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgsEmpty?: (ctx: ToArgsEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `toArgsNotEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgsNotEmpty?: (ctx: ToArgsNotEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `opBind`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpBind?: (ctx: OpBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `opSkip`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpSkip?: (ctx: OpSkipContext) => Result;

	/**
	 * Visit a parse tree produced by the `opIfElse`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpIfElse?: (ctx: OpIfElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `opIf`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpIf?: (ctx: OpIfContext) => Result;

	/**
	 * Visit a parse tree produced by the `opWhile`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpWhile?: (ctx: OpWhileContext) => Result;

	/**
	 * Visit a parse tree produced by the `opFuncCall`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpFuncCall?: (ctx: OpFuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprExp1`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprExp1?: (ctx: ExprExp1Context) => Result;

	/**
	 * Visit a parse tree produced by the `exprExp2`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprExp2?: (ctx: ExprExp2Context) => Result;

	/**
	 * Visit a parse tree produced by the `exprExp3`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprExp3?: (ctx: ExprExp3Context) => Result;

	/**
	 * Visit a parse tree produced by the `exprOpUn`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprOpUn?: (ctx: ExprOpUnContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprOpBin`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprOpBin?: (ctx: ExprOpBinContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprParen`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprParen?: (ctx: ExprParenContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprAtom`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprAtom?: (ctx: ExprAtomContext) => Result;

	/**
	 * Visit a parse tree produced by the `exprFuncCall`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprFuncCall?: (ctx: ExprFuncCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcGlob`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncGlob?: (ctx: FuncGlobContext) => Result;

	/**
	 * Visit a parse tree produced by the `func`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc?: (ctx: FuncContext) => Result;

	/**
	 * Visit a parse tree produced by the `toArgsCallEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgsCallEmpty?: (ctx: ToArgsCallEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `toArgsCallNotEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgsCallNotEmpty?: (ctx: ToArgsCallNotEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `argsCallVals`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCallVals?: (ctx: ArgsCallValsContext) => Result;

	/**
	 * Visit a parse tree produced by the `argsCallVal`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCallVal?: (ctx: ArgsCallValContext) => Result;

	/**
	 * Visit a parse tree produced by the `bodyCode`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyCode?: (ctx: BodyCodeContext) => Result;

	/**
	 * Visit a parse tree produced by the `bodyOper`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBodyOper?: (ctx: BodyOperContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.funcs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncs?: (ctx: FuncsContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.toArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgs?: (ctx: ToArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.args`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgs?: (ctx: ArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.toBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToBody?: (ctx: ToBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.oper`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOper?: (ctx: OperContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitToArgsCall?: (ctx: ToArgsCallContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCall?: (ctx: ArgsCallContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.variableRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableRef?: (ctx: VariableRefContext) => Result;

	/**
	 * Visit a parse tree produced by `LParser.functionRef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionRef?: (ctx: FunctionRefContext) => Result;
}

