const productDiscountDraft = require('./productDiscountDraft');
const key = require('../baseTypes/key');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...productDiscountDraft,
  description: 'Representation of a product',
  properties: {
    ...resource.properties,
    ...productDiscountDraft.properties,
    key,
    references: {
      type: 'array',
      description:
        'The platform will generate this array from the predicate. It contains the references of all the resources that are addressed in the predicate',
      items: reference
    }
  },
  required: [...resource.required, ...productDiscountDraft.required]
};
