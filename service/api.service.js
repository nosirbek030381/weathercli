import axios from 'axios';
import { TOKEN_DICTIONARY, getKeyValue } from './storage.service.js';

const getWeather = async city => {
	// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

	const token = await getKeyValue(TOKEN_DICTIONARY.token);
	if (!token) {
		throw new Error('Token is required, -t [Token] for install token');
	}

	const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
		params: {
			q: city,
			appid: token,
			units: 'metric',
			lang: 'en',
		},
	});
	return data;
};

export { getWeather };
