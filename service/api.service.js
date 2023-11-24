import https from 'https';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

const getWeather = async city => {
	// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

	const token = getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('Token is required, -t [Token] for install token');
	}

	const url = new URL('https://api.openweathermap.org/data/2.5/weather');
	url.searchParams.append('q', city);
	url.searchParams.append('appid', token);
	url.searchParams.append('units', 'metric');
	url.searchParams.append('lang', 'en');

	https.get(url, response => {
		let res = '';
		response.on('data', chunk => {
			res += chunk;
		});
		response.on('end', () => {
			console.log(res);
		});
	});
};

export { getWeather };
