const dateTime = require('../baseTypes/dateTime');
const returnPaymentState = require('./returnPaymentState');
const returnShipmentState = require('./returnShipmentState');

module.exports = {
  type: 'object',
  description:
    'Entry for a returned LineItem as LineItemReturnItem or CustomLineItem as CustomLineItemReturnItem.',
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string',
      enum: ['LineItemReturnItem', 'CustomLineItemReturnItem']
    },
    quantity: {
      type: 'number'
    },
    lineItemId: {
      type: 'string'
    },
    customLineItemId: {
      type: 'string'
    },
    comment: {
      type: 'string'
    },
    shipmentState: returnShipmentState,
    paymentState: returnPaymentState,
    lastModifiedAt: dateTime,
    createdAt: dateTime
  },
  required: ['id', 'type', 'quantity']
};
