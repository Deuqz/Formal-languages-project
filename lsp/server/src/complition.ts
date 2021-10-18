/*mport {LLexer} from "./antlr/LLexer";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {LParser} from "./antlr/LParser";
import {CodeCompletionCore, ScopedSymbol, SymbolTable, VariableSymbol} from "antlr4-c3";
import {ParseTree, TerminalNode} from "antlr4ts/tree";
import {SymbolTableVisitor} from "./symbol-table-visitor";
import {Symbol} from "antlr4-c3/out/src/SymbolTable";
import {CaretPosition, ComputeTokenPositionFunction, TokenPosition} from "./types";
import { computeTokenPosition } from './compute-token-position';


export function filterTokens_startsWith(text: string, candidates: string[]) {
    if(text.trim().length == 0) {
        return candidates;
    } else {
        return candidates.filter(c => c.toLowerCase().startsWith(text.toLowerCase()));
    }
}


export function getSuggestionsForParseTree(
    parser: LParser, parseTree: ParseTree, symbolTableFn: () => SymbolTable, position: TokenPosition) {
    const core = new CodeCompletionCore(parser);
    // Luckily, the Kotlin lexer defines all keywords and identifiers after operators,
    // so we can simply exclude the first non-keyword tokens
    
    const candidates = core.collectCandidates(position.index);

    const completions: never[] = [];
    const tokens: string[] = [];
    candidates.tokens.forEach((_, k) => {
       
            const symbolicName = parser.vocabulary.getSymbolicName(k);
            if (symbolicName) {
                tokens.push(symbolicName.toLowerCase());
            }
        
    });
    
 
    return completions;
}

export function getSuggestions(
    code: string, caretPosition: CaretPosition, computeTokenIndex: ComputeTokenPositionFunction) {
    const input = CharStreams.fromString(code);
    const lexer = new LLexer(input);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LParser(tokenStream);

    const parseTree = parser.start();

    const position = computeTokenIndex(parseTree, tokenStream, caretPosition);
    if(!position) {
        return [];
    }
    return getSuggestionsForParseTree(
        parser, parseTree, () => new SymbolTableVisitor().visit(parseTree), position);
}*/