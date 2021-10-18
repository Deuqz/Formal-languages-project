import {ParseTree, TerminalNode} from "antlr4ts/tree";
import {CaretPosition, TokenPosition} from "./types";
import {ParserRuleContext, Token, TokenStream} from "antlr4ts";

export function tokenPositionComputer(identifierTokenTypes: number[] = []) {
    return (parseTree: ParseTree, tokens: TokenStream, caretPosition: CaretPosition) =>
        computeTokenPosition(parseTree, tokens, caretPosition, identifierTokenTypes);
}

export function computeTokenPosition(
    parseTree: ParseTree, tokens: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[] = []): TokenPosition {
    if(parseTree instanceof TerminalNode) {
		const x=computeTokenPositionOfTerminal(parseTree, tokens, caretPosition, identifierTokenTypes);
		if(x!=undefined)
         {return x;}
		else 
		return {index:0,
		context:parseTree,
				text:""	
      };
    } else {
		const x=computeTokenPositionOfChildNode(parseTree as ParserRuleContext, tokens, caretPosition, identifierTokenTypes);
        if(x!=undefined)
         {return x;}
		else 
		return {index:0,
		context:parseTree,
				text:""	
 };
    }
}

function positionOfToken(token: Token, text: string, caretPosition: CaretPosition, identifierTokenTypes: number[], parseTree: ParseTree) {
    const start = token.charPositionInLine;
    const stop = token.charPositionInLine + text.length;
    if (token.line == caretPosition.line && start <= caretPosition.column && stop >= caretPosition.column) {
        let index = token.tokenIndex;
        if (identifierTokenTypes.includes(token.type)) {
            index--;
        }
        return {
            index: index,
            context: parseTree,
            text: text.substring(0, caretPosition.column - start)
        };
    } else {
        return undefined;
    }
}

function computeTokenPositionOfTerminal(
    parseTree: TerminalNode, tokens: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[]) {
    const token = parseTree.symbol;
    const text = parseTree.text;
    return positionOfToken(token, text, caretPosition, identifierTokenTypes, parseTree);
}

function computeTokenPositionOfChildNode(
    parseTree: ParserRuleContext, tokens: TokenStream, caretPosition: CaretPosition, identifierTokenTypes: number[]) {
    if((parseTree.start && parseTree.start.line > caretPosition.line) ||
        (parseTree.stop && parseTree.stop.line < caretPosition.line)) {
        return undefined;
    }
    for (let i = 0; i < parseTree.childCount; i++) {
        const position = computeTokenPosition(parseTree.getChild(i), tokens, caretPosition, identifierTokenTypes);
        if (position !== undefined) {
            return position;
        }
    }
    if(parseTree.start && parseTree.stop) {
        for(let i = parseTree.start.tokenIndex; i <= parseTree.stop.tokenIndex; i++) {
			const x = tokens.get(i).text;
			if(x!=undefined){
            const pos = positionOfToken(tokens.get(i), x, caretPosition, identifierTokenTypes, parseTree);
            if(pos) {
               return pos;
            }
		}
        }
    }
    return undefined;
}