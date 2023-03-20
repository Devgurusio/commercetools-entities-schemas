const dateTime = require('../baseTypes/dateTime');
const deliveryItem = require('./deliveryItem');
const parcelMeasurements = require('./parcelMeasurements');
const trackingData = require('./trackingData');

module.exports = {
  type: 'object',
  description: 'Representation of a Parcel',
  properties: {
    id: {
      description: 'Unique id of the parcel',
      type: 'string'
    },
    createdAt: dateTime,
    measurements: {
      description: 'Array of Parcel Measurements',
      type: 'array',
      items: parcelMeasurements
    },
    trackingData: trackingData,
    items: {
      description: 'Array of Delivery Item',
      type: 'array',
      items: deliveryItem
    }
  },
  required: ['id', 'createdAt']
};
