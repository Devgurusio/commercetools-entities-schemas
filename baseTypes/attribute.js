module.exports = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    value: {
      type: ['string', 'number', 'object', 'array', 'boolean', 'null'],
      items: {
        type: ['string', 'number', 'object', 'boolean'],
        additionalProperties: true
      },
      description: 'A valid JSON value, based on an AttributeDefinition',
      additionalProperties: true
    }
  },
  required: ['name', 'value']
};
