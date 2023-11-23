import os from 'os';
import getArgv from './helper/argv.js';
import { printError, printHelp, printSuccess } from './service/log.service.js';
import { saveKeyValue } from './service/storage.service.js';

const saveToken = async token => {
	try {
		await saveKeyValue('token', token);
		printSuccess('Saving token');
	} catch (error) {
		printError(error.message);
	}
};

console.log(os.homedir());

const startCLI = () => {
	const argv = getArgv(process.argv);
	console.log(argv);

	if (argv.h) {
		printHelp();
		// help
	}
	if (argv.s) {
		printSuccess();
		// save city
	}
	if (argv.t) {
		return saveToken(argv.t);
		// token
	}
	// result
};

startCLI();
