const resource = require('../common/resource');
const localizedString = require('../baseTypes/localizedString');
const reference = require('../baseTypes/reference');
const customFields = require('../baseTypes/customFields');

const zoneRate = require('./zoneRate');

module.exports = {
  ...resource,
  description: 'Representation of a Shipping Method',
  properties: {
    ...resource.properties,
    key: {
      type: 'string',
      description: 'User-specific unique identifier for the shipping method.'
    },
    name: {
      type: 'string',
      description: 'Shipping method name'
    },
    description: {
      type: 'string',
      description: 'Shipping method description'
    },
    localizedDescription: localizedString,
    taxCategory: {
      ...reference,
      description: 'Reference to a TaxCategory '
    },
    zoneRates: {
      type: 'array',
      items: zoneRate
    },
    isDefault: {
      type: 'boolean',
      description: 'One shipping method in a project can be default.'
    },
    predicate: {
      type: 'string',
      description:
        'A Cart predicate which can be used to more precisely select a shipping method for a cart.'
    },
    custom: customFields
  },
  required: [
    ...resource.required,
    'name',
    'taxCategory',
    'zoneReates',
    'isDefault'
  ]
};
