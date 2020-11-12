module.exports = {
  type: 'object',
  properties: {
    key: {
      type: 'string',
      description: 'The key of the value used as a programmatic identifier'
    },
    label: {
      type: 'string',
      description: 'A descriptive label of the value'
    }
  },
  required: ['key', 'label']
};
