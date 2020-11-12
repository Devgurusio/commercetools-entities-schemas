const awsLambdaDestination = require('./awsLambdaDestination');
const httpDestination = require('./httpDestination');

module.exports = {
  oneOf: [httpDestination, awsLambdaDestination]
};
