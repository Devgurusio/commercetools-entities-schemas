const authorizationHeader = require('./authorizationHeader');
const azureFunctionsAuthentication = require('./azureFunctionsAuthentication');

module.exports = {
  oneOf: [authorizationHeader, azureFunctionsAuthentication]
};
