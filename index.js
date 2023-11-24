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

	const getForcast = async () => {
		try {
			const response = await getWeather(process.env.CITY ?? 'uzbekistan');
			console.log(response);
		} catch (error) {
			if (error?.response?.status == 404) {
				printError('City not found');
			} else if (error?.response?.status == 401) {
				printError('Invalid token');
			} else {
				printError(error.message);
			}
		}
	};

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
	getForcast();
};

startCLI();
