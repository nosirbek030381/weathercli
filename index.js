import getArgv from './helper/argv.js';
import { printError, printHelp, printSuccess } from './service/log.service.js';

const startCLI = () => {
	const argv = getArgv(process.argv);
	console.log(argv);
	printError();

	if (argv.h) {
		printHelp();
		// help
	}
	if (argv.s) {
		printSuccess();
		// save city
	}
	if (argv.t) {
		// token
	}
	// result
};

startCLI();
