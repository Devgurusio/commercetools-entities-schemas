module.exports = {
  properties: {
    id: {
      type: 'string',
      description: 'The unique ID of the cart from which an order is created.'
    },
    version: {
      type: 'number',
      description: 'The version of the cart from which an order is created.'
    }
  },
  required: ['id', 'version']
};
