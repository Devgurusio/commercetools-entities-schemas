const resource = require('../common/resource');
const subscriptionDraft = require('./subscriptionDraft');

module.exports = {
  ...resource,
  ...subscriptionDraft,
  description: 'Representation of a subscription',
  properties: {
    ...resource.properties,
    ...subscriptionDraft.properties,
    status: {
      type: 'string',
      description: `Values of the SubscriptionHealthStatus enumeration:
        - Healthy: The subscription is delivering messages as expected
        - ConfigurationError: Messages can not be delivered with the current configuration. If the configuration is fixed in this health status, all messages that haven’t been delivered yet will still be delivered and the status will change to Healthy.
        - ConfigurationErrorDeliveryStopped: Messages can not be delivered with the current configuration and delivery of those is not attempted anymore. Undelivered messages are not retained and will not be delivered if the configuration is fixed in this status, but the status will change to Healthy as soon as new messages can be delivered successfully again.
        - TemporaryError: Messages can not be delivered currently, but not due to the configuration. E.g. the destination has a temporary outage.`,
      enum: [
        'Healthy',
        'ConfigurationError',
        'ConfigurationErrorDeliveryStopped',
        'TemporaryError'
      ]
    }
  },
  required: [...resource.required, ...subscriptionDraft.required]
};
