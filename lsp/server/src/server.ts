/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
    CodeAction,
    WorkspaceEdit
} from 'vscode-languageserver/node';

import {CharStreams, CommonTokenStream} from "antlr4ts";
import {CodeCompletionCore, ScopedSymbol, SymbolTable, VariableSymbol} from "antlr4-c3";

import {
	TextDocument,
    TextEdit
} from 'vscode-languageserver-textdocument';
import {LLexer} from "./antlr/LLexer";
import {LParser} from "./antlr/LParser";
import { computeTokenPosition } from './compute-token-position';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings: Map<string, Thenable<ExampleSettings>> = new Map();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = <ExampleSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}

	// Revalidate all open text documents
	documents.all().forEach(validateTextDocument);
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	// In this simple example we get the settings for every validate run.
	const settings = await getDocumentSettings(textDocument.uri);

	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();

	let m: RegExpExecArray | null;

	let problems = 0;
	const diagnostics: Diagnostic[] = [];


    const pattern2 = /\b(fun +)([A-Z]+)[\w]*\b/g;

	while ((m = pattern2.exec(text))) {
		problems++;
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: textDocument.positionAt(m.index + m[1].length),
				end: textDocument.positionAt(m.index + m[1].length+m[2].length)
			},
			message: `fun name is not camelCase.`+m.index,
            source: m[2],
		};
		if (hasDiagnosticRelatedInformationCapability) {
			diagnostic.relatedInformation = [
				{
					location: {
						uri: textDocument.uri,
						range: Object.assign({}, diagnostic.range)
					},
					message: 'Spelling matters'
				}
			];
		}
		diagnostics.push(diagnostic);
	}
    const t = documents.get(textDocument.uri)?.getText() || "";
    const input = CharStreams.fromString(t);
    const lexer = new LLexer(input);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LParser(tokenStream);

    const parseTree = parser.start();
    parser.start();
    const core = new CodeCompletionCore(parser);
    const tokens:string[] = [];
    
    const keywords: string[] = [];
    
const ts = tokenStream.getTokens();
const names = [];

for(let i=0;i<ts.length;i++){
   if(ts[i].type==LLexer.NAME){
     if(ts[i-1].type==LLexer.FUN){
      names.push(ts[i].text);
      console.log(ts[i].text);
     } else {
         if(ts[i+1].type==LLexer.BROPEN && names.indexOf( ts[i].text ) == -1 ){
            const diagnostic: Diagnostic = {
             //  severity: DiagnosticSeverity.Warning,
                range: {
                    start: textDocument.positionAt(ts[i].startIndex),
                    end: textDocument.positionAt(ts[i].stopIndex)
                },
                message: `fun is not found.`+ts[i].text,
            };
            diagnostics.push(diagnostic);
         }
     }
   }
}



	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
    
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received an file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		// The pass parameter contains the position of the text document in
		// which code complete got requested. For the example we ignore this
		// info and always provide the same completion items.

    const t = documents.get(_textDocumentPosition.textDocument.uri)?.getText() || "";
    const input = CharStreams.fromString(t);
    const lexer = new LLexer(input);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LParser(tokenStream);

    const parseTree = parser.start();
    parser.start();
    const core = new CodeCompletionCore(parser);

const pos = _textDocumentPosition.position;
    const tokens:string[] = [];
    
    const keywords: string[] = [];
    
const ts = tokenStream.getTokens();
const names = [];
const funcs = [];
let tok = 0;
for(let i=0;i<ts.length;i++){
    if(ts[i].line < pos.line){
        tok=i;
    } else {
        if(ts[i].line == pos.line && ts[i].charPositionInLine < pos.character){
          tok=i;
        }
    }
}

const candidates = core.collectCandidates(tok);
const sugg: CompletionItem[] = [];
for(let i=0;i<=tok;i++){
  if(ts[i].type==LLexer.NAME && ts[i].line < pos.line && ts[i-1].type==LLexer.FUN){
       funcs.push(ts[i].text);
       console.log(ts[i].text+" :"+ts[i].line+ " : "+ts[i].charPositionInLine);
  }
}
let psp=-1;
for(let i=tok;i>0 && psp!=0;i--){
    if(ts[i].type==LLexer.ACLOSE){
     psp-=1;
    }
    if(ts[i].type==LLexer.AOPEN){
        psp+=1;
    }
    if(ts[i].type==LLexer.NAME && ts[i].line < pos.line && ts[i-1].type!=LLexer.FUN){
         names.push(ts[i].text);
         console.log(ts[i].text+" :"+ts[i].line+ " : "+ts[i].charPositionInLine);
    }
  }

for (const candidate of candidates.tokens) {
    console.log(parser.vocabulary.getSymbolicName(candidate[0]));
    if(parser.vocabulary.getSymbolicName(candidate[0])=="NAME"){
        names.forEach(n => {
            if(n!=undefined)
            sugg.push({
                label: n,
                kind: CompletionItemKind.Value
              });

    });
    funcs.forEach(n => {
        if(n!=undefined)
        sugg.push({
            label: n+`()`,
            kind: CompletionItemKind.Function
          });

    });
    }
    if(parser.vocabulary.getSymbolicName(candidate[0])=="IF"){
        sugg.push({
          label: "if",
          kind: CompletionItemKind.Keyword
        });
    }
    if(parser.vocabulary.getSymbolicName(candidate[0])=="FUN"){
        sugg.push({
          label: "fun",
          kind: CompletionItemKind.Keyword
        });
    }
    if(parser.vocabulary.getSymbolicName(candidate[0])=="S"){
        sugg.push({
          label: "skip;",
          kind: CompletionItemKind.Keyword
        });
    }
}

console.log("pos_l:"+pos.line+" pos_c:"+pos.character);

    const tokenReg = /(?:[()[\]:]|['\w])+/g;

    const text = documents.get(_textDocumentPosition.textDocument.uri)?.getText() || "";
    const lines = text.split(/\r\n|\r|\n/);

    const line = lines[_textDocumentPosition.position.line];

    return sugg;


/*
let symbol = ...; // Find the symbol that covers your caret position.
let functionNames: string[] = [];
let variableNames: string[] = [];
for (let candidate of candidates.rules) {
  switch (candidate[0]) {
    case ExprParser.RULE_functionRef: {
      let functions = symbol.getSymbolsOfType(FunctionSymbol);
      for (function of functions)
        functionNames.push(function.name);
      break;
    }

    case LParser.RULE_variableRef: {
      let variables = symbol.getSymbolsOfType(VariableSymbol);
      for (variable of variables)
        functionNames.push(variable.name);
      break;
    }
  }
}

// Finally combine all found lists into one for the UI.
// We do that in separate steps so that you can apply some ordering to each of your sub lists.
// Then you also can order symbols groups as a whole depending their importance.
let candidates: string[] = [];
candidates.push(...keywords);
candidates.push(...functionNames);
candidates.push(...variableNames);*/
		return [
			{
				label: 'TypeScript',
				kind: CompletionItemKind.Text,
				data: 1
			},
			{
				label: 'JavaScript',
				kind: CompletionItemKind.Text,
				data: 2
			}
		];
	}
);


// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    return item;
}
);




// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
