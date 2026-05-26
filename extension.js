// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	function reloadWindow() {
		vscode.commands.executeCommand('workbench.action.reloadWindow');
	}

	console.log('Reload extension is now active!');

	const reloadCommand = vscode.commands.registerCommand('rapid-reload.reloadWindow', function () {
		const config = vscode.workspace.getConfiguration('rapid-reload');
		const isConfirmReloadEnabled = config.get('confirmReload', true);

		if (!isConfirmReloadEnabled) {
			return reloadWindow();
		}

		const confirmPrompt = vscode.window.showInformationMessage(
			'Are you sure you want to reload the window?',
			'Yes',
			'No',
			'Don\'t ask again'
		);
		confirmPrompt.then(async (answer) => {
			if (answer === 'Yes') {
				return reloadWindow();
			} else if (answer === 'Don\'t ask again') {
				await config.update('confirmReload', false, vscode.ConfigurationTarget.Global);
				const undoPrompt = vscode.window.showInformationMessage(
					'Confirmation for reload has been disabled. Future reloads will happen immediately.',
					'OK',
					'Undo'
				);

				undoPrompt.then((undoAnswer) => {
					if (undoAnswer === 'Undo') {
						config.update('confirmReload', true, vscode.ConfigurationTarget.Global);
						vscode.window.showInformationMessage(
							'Confirmation for reload has been re-enabled.',
							'OK'
						);
					}
				});
			}

			return; // User chose 'No' or dismissed the dialog
		});
	});

	const reloadStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

	reloadStatusBarItem.text = '$(sync) Reload';
	reloadStatusBarItem.command = 'rapid-reload.reloadWindow';
	reloadStatusBarItem.tooltip = 'Reload the current window';
	reloadStatusBarItem.show();

	context.subscriptions.push(reloadCommand);
	context.subscriptions.push(reloadStatusBarItem);
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
