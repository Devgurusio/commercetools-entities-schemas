const awsSNSDestination = require('./awsSNSDestination');
const awsSQSDestination = require('./awsSQSDestination');
const azureEventGridDestination = require('./azureEventGridDestination');
const azureServiceBusDestination = require('./azureServiceBusDestination');
const changeSubscription = require('./changeSubscription');
const cloudEventsFormat = require('./cloudEventsFormat');
const destination = require('./destination');
const format = require('./format');
const googleCloudPubSubDestination = require('./googleCloudPubSubDestination');
const messageSubscription = require('./messageSubscription');
const platformFormat = require('./platformFormat');
const subscription = require('./subscription');
const subscriptionDraft = require('./subscriptionDraft');

module.exports = {
  awsSNSDestination,
  awsSQSDestination,
  azureEventGridDestination,
  azureServiceBusDestination,
  changeSubscription,
  cloudEventsFormat,
  destination,
  format,
  googleCloudPubSubDestination,
  messageSubscription,
  platformFormat,
  subscription,
  subscriptionDraft
};
