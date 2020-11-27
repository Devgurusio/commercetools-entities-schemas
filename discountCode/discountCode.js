const discountCodeDraft = require('./discountCodeDraft');
const resource = require('../common/resource');
const reference = require('../baseTypes/reference');

module.exports = {
  ...resource,
  ...discountCodeDraft,
  description: 'Representation of a discount code',
  properties: {
    ...resource.properties,
    ...discountCodeDraft.properties,
    references: {
      type: 'array',
      item: reference
    }
  },
  required: [...resource.required, ...discountCodeDraft.required, 'references']
};
