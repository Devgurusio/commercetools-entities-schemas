const referenceType = require('./attributeType/referenceType');

module.exports = {
  description: 'A representation of a Key Reference',
  properties: {
    typeId: {
      ...referenceType,
      description: 'The type of referenced resource'
    },
    key: {
      description: 'The unique and immutable key of the referenced resource',
      type: 'string'
    }
  },
  required: ['typeId', 'key']
};
