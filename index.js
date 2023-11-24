import getArgv from './helper/argv.js';
import { getWeather } from './service/api.service.js';
import { printError, printHelp, printSuccess } from './service/log.service.js';
import { TOKEN_DICTIONARY, saveKeyValue } from './service/storage.service.js';

const saveToken = async token => {
	if (!token.lenght) {
		printError('Token is required');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Saving token');
	} catch (error) {
		printError(error.message);
	}
};

const startCLI = () => {
	const argv = getArgv(process.argv);

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
	getWeather('uzbekistan');
};

startCLI();
