import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = error => {
	console.log(chalk.bgRed('Error' + ' ' + error));
};

const printSuccess = message => {
	console.log(chalk.bgGreen('Success' + ' ' + message));
};

const printHelp = () => {
	console.log(dedent`
	${chalk.bgCyan('Help')}
	-s [City] for install city
	-h for help
	-t [Token] for install token
	`);
};

export { printError, printHelp, printSuccess };
