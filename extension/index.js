const authorizationHeader = require('./authorizationHeader');
const awsLambdaDestination = require('./awsLambdaDestination');
const azureFunctionsAuthentication = require('./azureFunctionsAuthentication');
const destination = require('./destination');
const extension = require('./extension');
const extensionDraft = require('./extensionDraft');
const httpDestination = require('./httpDestination');
const httpDestinationAuthentication = require('./httpDestinationAuthentication');
const trigger = require('./trigger');

module.exports = {
  authorizationHeader,
  awsLambdaDestination,
  azureFunctionsAuthentication,
  destination,
  extension,
  extensionDraft,
  httpDestination,
  httpDestinationAuthentication,
  trigger
};
