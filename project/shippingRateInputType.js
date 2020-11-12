const cartClassification = require('./cartClassification');
const cartScore = require('./cartScore');
const cartValue = require('./cartValue');

module.exports = {
  oneOf: [cartClassification, cartScore, cartValue]
};
