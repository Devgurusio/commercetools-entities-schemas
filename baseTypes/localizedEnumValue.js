const localizedString = require('./localizedString');

module.exports = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      description: 'The key of the value used as a programmatic identifier'
    },
    label: {
      ...localizedString,
      description: 'A descriptive, localized label of the value'
    }
  },
  required: ['key', 'label']
};
