const changeSubscription = require('./changeSubscription');
const destination = require('./destination');
const key = require('../baseTypes/key');
const format = require('./format');
const messageSubscription = require('./messageSubscription');

module.exports = {
  type: 'object',
  description: 'Subscription draft object',
  properties: {
    key,
    destination: {
      ...destination,
      description:
        'The Message Queue into which the notifications are to be sent'
    },
    messages: {
      type: 'array',
      description: 'The messages to be subscribed to',
      items: messageSubscription
    },
    changes: {
      type: 'array',
      description: 'The change notifications to be subscribed to',
      items: changeSubscription
    },
    format: {
      ...format,
      description: 'The format in which the payload is delivered'
    }
  },
  required: ['destination']
};
