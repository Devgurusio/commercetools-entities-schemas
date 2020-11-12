const localizedEnumValue = require('../baseTypes/localizedEnumValue');

module.exports = {
  type: 'object',
  description: `Cart Classification is used when the shipping rate maps to an abstract cart categorization expressed through a string, e.g. green, yellow, red or light, medium, heavy.
    Only a key defined inside the values array can be used to create a tier, or to set a value for the shippingRateInput on the cart. The keys are checked for uniqueness and the request is rejected if keys are not unique`,
  properties: {
    type: { type: 'string', enum: ['CartClassification'] },
    values: { type: 'array', items: localizedEnumValue }
  },
  required: ['type']
};
