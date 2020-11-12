const destination = require('./destination');
const key = require('../baseTypes/key');
const trigger = require('./trigger');

module.exports = {
  type: 'object',
  description: 'Representation of an Extension draft object',
  properties: {
    key,
    destination: {
      ...destination,
      description: 'Details where the extension can be reached'
    },
    triggers: {
      type: 'array',
      description: 'Describes what triggers the extension',
      items: trigger
    },
    timeoutInMs: {
      type: 'number',
      description:
        'The maximum time the commercetools platform waits for a response from the extension'
    }
  },
  required: ['destination', 'triggers']
};
