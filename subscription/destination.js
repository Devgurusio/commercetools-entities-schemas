const awsSNSDestination = require('./awsSNSDestination');
const awsSQSDestination = require('./awsSQSDestination');
const azureEventGridDestination = require('./azureEventGridDestination');
const azureServiceBusDestination = require('./azureServiceBusDestination');
const googleCloudPubSubDestination = require('./googleCloudPubSubDestination');

module.exports = {
  anyOf: [
    awsSNSDestination,
    awsSQSDestination,
    azureEventGridDestination,
    azureServiceBusDestination,
    googleCloudPubSubDestination
  ]
};
