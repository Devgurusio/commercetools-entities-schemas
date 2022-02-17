const shippingMethodDraft = require('./shippingMethodDraft');
const resource = require('../common/resource');
const reference = require('../baseTypes/reference');
const customFields = require('../baseTypes/customFields');
const zoneRate = require('./zoneRate');

module.exports = {
  ...resource,
  ...shippingMethodDraft,
  description: 'Representation of a Shipping Method',
  properties: {
    ...resource.properties,
    ...shippingMethodDraft.properties,
    taxCategory: {
      ...reference,
      description: 'Reference to a TaxCategory'
    },
    zoneRates: {
      type: 'array',
      items: zoneRate
    },
    isDefault: {
      type: 'boolean',
      description: 'One shipping method in a project can be default.'
    },
    custom: customFields
  },
  required: [...resource.required, ...shippingMethodDraft.required]
};
