// Generated from grammar/LParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LParserListener } from "./LParserListener";
import { LParserVisitor } from "./LParserVisitor";


export class LParser extends Parser {
	public static readonly FUN = 1;
	public static readonly IF = 2;
	public static readonly ELSE = 3;
	public static readonly WHILE = 4;
	public static readonly S = 5;
	public static readonly NAME = 6;
	public static readonly INT = 7;
	public static readonly STR = 8;
	public static readonly WS = 9;
	public static readonly ACLOSE = 10;
	public static readonly AOPEN = 11;
	public static readonly BRCLOSE = 12;
	public static readonly BROPEN = 13;
	public static readonly COMMA = 14;
	public static readonly DOT = 15;
	public static readonly MULT = 16;
	public static readonly MOD = 17;
	public static readonly DIV = 18;
	public static readonly ADD = 19;
	public static readonly SUB = 20;
	public static readonly INCR = 21;
	public static readonly DECR = 22;
	public static readonly CONJ = 23;
	public static readonly DISJ = 24;
	public static readonly EXCL = 25;
	public static readonly COLON = 26;
	public static readonly SEMICOLON = 27;
	public static readonly ASSIGNMENT = 28;
	public static readonly ADD_ASSIGNMENT = 29;
	public static readonly SUB_ASSIGNMENT = 30;
	public static readonly MULT_ASSIGNMENT = 31;
	public static readonly DIV_ASSIGNMENT = 32;
	public static readonly MOD_ASSIGNMENT = 33;
	public static readonly ARROW = 34;
	public static readonly DOUBLE_ARROW = 35;
	public static readonly RANGE = 36;
	public static readonly COLONCOLON = 37;
	public static readonly Q_COLONCOLON = 38;
	public static readonly DOUBLE_SEMICOLON = 39;
	public static readonly HASH = 40;
	public static readonly AT = 41;
	public static readonly QUEST = 42;
	public static readonly ELVIS = 43;
	public static readonly LANGLE = 44;
	public static readonly RANGLE = 45;
	public static readonly LE = 46;
	public static readonly GE = 47;
	public static readonly EXCL_EQ = 48;
	public static readonly EXCL_EQEQ = 49;
	public static readonly AS_SAFE = 50;
	public static readonly EQEQ = 51;
	public static readonly EQEQEQ = 52;
	public static readonly SINGLE_QUOTE = 53;
	public static readonly ST = 54;
	public static readonly RULE_start = 0;
	public static readonly RULE_funcs = 1;
	public static readonly RULE_toArgs = 2;
	public static readonly RULE_args = 3;
	public static readonly RULE_toBody = 4;
	public static readonly RULE_body = 5;
	public static readonly RULE_oper = 6;
	public static readonly RULE_toArgsCall = 7;
	public static readonly RULE_argsCall = 8;
	public static readonly RULE_expr = 9;
	public static readonly RULE_variableRef = 10;
	public static readonly RULE_functionRef = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"start", "funcs", "toArgs", "args", "toBody", "body", "oper", "toArgsCall", 
		"argsCall", "expr", "variableRef", "functionRef",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'fun'", "'if'", "'else'", "'while'", "'skip'", undefined, 
		undefined, undefined, undefined, "'}'", "'{'", "')'", "'('", "','", "'.'", 
		"'*'", "'%'", "'/'", "'+'", "'-'", "'++'", "'--'", "'&&'", "'||'", "'!'", 
		"':'", "';'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'->'", "'=>'", 
		"'..'", "'::'", "'?::'", "';;'", "'#'", "'@'", "'?'", "'?:'", "'<'", "'>'", 
		"'<='", "'>='", "'!='", "'!=='", "'as?'", "'=='", "'==='", "'''", "'^'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FUN", "IF", "ELSE", "WHILE", "S", "NAME", "INT", "STR", "WS", 
		"ACLOSE", "AOPEN", "BRCLOSE", "BROPEN", "COMMA", "DOT", "MULT", "MOD", 
		"DIV", "ADD", "SUB", "INCR", "DECR", "CONJ", "DISJ", "EXCL", "COLON", 
		"SEMICOLON", "ASSIGNMENT", "ADD_ASSIGNMENT", "SUB_ASSIGNMENT", "MULT_ASSIGNMENT", 
		"DIV_ASSIGNMENT", "MOD_ASSIGNMENT", "ARROW", "DOUBLE_ARROW", "RANGE", 
		"COLONCOLON", "Q_COLONCOLON", "DOUBLE_SEMICOLON", "HASH", "AT", "QUEST", 
		"ELVIS", "LANGLE", "RANGLE", "LE", "GE", "EXCL_EQ", "EXCL_EQEQ", "AS_SAFE", 
		"EQEQ", "EQEQEQ", "SINGLE_QUOTE", "ST",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LParser._LITERAL_NAMES, LParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LParser._ATN, this);
	}
	// @RuleVersion(0)
	public start(): StartContext {
		const _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.funcs();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funcs(): FuncsContext {
		let _localctx: FuncsContext = new FuncsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LParser.RULE_funcs);
		try {
			this.state = 37;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				_localctx = new FuncGlobContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.match(LParser.FUN);
				this.state = 27;
				(_localctx as FuncGlobContext)._name = this.match(LParser.NAME);
				this.state = 28;
				this.toArgs();
				this.state = 29;
				this.toBody();
				this.state = 30;
				this.funcs();
				}
				break;

			case 2:
				_localctx = new FuncContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 32;
				this.match(LParser.FUN);
				this.state = 33;
				(_localctx as FuncContext)._name = this.match(LParser.NAME);
				this.state = 34;
				this.toArgs();
				this.state = 35;
				this.toBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toArgs(): ToArgsContext {
		let _localctx: ToArgsContext = new ToArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LParser.RULE_toArgs);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				_localctx = new ToArgsEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 39;
				this.match(LParser.BROPEN);
				this.state = 40;
				this.match(LParser.BRCLOSE);
				}
				break;

			case 2:
				_localctx = new ToArgsNotEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.match(LParser.BROPEN);
				this.state = 42;
				this.args();
				this.state = 43;
				this.match(LParser.BRCLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let _localctx: ArgsContext = new ArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LParser.RULE_args);
		try {
			this.state = 51;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				_localctx = new ArgsValsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 47;
				(_localctx as ArgsValsContext)._name = this.match(LParser.NAME);
				this.state = 48;
				this.match(LParser.COMMA);
				this.state = 49;
				this.args();
				}
				break;

			case 2:
				_localctx = new ArgsValContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 50;
				(_localctx as ArgsValContext)._name = this.match(LParser.NAME);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toBody(): ToBodyContext {
		let _localctx: ToBodyContext = new ToBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LParser.RULE_toBody);
		try {
			this.state = 59;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				_localctx = new ToBodyEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.match(LParser.AOPEN);
				this.state = 54;
				this.match(LParser.ACLOSE);
				}
				break;

			case 2:
				_localctx = new ToBodyNotEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.match(LParser.AOPEN);
				this.state = 56;
				this.body();
				this.state = 57;
				this.match(LParser.ACLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LParser.RULE_body);
		try {
			this.state = 68;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				_localctx = new BodyCodeContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.oper();
				this.state = 62;
				this.match(LParser.SEMICOLON);
				this.state = 63;
				this.body();
				}
				break;

			case 2:
				_localctx = new BodyOperContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 65;
				this.oper();
				this.state = 66;
				this.match(LParser.SEMICOLON);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oper(): OperContext {
		let _localctx: OperContext = new OperContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LParser.RULE_oper);
		try {
			this.state = 96;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				_localctx = new OpBindContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 70;
				(_localctx as OpBindContext)._name = this.match(LParser.NAME);
				this.state = 71;
				this.match(LParser.ASSIGNMENT);
				this.state = 72;
				this.expr(0);
				}
				break;

			case 2:
				_localctx = new OpSkipContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 73;
				(_localctx as OpSkipContext)._name = this.match(LParser.S);
				}
				break;

			case 3:
				_localctx = new OpIfElseContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 74;
				this.match(LParser.IF);
				this.state = 75;
				this.match(LParser.BROPEN);
				this.state = 76;
				this.expr(0);
				this.state = 77;
				this.match(LParser.BRCLOSE);
				this.state = 78;
				(_localctx as OpIfElseContext)._manage = this.toBody();
				this.state = 79;
				this.match(LParser.ELSE);
				this.state = 80;
				(_localctx as OpIfElseContext)._alternative = this.toBody();
				}
				break;

			case 4:
				_localctx = new OpIfContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 82;
				this.match(LParser.IF);
				this.state = 83;
				this.match(LParser.BROPEN);
				this.state = 84;
				this.expr(0);
				this.state = 85;
				this.match(LParser.BRCLOSE);
				this.state = 86;
				this.toBody();
				}
				break;

			case 5:
				_localctx = new OpWhileContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 88;
				this.match(LParser.WHILE);
				this.state = 89;
				this.match(LParser.BROPEN);
				this.state = 90;
				this.expr(0);
				this.state = 91;
				this.match(LParser.BRCLOSE);
				this.state = 92;
				this.toBody();
				}
				break;

			case 6:
				_localctx = new OpFuncCallContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 94;
				(_localctx as OpFuncCallContext)._name = this.match(LParser.NAME);
				this.state = 95;
				this.toArgsCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toArgsCall(): ToArgsCallContext {
		let _localctx: ToArgsCallContext = new ToArgsCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LParser.RULE_toArgsCall);
		try {
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				_localctx = new ToArgsCallEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 98;
				this.match(LParser.BROPEN);
				this.state = 99;
				this.match(LParser.BRCLOSE);
				}
				break;

			case 2:
				_localctx = new ToArgsCallNotEmptyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
				this.match(LParser.BROPEN);
				this.state = 101;
				this.argsCall();
				this.state = 102;
				this.match(LParser.BRCLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argsCall(): ArgsCallContext {
		let _localctx: ArgsCallContext = new ArgsCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LParser.RULE_argsCall);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				_localctx = new ArgsCallValsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				(_localctx as ArgsCallValsContext)._val = this.expr(0);
				this.state = 107;
				this.match(LParser.COMMA);
				this.state = 108;
				this.argsCall();
				}
				break;

			case 2:
				_localctx = new ArgsCallValContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 110;
				(_localctx as ArgsCallValContext)._val = this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		const _parentctx: ParserRuleContext = this._ctx;
		const _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		const _startState = 18;
		this.enterRecursionRule(_localctx, 18, LParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new ExprExp1Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 114;
				(_localctx as ExprExp1Context)._atom = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LParser.NAME) | (1 << LParser.INT) | (1 << LParser.STR))) !== 0))) {
					(_localctx as ExprExp1Context)._atom = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 115;
				this.match(LParser.ST);
				this.state = 116;
				this.expr(13);
				}
				break;

			case 2:
				{
				_localctx = new ExprExp2Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				(_localctx as ExprExp2Context)._name = this.match(LParser.NAME);
				this.state = 118;
				this.toArgsCall();
				this.state = 119;
				this.match(LParser.ST);
				this.state = 120;
				this.expr(12);
				}
				break;

			case 3:
				{
				_localctx = new ExprExp3Context(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.match(LParser.BROPEN);
				this.state = 123;
				(_localctx as ExprExp3Context)._left = this.expr(0);
				this.state = 124;
				this.match(LParser.BRCLOSE);
				this.state = 125;
				this.match(LParser.ST);
				this.state = 126;
				(_localctx as ExprExp3Context)._right = this.expr(11);
				}
				break;

			case 4:
				{
				_localctx = new ExprOpUnContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				(_localctx as ExprOpUnContext)._op = this.match(LParser.SUB);
				this.state = 129;
				this.expr(10);
				}
				break;

			case 5:
				{
				_localctx = new ExprOpUnContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				(_localctx as ExprOpUnContext)._op = this.match(LParser.EXCL);
				this.state = 131;
				this.expr(6);
				}
				break;

			case 6:
				{
				_localctx = new ExprParenContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 132;
				this.match(LParser.BROPEN);
				this.state = 133;
				this.expr(0);
				this.state = 134;
				this.match(LParser.BRCLOSE);
				}
				break;

			case 7:
				{
				_localctx = new ExprAtomContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 136;
				(_localctx as ExprAtomContext)._atom = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LParser.NAME) | (1 << LParser.INT) | (1 << LParser.STR))) !== 0))) {
					(_localctx as ExprAtomContext)._atom = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 8:
				{
				_localctx = new ExprFuncCallContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 137;
				(_localctx as ExprFuncCallContext)._name = this.match(LParser.NAME);
				this.state = 138;
				this.toArgsCall();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 156;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ExprOpBinContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprOpBinContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LParser.RULE_expr);
						this.state = 141;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 142;
						(_localctx as ExprOpBinContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LParser.MULT || _la === LParser.DIV)) {
							(_localctx as ExprOpBinContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 143;
						(_localctx as ExprOpBinContext)._right = this.expr(10);
						}
						break;

					case 2:
						{
						_localctx = new ExprOpBinContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprOpBinContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LParser.RULE_expr);
						this.state = 144;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 145;
						(_localctx as ExprOpBinContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LParser.ADD || _la === LParser.SUB)) {
							(_localctx as ExprOpBinContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 146;
						(_localctx as ExprOpBinContext)._right = this.expr(9);
						}
						break;

					case 3:
						{
						_localctx = new ExprOpBinContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprOpBinContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LParser.RULE_expr);
						this.state = 147;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 148;
						(_localctx as ExprOpBinContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LParser.DIV_ASSIGNMENT - 32)) | (1 << (LParser.LANGLE - 32)) | (1 << (LParser.RANGLE - 32)) | (1 << (LParser.LE - 32)) | (1 << (LParser.GE - 32)) | (1 << (LParser.EQEQ - 32)))) !== 0))) {
							(_localctx as ExprOpBinContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 149;
						(_localctx as ExprOpBinContext)._right = this.expr(8);
						}
						break;

					case 4:
						{
						_localctx = new ExprOpBinContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprOpBinContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LParser.RULE_expr);
						this.state = 150;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 151;
						(_localctx as ExprOpBinContext)._op = this.match(LParser.CONJ);
						this.state = 152;
						(_localctx as ExprOpBinContext)._right = this.expr(6);
						}
						break;

					case 5:
						{
						_localctx = new ExprOpBinContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ExprOpBinContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, LParser.RULE_expr);
						this.state = 153;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 154;
						(_localctx as ExprOpBinContext)._op = this.match(LParser.DISJ);
						this.state = 155;
						(_localctx as ExprOpBinContext)._right = this.expr(5);
						}
						break;
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableRef(): VariableRefContext {
		const _localctx: VariableRefContext = new VariableRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LParser.RULE_variableRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(LParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionRef(): FunctionRefContext {
		const _localctx: FunctionRefContext = new FunctionRefContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LParser.RULE_functionRef);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 163;
			this.match(LParser.NAME);
			this.state = 164;
			this.match(LParser.BROPEN);
			this.state = 165;
			this.match(LParser.BRCLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);

		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x038\xAA\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x05\x03(\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x040\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x056\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06>\n" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07G" +
		"\n\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x05\bc\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\tk\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\nr\n\n\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x8E" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\x9F\n\v\f\v\x0E\v\xA2\v\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x02\x02\x03\x14\x0E\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02" +
		"\x06\x03\x02\b\n\x04\x02\x12\x12\x14\x14\x03\x02\x15\x16\x05\x02\"\"." +
		"155\x02\xB5\x02\x1A\x03\x02\x02\x02\x04'\x03\x02\x02\x02\x06/\x03\x02" +
		"\x02\x02\b5\x03\x02\x02\x02\n=\x03\x02\x02\x02\fF\x03\x02\x02\x02\x0E" +
		"b\x03\x02\x02\x02\x10j\x03\x02\x02\x02\x12q\x03\x02\x02\x02\x14\x8D\x03" +
		"\x02\x02\x02\x16\xA3\x03\x02\x02\x02\x18\xA5\x03\x02\x02\x02\x1A\x1B\x05" +
		"\x04\x03\x02\x1B\x03\x03\x02\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1E\x07" +
		"\b\x02\x02\x1E\x1F\x05\x06\x04\x02\x1F \x05\n\x06\x02 !\x05\x04\x03\x02" +
		"!(\x03\x02\x02\x02\"#\x07\x03\x02\x02#$\x07\b\x02\x02$%\x05\x06\x04\x02" +
		"%&\x05\n\x06\x02&(\x03\x02\x02\x02'\x1C\x03\x02\x02\x02'\"\x03\x02\x02" +
		"\x02(\x05\x03\x02\x02\x02)*\x07\x0F\x02\x02*0\x07\x0E\x02\x02+,\x07\x0F" +
		"\x02\x02,-\x05\b\x05\x02-.\x07\x0E\x02\x02.0\x03\x02\x02\x02/)\x03\x02" +
		"\x02\x02/+\x03\x02\x02\x020\x07\x03\x02\x02\x0212\x07\b\x02\x0223\x07" +
		"\x10\x02\x0236\x05\b\x05\x0246\x07\b\x02\x0251\x03\x02\x02\x0254\x03\x02" +
		"\x02\x026\t\x03\x02\x02\x0278\x07\r\x02\x028>\x07\f\x02\x029:\x07\r\x02" +
		"\x02:;\x05\f\x07\x02;<\x07\f\x02\x02<>\x03\x02\x02\x02=7\x03\x02\x02\x02" +
		"=9\x03\x02\x02\x02>\v\x03\x02\x02\x02?@\x05\x0E\b\x02@A\x07\x1D\x02\x02" +
		"AB\x05\f\x07\x02BG\x03\x02\x02\x02CD\x05\x0E\b\x02DE\x07\x1D\x02\x02E" +
		"G\x03\x02\x02\x02F?\x03\x02\x02\x02FC\x03\x02\x02\x02G\r\x03\x02\x02\x02" +
		"HI\x07\b\x02\x02IJ\x07\x1E\x02\x02Jc\x05\x14\v\x02Kc\x07\x07\x02\x02L" +
		"M\x07\x04\x02\x02MN\x07\x0F\x02\x02NO\x05\x14\v\x02OP\x07\x0E\x02\x02" +
		"PQ\x05\n\x06\x02QR\x07\x05\x02\x02RS\x05\n\x06\x02Sc\x03\x02\x02\x02T" +
		"U\x07\x04\x02\x02UV\x07\x0F\x02\x02VW\x05\x14\v\x02WX\x07\x0E\x02\x02" +
		"XY\x05\n\x06\x02Yc\x03\x02\x02\x02Z[\x07\x06\x02\x02[\\\x07\x0F\x02\x02" +
		"\\]\x05\x14\v\x02]^\x07\x0E\x02\x02^_\x05\n\x06\x02_c\x03\x02\x02\x02" +
		"`a\x07\b\x02\x02ac\x05\x10\t\x02bH\x03\x02\x02\x02bK\x03\x02\x02\x02b" +
		"L\x03\x02\x02\x02bT\x03\x02\x02\x02bZ\x03\x02\x02\x02b`\x03\x02\x02\x02" +
		"c\x0F\x03\x02\x02\x02de\x07\x0F\x02\x02ek\x07\x0E\x02\x02fg\x07\x0F\x02" +
		"\x02gh\x05\x12\n\x02hi\x07\x0E\x02\x02ik\x03\x02\x02\x02jd\x03\x02\x02" +
		"\x02jf\x03\x02\x02\x02k\x11\x03\x02\x02\x02lm\x05\x14\v\x02mn\x07\x10" +
		"\x02\x02no\x05\x12\n\x02or\x03\x02\x02\x02pr\x05\x14\v\x02ql\x03\x02\x02" +
		"\x02qp\x03\x02\x02\x02r\x13\x03\x02\x02\x02st\b\v\x01\x02tu\t\x02\x02" +
		"\x02uv\x078\x02\x02v\x8E\x05\x14\v\x0Fwx\x07\b\x02\x02xy\x05\x10\t\x02" +
		"yz\x078\x02\x02z{\x05\x14\v\x0E{\x8E\x03\x02\x02\x02|}\x07\x0F\x02\x02" +
		"}~\x05\x14\v\x02~\x7F\x07\x0E\x02\x02\x7F\x80\x078\x02\x02\x80\x81\x05" +
		"\x14\v\r\x81\x8E\x03\x02\x02\x02\x82\x83\x07\x16\x02\x02\x83\x8E\x05\x14" +
		"\v\f\x84\x85\x07\x1B\x02\x02\x85\x8E\x05\x14\v\b\x86\x87\x07\x0F\x02\x02" +
		"\x87\x88\x05\x14\v\x02\x88\x89\x07\x0E\x02\x02\x89\x8E\x03\x02\x02\x02" +
		"\x8A\x8E\t\x02\x02\x02\x8B\x8C\x07\b\x02\x02\x8C\x8E\x05\x10\t\x02\x8D" +
		"s\x03\x02\x02\x02\x8Dw\x03\x02\x02\x02\x8D|\x03\x02\x02\x02\x8D\x82\x03" +
		"\x02\x02\x02\x8D\x84\x03\x02\x02\x02\x8D\x86\x03\x02\x02\x02\x8D\x8A\x03" +
		"\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\xA0\x03\x02\x02\x02\x8F\x90\f" +
		"\v\x02\x02\x90\x91\t\x03\x02\x02\x91\x9F\x05\x14\v\f\x92\x93\f\n\x02\x02" +
		"\x93\x94\t\x04\x02\x02\x94\x9F\x05\x14\v\v\x95\x96\f\t\x02\x02\x96\x97" +
		"\t\x05\x02\x02\x97\x9F\x05\x14\v\n\x98\x99\f\x07\x02\x02\x99\x9A\x07\x19" +
		"\x02\x02\x9A\x9F\x05\x14\v\b\x9B\x9C\f\x06\x02\x02\x9C\x9D\x07\x1A\x02" +
		"\x02\x9D\x9F\x05\x14\v\x07\x9E\x8F\x03\x02\x02\x02\x9E\x92\x03\x02\x02" +
		"\x02\x9E\x95\x03\x02\x02\x02\x9E\x98\x03\x02\x02\x02\x9E\x9B\x03\x02\x02" +
		"\x02\x9F\xA2\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02" +
		"\x02\xA1\x15\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\xA4\x07\b\x02" +
		"\x02\xA4\x17\x03\x02\x02\x02\xA5\xA6\x07\b\x02\x02\xA6\xA7\x07\x0F\x02" +
		"\x02\xA7\xA8\x07\x0E\x02\x02\xA8\x19\x03\x02\x02\x02\r'/5=Fbjq\x8D\x9E" +
		"\xA0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LParser.__ATN) {
			LParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LParser._serializedATN));
		}

		return LParser.__ATN;
	}

}

