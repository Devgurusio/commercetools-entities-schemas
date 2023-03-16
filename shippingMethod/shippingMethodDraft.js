const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');

const zoneRateDraft = require('./zoneRateDraft');

module.exports = {
  type: 'object',
  description: 'Representation of a Shipping Method Draft',
  properties: {
    name: {
      type: 'string'
    },
    localizedName: localizedString,
    key,
    localizedDescription: localizedString,
    description: {
      type: 'string',
      description:
        'This field has been deprecated in favor of localizedDescription'
    },
    taxCategory: {
      ...resourceIdentifier,
      description: 'ResourceIdentifier of a TaxCategory - Required'
    },
    zoneRates: {
      type: 'array',
      items: zoneRateDraft
    },
    isDefault: {
      type: 'boolean',
      description:
        'If true the shipping method will be the default one in a project.'
    },
    predicate: {
      type: 'string',
      description:
        'A Cart predicate which can be used to more precisely select a shipping method for a cart.'
    },
    custom: customFieldsDraft
  },
  required: ['name', 'taxCategory']
};
