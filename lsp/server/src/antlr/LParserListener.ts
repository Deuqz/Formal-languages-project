// Generated from grammar/LParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
	//any;
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
 * This interface defines a complete listener for a parse tree produced by
 * `LParser`.
 */
export interface LParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `argsVals`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgsVals?: (ctx: ArgsValsContext) => void;
	/**
	 * Exit a parse tree produced by the `argsVals`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgsVals?: (ctx: ArgsValsContext) => void;

	/**
	 * Enter a parse tree produced by the `argsVal`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgsVal?: (ctx: ArgsValContext) => void;
	/**
	 * Exit a parse tree produced by the `argsVal`
	 * labeled alternative in `LParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgsVal?: (ctx: ArgsValContext) => void;

	/**
	 * Enter a parse tree produced by the `toBodyEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	enterToBodyEmpty?: (ctx: ToBodyEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toBodyEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	exitToBodyEmpty?: (ctx: ToBodyEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `toBodyNotEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	enterToBodyNotEmpty?: (ctx: ToBodyNotEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toBodyNotEmpty`
	 * labeled alternative in `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	exitToBodyNotEmpty?: (ctx: ToBodyNotEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `toArgsEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	enterToArgsEmpty?: (ctx: ToArgsEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toArgsEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	exitToArgsEmpty?: (ctx: ToArgsEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `toArgsNotEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	enterToArgsNotEmpty?: (ctx: ToArgsNotEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toArgsNotEmpty`
	 * labeled alternative in `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	exitToArgsNotEmpty?: (ctx: ToArgsNotEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `opBind`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpBind?: (ctx: OpBindContext) => void;
	/**
	 * Exit a parse tree produced by the `opBind`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpBind?: (ctx: OpBindContext) => void;

	/**
	 * Enter a parse tree produced by the `opSkip`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpSkip?: (ctx: OpSkipContext) => void;
	/**
	 * Exit a parse tree produced by the `opSkip`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpSkip?: (ctx: OpSkipContext) => void;

	/**
	 * Enter a parse tree produced by the `opIfElse`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpIfElse?: (ctx: OpIfElseContext) => void;
	/**
	 * Exit a parse tree produced by the `opIfElse`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpIfElse?: (ctx: OpIfElseContext) => void;

	/**
	 * Enter a parse tree produced by the `opIf`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpIf?: (ctx: OpIfContext) => void;
	/**
	 * Exit a parse tree produced by the `opIf`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpIf?: (ctx: OpIfContext) => void;

	/**
	 * Enter a parse tree produced by the `opWhile`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpWhile?: (ctx: OpWhileContext) => void;
	/**
	 * Exit a parse tree produced by the `opWhile`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpWhile?: (ctx: OpWhileContext) => void;

	/**
	 * Enter a parse tree produced by the `opFuncCall`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOpFuncCall?: (ctx: OpFuncCallContext) => void;
	/**
	 * Exit a parse tree produced by the `opFuncCall`
	 * labeled alternative in `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOpFuncCall?: (ctx: OpFuncCallContext) => void;

	/**
	 * Enter a parse tree produced by the `exprExp1`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprExp1?: (ctx: ExprExp1Context) => void;
	/**
	 * Exit a parse tree produced by the `exprExp1`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprExp1?: (ctx: ExprExp1Context) => void;

	/**
	 * Enter a parse tree produced by the `exprExp2`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprExp2?: (ctx: ExprExp2Context) => void;
	/**
	 * Exit a parse tree produced by the `exprExp2`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprExp2?: (ctx: ExprExp2Context) => void;

	/**
	 * Enter a parse tree produced by the `exprExp3`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprExp3?: (ctx: ExprExp3Context) => void;
	/**
	 * Exit a parse tree produced by the `exprExp3`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprExp3?: (ctx: ExprExp3Context) => void;

	/**
	 * Enter a parse tree produced by the `exprOpUn`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprOpUn?: (ctx: ExprOpUnContext) => void;
	/**
	 * Exit a parse tree produced by the `exprOpUn`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprOpUn?: (ctx: ExprOpUnContext) => void;

	/**
	 * Enter a parse tree produced by the `exprOpBin`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprOpBin?: (ctx: ExprOpBinContext) => void;
	/**
	 * Exit a parse tree produced by the `exprOpBin`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprOpBin?: (ctx: ExprOpBinContext) => void;

	/**
	 * Enter a parse tree produced by the `exprParen`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprParen?: (ctx: ExprParenContext) => void;
	/**
	 * Exit a parse tree produced by the `exprParen`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprParen?: (ctx: ExprParenContext) => void;

	/**
	 * Enter a parse tree produced by the `exprAtom`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprAtom?: (ctx: ExprAtomContext) => void;
	/**
	 * Exit a parse tree produced by the `exprAtom`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprAtom?: (ctx: ExprAtomContext) => void;

	/**
	 * Enter a parse tree produced by the `exprFuncCall`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExprFuncCall?: (ctx: ExprFuncCallContext) => void;
	/**
	 * Exit a parse tree produced by the `exprFuncCall`
	 * labeled alternative in `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExprFuncCall?: (ctx: ExprFuncCallContext) => void;

	/**
	 * Enter a parse tree produced by the `funcGlob`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	enterFuncGlob?: (ctx: FuncGlobContext) => void;
	/**
	 * Exit a parse tree produced by the `funcGlob`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	exitFuncGlob?: (ctx: FuncGlobContext) => void;

	/**
	 * Enter a parse tree produced by the `func`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	enterFunc?: (ctx: FuncContext) => void;
	/**
	 * Exit a parse tree produced by the `func`
	 * labeled alternative in `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	exitFunc?: (ctx: FuncContext) => void;

	/**
	 * Enter a parse tree produced by the `toArgsCallEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	enterToArgsCallEmpty?: (ctx: ToArgsCallEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toArgsCallEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	exitToArgsCallEmpty?: (ctx: ToArgsCallEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `toArgsCallNotEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	enterToArgsCallNotEmpty?: (ctx: ToArgsCallNotEmptyContext) => void;
	/**
	 * Exit a parse tree produced by the `toArgsCallNotEmpty`
	 * labeled alternative in `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	exitToArgsCallNotEmpty?: (ctx: ToArgsCallNotEmptyContext) => void;

	/**
	 * Enter a parse tree produced by the `argsCallVals`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCallVals?: (ctx: ArgsCallValsContext) => void;
	/**
	 * Exit a parse tree produced by the `argsCallVals`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCallVals?: (ctx: ArgsCallValsContext) => void;

	/**
	 * Enter a parse tree produced by the `argsCallVal`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCallVal?: (ctx: ArgsCallValContext) => void;
	/**
	 * Exit a parse tree produced by the `argsCallVal`
	 * labeled alternative in `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCallVal?: (ctx: ArgsCallValContext) => void;

	/**
	 * Enter a parse tree produced by the `bodyCode`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 */
	enterBodyCode?: (ctx: BodyCodeContext) => void;
	/**
	 * Exit a parse tree produced by the `bodyCode`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 */
	exitBodyCode?: (ctx: BodyCodeContext) => void;

	/**
	 * Enter a parse tree produced by the `bodyOper`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 */
	enterBodyOper?: (ctx: BodyOperContext) => void;
	/**
	 * Exit a parse tree produced by the `bodyOper`
	 * labeled alternative in `LParser.body`.
	 * @param ctx the parse tree
	 */
	exitBodyOper?: (ctx: BodyOperContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	enterFuncs?: (ctx: FuncsContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.funcs`.
	 * @param ctx the parse tree
	 */
	exitFuncs?: (ctx: FuncsContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	enterToArgs?: (ctx: ToArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.toArgs`.
	 * @param ctx the parse tree
	 */
	exitToArgs?: (ctx: ToArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	enterToBody?: (ctx: ToBodyContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.toBody`.
	 * @param ctx the parse tree
	 */
	exitToBody?: (ctx: ToBodyContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.oper`.
	 * @param ctx the parse tree
	 */
	enterOper?: (ctx: OperContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.oper`.
	 * @param ctx the parse tree
	 */
	exitOper?: (ctx: OperContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	enterToArgsCall?: (ctx: ToArgsCallContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.toArgsCall`.
	 * @param ctx the parse tree
	 */
	exitToArgsCall?: (ctx: ToArgsCallContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCall?: (ctx: ArgsCallContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCall?: (ctx: ArgsCallContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.variableRef`.
	 * @param ctx the parse tree
	 */
	enterVariableRef?: (ctx: VariableRefContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.variableRef`.
	 * @param ctx the parse tree
	 */
	exitVariableRef?: (ctx: VariableRefContext) => void;

	/**
	 * Enter a parse tree produced by `LParser.functionRef`.
	 * @param ctx the parse tree
	 */
	enterFunctionRef?: (ctx: FunctionRefContext) => void;
	/**
	 * Exit a parse tree produced by `LParser.functionRef`.
	 * @param ctx the parse tree
	 */
	exitFunctionRef?: (ctx: FunctionRefContext) => void;
}