export class StartContext extends ParserRuleContext {
	public funcs(): FuncsContext {
		return this.getRuleContext(0, FuncsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_start; }
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_funcs; }
	public copyFrom(ctx: FuncsContext): void {
		super.copyFrom(ctx);
	}
}
export class FuncGlobContext extends FuncsContext {
	public _name: Token | undefined;
	public FUN(): TerminalNode { return this.getToken(LParser.FUN, 0); }
	public toArgs(): ToArgsContext {
		return this.getRuleContext(0, ToArgsContext);
	}
	public toBody(): ToBodyContext {
		return this.getRuleContext(0, ToBodyContext);
	}
	public funcs(): FuncsContext {
		return this.getRuleContext(0, FuncsContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: FuncsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterFuncGlob) {
			listener.enterFuncGlob(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitFuncGlob) {
			listener.exitFuncGlob(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitFuncGlob) {
			return visitor.visitFuncGlob(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncContext extends FuncsContext {
	public _name: Token | undefined;
	public FUN(): TerminalNode { return this.getToken(LParser.FUN, 0); }
	public toArgs(): ToArgsContext {
		return this.getRuleContext(0, ToArgsContext);
	}
	public toBody(): ToBodyContext {
		return this.getRuleContext(0, ToBodyContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: FuncsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterFunc) {
			listener.enterFunc(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitFunc) {
			listener.exitFunc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitFunc) {
			return visitor.visitFunc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToArgsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_toArgs; }
	public copyFrom(ctx: ToArgsContext): void {
		super.copyFrom(ctx);
	}
}
export class ToArgsEmptyContext extends ToArgsContext {
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(ctx: ToArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToArgsEmpty) {
			listener.enterToArgsEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToArgsEmpty) {
			listener.exitToArgsEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToArgsEmpty) {
			return visitor.visitToArgsEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToArgsNotEmptyContext extends ToArgsContext {
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(ctx: ToArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToArgsNotEmpty) {
			listener.enterToArgsNotEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToArgsNotEmpty) {
			listener.exitToArgsNotEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToArgsNotEmpty) {
			return visitor.visitToArgsNotEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_args; }
	public copyFrom(ctx: ArgsContext): void {
		super.copyFrom(ctx);
	}
}
export class ArgsValsContext extends ArgsContext {
	public _name: Token | undefined;
	public COMMA(): TerminalNode { return this.getToken(LParser.COMMA, 0); }
	public args(): ArgsContext {
		return this.getRuleContext(0, ArgsContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: ArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterArgsVals) {
			listener.enterArgsVals(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitArgsVals) {
			listener.exitArgsVals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitArgsVals) {
			return visitor.visitArgsVals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgsValContext extends ArgsContext {
	public _name: Token | undefined;
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: ArgsContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterArgsVal) {
			listener.enterArgsVal(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitArgsVal) {
			listener.exitArgsVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitArgsVal) {
			return visitor.visitArgsVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToBodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_toBody; }
	public copyFrom(ctx: ToBodyContext): void {
		super.copyFrom(ctx);
	}
}
export class ToBodyEmptyContext extends ToBodyContext {
	public AOPEN(): TerminalNode { return this.getToken(LParser.AOPEN, 0); }
	public ACLOSE(): TerminalNode { return this.getToken(LParser.ACLOSE, 0); }
	constructor(ctx: ToBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToBodyEmpty) {
			listener.enterToBodyEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToBodyEmpty) {
			listener.exitToBodyEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToBodyEmpty) {
			return visitor.visitToBodyEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToBodyNotEmptyContext extends ToBodyContext {
	public AOPEN(): TerminalNode { return this.getToken(LParser.AOPEN, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public ACLOSE(): TerminalNode { return this.getToken(LParser.ACLOSE, 0); }
	constructor(ctx: ToBodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToBodyNotEmpty) {
			listener.enterToBodyNotEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToBodyNotEmpty) {
			listener.exitToBodyNotEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToBodyNotEmpty) {
			return visitor.visitToBodyNotEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class BodyCodeContext extends BodyContext {
	public oper(): OperContext {
		return this.getRuleContext(0, OperContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(LParser.SEMICOLON, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterBodyCode) {
			listener.enterBodyCode(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitBodyCode) {
			listener.exitBodyCode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitBodyCode) {
			return visitor.visitBodyCode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BodyOperContext extends BodyContext {
	public oper(): OperContext {
		return this.getRuleContext(0, OperContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(LParser.SEMICOLON, 0); }
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterBodyOper) {
			listener.enterBodyOper(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitBodyOper) {
			listener.exitBodyOper(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitBodyOper) {
			return visitor.visitBodyOper(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OperContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_oper; }
	public copyFrom(ctx: OperContext): void {
		super.copyFrom(ctx);
	}
}
export class OpBindContext extends OperContext {
	public _name: Token | undefined;
	public ASSIGNMENT(): TerminalNode { return this.getToken(LParser.ASSIGNMENT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpBind) {
			listener.enterOpBind(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpBind) {
			listener.exitOpBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpBind) {
			return visitor.visitOpBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpSkipContext extends OperContext {
	public _name: Token | undefined;
	public S(): TerminalNode { return this.getToken(LParser.S, 0); }
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpSkip) {
			listener.enterOpSkip(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpSkip) {
			listener.exitOpSkip(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpSkip) {
			return visitor.visitOpSkip(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpIfElseContext extends OperContext {
	public _manage: ToBodyContext | undefined;
	public _alternative: ToBodyContext | undefined;
	public IF(): TerminalNode { return this.getToken(LParser.IF, 0); }
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	public ELSE(): TerminalNode { return this.getToken(LParser.ELSE, 0); }
	public toBody(): ToBodyContext[];
	public toBody(i: number): ToBodyContext;
	public toBody(i?: number): ToBodyContext | ToBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ToBodyContext);
		} else {
			return this.getRuleContext(i, ToBodyContext);
		}
	}
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpIfElse) {
			listener.enterOpIfElse(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpIfElse) {
			listener.exitOpIfElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpIfElse) {
			return visitor.visitOpIfElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpIfContext extends OperContext {
	public IF(): TerminalNode { return this.getToken(LParser.IF, 0); }
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	public toBody(): ToBodyContext {
		return this.getRuleContext(0, ToBodyContext);
	}
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpIf) {
			listener.enterOpIf(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpIf) {
			listener.exitOpIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpIf) {
			return visitor.visitOpIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpWhileContext extends OperContext {
	public WHILE(): TerminalNode { return this.getToken(LParser.WHILE, 0); }
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	public toBody(): ToBodyContext {
		return this.getRuleContext(0, ToBodyContext);
	}
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpWhile) {
			listener.enterOpWhile(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpWhile) {
			listener.exitOpWhile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpWhile) {
			return visitor.visitOpWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpFuncCallContext extends OperContext {
	public _name: Token | undefined;
	public toArgsCall(): ToArgsCallContext {
		return this.getRuleContext(0, ToArgsCallContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: OperContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterOpFuncCall) {
			listener.enterOpFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitOpFuncCall) {
			listener.exitOpFuncCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitOpFuncCall) {
			return visitor.visitOpFuncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ToArgsCallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_toArgsCall; }
	public copyFrom(ctx: ToArgsCallContext): void {
		super.copyFrom(ctx);
	}
}
export class ToArgsCallEmptyContext extends ToArgsCallContext {
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(ctx: ToArgsCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToArgsCallEmpty) {
			listener.enterToArgsCallEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToArgsCallEmpty) {
			listener.exitToArgsCallEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToArgsCallEmpty) {
			return visitor.visitToArgsCallEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ToArgsCallNotEmptyContext extends ToArgsCallContext {
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public argsCall(): ArgsCallContext {
		return this.getRuleContext(0, ArgsCallContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(ctx: ToArgsCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterToArgsCallNotEmpty) {
			listener.enterToArgsCallNotEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitToArgsCallNotEmpty) {
			listener.exitToArgsCallNotEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitToArgsCallNotEmpty) {
			return visitor.visitToArgsCallNotEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsCallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_argsCall; }
	public copyFrom(ctx: ArgsCallContext): void {
		super.copyFrom(ctx);
	}
}
export class ArgsCallValsContext extends ArgsCallContext {
	public _val: ExprContext | undefined;
	public COMMA(): TerminalNode { return this.getToken(LParser.COMMA, 0); }
	public argsCall(): ArgsCallContext {
		return this.getRuleContext(0, ArgsCallContext);
	}
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ArgsCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterArgsCallVals) {
			listener.enterArgsCallVals(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitArgsCallVals) {
			listener.exitArgsCallVals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitArgsCallVals) {
			return visitor.visitArgsCallVals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgsCallValContext extends ArgsCallContext {
	public _val: ExprContext | undefined;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ArgsCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterArgsCallVal) {
			listener.enterArgsCallVal(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitArgsCallVal) {
			listener.exitArgsCallVal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitArgsCallVal) {
			return visitor.visitArgsCallVal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class ExprExp1Context extends ExprContext {
	public _atom: Token | undefined;
	public ST(): TerminalNode { return this.getToken(LParser.ST, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LParser.NAME, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(LParser.INT, 0); }
	public STR(): TerminalNode | undefined { return this.tryGetToken(LParser.STR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprExp1) {
			listener.enterExprExp1(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprExp1) {
			listener.exitExprExp1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprExp1) {
			return visitor.visitExprExp1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprExp2Context extends ExprContext {
	public _name: Token | undefined;
	public toArgsCall(): ToArgsCallContext {
		return this.getRuleContext(0, ToArgsCallContext);
	}
	public ST(): TerminalNode { return this.getToken(LParser.ST, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprExp2) {
			listener.enterExprExp2(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprExp2) {
			listener.exitExprExp2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprExp2) {
			return visitor.visitExprExp2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprExp3Context extends ExprContext {
	public _left: ExprContext | undefined;
	public _right: ExprContext | undefined;
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	public ST(): TerminalNode { return this.getToken(LParser.ST, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprExp3) {
			listener.enterExprExp3(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprExp3) {
			listener.exitExprExp3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprExp3) {
			return visitor.visitExprExp3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprOpUnContext extends ExprContext {
	public _op: Token | undefined;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public SUB(): TerminalNode | undefined { return this.tryGetToken(LParser.SUB, 0); }
	public EXCL(): TerminalNode | undefined { return this.tryGetToken(LParser.EXCL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprOpUn) {
			listener.enterExprOpUn(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprOpUn) {
			listener.exitExprOpUn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprOpUn) {
			return visitor.visitExprOpUn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprOpBinContext extends ExprContext {
	public _left: ExprContext | undefined;
	public _op: Token | undefined;
	public _right: ExprContext | undefined;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public MULT(): TerminalNode | undefined { return this.tryGetToken(LParser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(LParser.DIV, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(LParser.ADD, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(LParser.SUB, 0); }
	public EQEQ(): TerminalNode | undefined { return this.tryGetToken(LParser.EQEQ, 0); }
	public DIV_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(LParser.DIV_ASSIGNMENT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(LParser.LE, 0); }
	public LANGLE(): TerminalNode | undefined { return this.tryGetToken(LParser.LANGLE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(LParser.GE, 0); }
	public RANGLE(): TerminalNode | undefined { return this.tryGetToken(LParser.RANGLE, 0); }
	public CONJ(): TerminalNode | undefined { return this.tryGetToken(LParser.CONJ, 0); }
	public DISJ(): TerminalNode | undefined { return this.tryGetToken(LParser.DISJ, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprOpBin) {
			listener.enterExprOpBin(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprOpBin) {
			listener.exitExprOpBin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprOpBin) {
			return visitor.visitExprOpBin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprParenContext extends ExprContext {
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprParen) {
			listener.enterExprParen(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprParen) {
			listener.exitExprParen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprParen) {
			return visitor.visitExprParen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprAtomContext extends ExprContext {
	public _atom: Token | undefined;
	public NAME(): TerminalNode | undefined { return this.tryGetToken(LParser.NAME, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(LParser.INT, 0); }
	public STR(): TerminalNode | undefined { return this.tryGetToken(LParser.STR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprAtom) {
			listener.enterExprAtom(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprAtom) {
			listener.exitExprAtom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprAtom) {
			return visitor.visitExprAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExprFuncCallContext extends ExprContext {
	public _name: Token | undefined;
	public toArgsCall(): ToArgsCallContext {
		return this.getRuleContext(0, ToArgsCallContext);
	}
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterExprFuncCall) {
			listener.enterExprFuncCall(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitExprFuncCall) {
			listener.exitExprFuncCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitExprFuncCall) {
			return visitor.visitExprFuncCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableRefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_variableRef; }
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterVariableRef) {
			listener.enterVariableRef(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitVariableRef) {
			listener.exitVariableRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitVariableRef) {
			return visitor.visitVariableRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionRefContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(LParser.NAME, 0); }
	public BROPEN(): TerminalNode { return this.getToken(LParser.BROPEN, 0); }
	public BRCLOSE(): TerminalNode { return this.getToken(LParser.BRCLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LParser.RULE_functionRef; }
	// @Override
	public enterRule(listener: LParserListener): void {
		if (listener.enterFunctionRef) {
			listener.enterFunctionRef(this);
		}
	}
	// @Override
	public exitRule(listener: LParserListener): void {
		if (listener.exitFunctionRef) {
			listener.exitFunctionRef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LParserVisitor<Result>): Result {
		if (visitor.visitFunctionRef) {
			return visitor.visitFunctionRef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


