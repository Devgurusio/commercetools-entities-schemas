const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');

module.exports = {
  type: 'object',
  description: 'Store draft object',
  properties: {
    key,
    name: {
      ...localizedString,
      description: 'The name of the store'
    }
  },
  required: ['key']
};
