const discountedLineItemPrice = require('./discountedLineItemPrice');

module.exports = {
  description: 'A representation for a Discounted Line Item Price For Quantity',
  properties: {
    quantity: {
      type: 'number'
    },
    discountedPrice: discountedLineItemPrice
  },
  required: ['quantity', 'discountedPrice']
};
