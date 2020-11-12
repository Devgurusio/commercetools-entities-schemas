const attributeDefinition = require('../baseTypes/attributeDefinition');
const key = require('../baseTypes/key');

module.exports = {
  type: 'object',
  description: 'Product type draft object',
  properties: {
    name: { type: 'string' },
    key,
    description: { type: 'string' },
    attributes: {
      type: 'array',
      items: attributeDefinition
    }
  },
  required: ['name', 'description']
};
