const key = require('../baseTypes/key');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const localizedString = require('../baseTypes/localizedString');

module.exports = {
  type: 'object',
  properties: {
    key: {
      ...key,
      description:
        'User-defined unique identifier for the Product Selection. You can use key besides ID to reference the Product Selection.'
    },
    name: {
      ...localizedString,
      description:
        'Name of the Product Selection. Not checked for uniqueness, but distinct names are recommended.'
    },
    custom: {
      ...customFieldsDraft,
      description: 'Custom Fields of this Product Selection.'
    }
  },
  required: ['name']
};
