const attributeDefinition = require('./attributeDefinition');

module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    value: attributeDefinition
  },
  required: ['name', 'value']
};
