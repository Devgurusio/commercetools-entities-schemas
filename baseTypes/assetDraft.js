const assetSource = require('./assetSource');
const customFieldsDraft = require('./customFieldsDraft');
const key = require('./key');
const localizedString = require('./localizedString');

module.exports = {
  type: 'object',
  properties: {
    key,
    sources: {
      type: 'array',
      items: assetSource,
      minItems: 1
    },
    name: localizedString,
    description: localizedString,
    tags: {
      type: 'array',
      items: { type: 'string' }
    },
    custom: customFieldsDraft
  },
  required: ['name', 'sources']
};
