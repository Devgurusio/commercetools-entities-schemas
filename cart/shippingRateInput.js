const localizedString = require('../baseTypes/localizedString');

const classificationShippingRateInput = {
  description: 'Classification Shipping Rate Input',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['Classification']
    },
    key: {
      type: 'string'
    },
    label: localizedString
  },
  required: ['type', 'key']
};

const scoreShippingRateInput = {
  description: 'Score Shipping Rate Input',
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['Score']
    },
    score: {
      type: 'number'
    }
  },
  required: ['type', 'score']
};

module.exports = {
  oneOf: [classificationShippingRateInput, scoreShippingRateInput]
};
