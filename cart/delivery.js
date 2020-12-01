const address = require('../baseTypes/address');
const dateTime = require('../baseTypes/dateTime');
const deliveryItem = require('./deliveryItem');
const parcel = require('./parcel');

module.exports = {
  description: 'Representation of a Delivery',
  properties: {
    id: {
      type: 'string',
      description: 'Id to represent an unique Delivery'
    },
    createdAt: dateTime,
    items: {
      type: 'array',
      description: 'Array of Delivery Item',
      items: deliveryItem
    },
    parcels: {
      type: 'array',
      description: 'Array of Parcel',
      items: parcel
    },
    address: address
  },
  required: ['id', 'createdAt', 'items', 'parcels']
};
