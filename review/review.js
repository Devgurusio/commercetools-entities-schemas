const customFields = require('../baseTypes/customFields');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');
const reviewDraft = require('./reviewDraft');

module.exports = {
  ...resource,
  ...reviewDraft,
  description: 'Representation of a review',
  properties: {
    ...resource.properties,
    ...reviewDraft.properties,
    target: {
      ...reference,
      description:
        'Identifies the target of the review. Can be a Product or a Channel'
    },
    state: {
      ...reference,
      description: 'Reference to a State'
    },
    customer: {
      ...reference,
      description: 'The customer who created the review'
    },
    custom: customFields
  },
  required: [...resource.required]
};
