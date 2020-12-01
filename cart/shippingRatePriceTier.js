const cartClassification = require('../project/cartClassification');
const cartScore = require('../project/cartScore');
const cartValue = require('../project/cartValue');

module.exports = {
  description: 'Representation of a Shipping Rate Price Tier',
  type: 'string',
  oneOf: [cartValue, cartClassification, cartScore]
};
