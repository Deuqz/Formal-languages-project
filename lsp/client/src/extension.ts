/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import * as vscode from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind,
	CodeAction
} from 'vscode-languageclient/node';
import {ExtensionContext} from "vscode";

const COMMAND = 'code-actions-sample.command';
let client: LanguageClient;


function createCommandCodeAction(diagnostic: vscode.Diagnostic,document: vscode.TextDocument, range: vscode.Range): vscode.CodeAction {
	const action = new vscode.CodeAction('Fix fun name', vscode.CodeActionKind.QuickFix);
	action.diagnostics = [diagnostic];
	action.isPreferred = true;
	action.edit = new vscode.WorkspaceEdit();
	action.edit.replace(document.uri, new vscode.Range(range.start, range.start.translate(0, 1)),diagnostic.source.toLowerCase());
	return action;
}

function provideCodeActions (document, range, codeActionContext) {
	const diagnostics = codeActionContext.diagnostics || [];
	const d = [];
	diagnostics.forEach(dd => {
			d.push(createCommandCodeAction(dd,document,range));
});
	return d;
}

export function activate(context: ExtensionContext) {
	// The server is implemented in node
	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	// The debug options for the server
	// --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	context.subscriptions.push(
		vscode.languages.registerCodeActionsProvider("L", {
			"provideCodeActions": provideCodeActions
		}));

	// Create DiagnosticCollection
	//const diagnosticCollection = vscode.languages.createDiagnosticCollection(extensionName);
	//context.subscriptions.push(diagnosticCollection);

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for plain text documents
		documentSelector: [{ scheme: 'file', language: 'L' }],
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		},

		
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'languageServerExample',
		'Language Server Example',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start();

}



export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
