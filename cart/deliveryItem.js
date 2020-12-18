module.exports = {
  description: 'Representation of a Delivery Item',
  properties: {
    id: {
      description: 'ID of a LineItem or a CustomLineItem',
      type: 'string'
    },
    quantity: {
      type: 'number'
    }
  },
  required: ['id', 'number']
};
