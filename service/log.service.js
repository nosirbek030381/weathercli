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

const printWeather = (response, icon) => {
	console.log(dedent`
	${chalk.bgYellowBright('Weather')} City weather ${response.name}
	${icon}  ${response.weather[0].description}
	Temperature: ${response.main.temp} (feels like ${response.main.feels_like})
	Humidity: ${response.main.humidity}%
	Wind speed: ${response.wind.speed}
	`);
};

export { printError, printHelp, printSuccess, printWeather };
