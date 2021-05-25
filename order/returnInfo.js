const returnItem = require('./returnItem');
const dateTime = require('../baseTypes/dateTime');

module.exports = {
  description: 'Stores information about returns connected to this order.',
  properties: {
    items: {
      type: 'array',
      items: returnItem
    },
    returnTrackingId: {
      type: 'string',
      description:
        'Identifies, which return tracking ID is connected to this particular return.'
    },
    returnDate: dateTime
  },
  required: ['items']
};
