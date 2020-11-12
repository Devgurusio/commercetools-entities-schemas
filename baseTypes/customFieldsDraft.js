const resourceIdentifier = require('./resourceIdentifier');

module.exports = {
  type: 'object',
  description:
    'The representation to be sent to the server when creating a resource with custom fields',
  properties: {
    type: resourceIdentifier,
    fields: {
      type: ['string', 'number', 'object', 'array', 'boolean', 'null'],
      description:
        'A valid JSON object, based on the FieldDefinitions of the Type'
    }
  },
  required: ['type']
};
