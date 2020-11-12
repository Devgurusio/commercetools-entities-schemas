module.exports = {
  type: 'object',
  properties: {
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    state: {
      type: 'string'
    }
  },
  required: ['country']
};
