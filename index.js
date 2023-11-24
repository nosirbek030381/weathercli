import getArgv from './helper/argv.js';
import { getWeather } from './service/api.service.js';
import { printError, printHelp, printSuccess } from './service/log.service.js';
import { TOKEN_DICTIONARY, getKeyValue, saveKeyValue } from './service/storage.service.js';

const saveToken = async token => {
	if (!token.length) {
		printError("Token doesn't exist");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('Token was saved');
	} catch (error) {
		printError(error.message);
	}
};

const saveCity = async city => {
	if (!city.length) {
		printError("City doesn't exist");
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('City was saved');
	} catch (error) {
		printError(error.message);
	}
};

const startCLI = () => {
	const argv = getArgv(process.argv);

	const getForcast = async () => {
		try {
			const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
			const response = await getWeather(city);
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
		saveCity(argv.s);
		// save city
	}
	if (argv.t) {
		return saveToken(argv.t);
		// token
	}
	getForcast();
};

startCLI();
