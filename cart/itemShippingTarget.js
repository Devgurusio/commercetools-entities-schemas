module.exports = {
  type: 'object',
  description: 'Representation of an Item Shipping Target',
  properties: {
    addressKey: {
      type: 'string',
      description: `The key of the address in the cart's itemShippingAddresses`
    },
    quantity: {
      type: 'number',
      description:
        'The quantity of items that should go to the address with the specified addressKey',
      minimum: 0
    }
  },
  required: ['addressKey', 'quantity']
};
