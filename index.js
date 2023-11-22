const getArgv = require('./helper/argv');

const startCLI = () => {
	const argv = getArgv(process.argv);
	console.log(argv);
};

startCLI();
