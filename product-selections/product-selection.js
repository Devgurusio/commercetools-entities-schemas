const productSelectionDraft = require('./product-selection-draft');
const customFields = require('../baseTypes/customFields');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...productSelectionDraft,
  properties: {
    productCount: {
      type: 'integer',
      description:
        'Number of Products that are currently assigned to this Product Selection.'
    },
    type: {
      type: 'string',
      enum: ['individual'],
      description:
        'Specifies in which way the Products are assigned to the Product Selection. Currently, the only way of doing this is to specify each Product individually. Hence, the type is fixed to individual for now, but we have plans to add other types in the future.'
    },
    custom: {
      ...customFields,
      description: 'Custom Fields of this Product Selection.'
    }
  },
  required: [...resource.required, ...productSelectionDraft.required]
};
