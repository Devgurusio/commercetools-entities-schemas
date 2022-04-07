module.exports = {
  description: 'A representation of a Key Reference',
  properties: {
    typeId: {
      description: 'The type of referenced resource',
      type: 'string'
    },
    key: {
      description: 'The unique and immutable key of the referenced resource',
      type: 'string'
    }
  },
  required: ['typeId', 'key']
};
