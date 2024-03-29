const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const reference = require('../baseTypes/reference');
const orderState = require('./orderState');
const shipmentState = require('./shipmentState');
const paymentState = require('./paymentState');

module.exports = {
  type: 'object',
  properties: {
    cart: {
      ...resourceIdentifier,
      description:
        'ResourceIdentifier to the Cart from which this order is created.'
    },
    version: {
      type: 'number',
      description: 'The version of the cart from which an order is created.'
    },
    orderNumber: {
      type: 'string',
      description:
        "String that uniquely identifies an order. It can be used to create more human-readable (in contrast to ID) identifier for the order. It should be unique across a project. Once it's set it cannot be changed. For easier use on Get, Update and Delete actions we suggest assigning order numbers that match the regular expression [a-z0-9_-]{2,36}.",
      pattern: '^[a-zA-Z0-9-_]+$',
      minLength: 2,
      maxLength: 36
    },
    paymentState,
    orderState: {
      ...orderState,
      description: 'Order will be created with Open status by default.'
    },
    state: {
      ...reference,
      description: 'This reference can point to a state in a custom workflow.'
    },
    shipmentState
  },
  required: ['cart', 'version']
};
