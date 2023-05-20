const dotenv = require('dotenv');

dotenv.config({ path: __dirname + '/../../../../.env' });

const environmentVars = process.env;

module.exports = environmentVars;
