const asset = require('../baseTypes/asset');
const categoryDraft = require('./categoryDraft');
const customFields = require('../baseTypes/customFields');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...categoryDraft,
  description: 'Representation of a category',
  properties: {
    ...resource.properties,
    ...categoryDraft.properties,
    parent: reference,
    ancestors: {
      type: 'array',
      description: 'Array of Reference to a Category',
      items: reference
    },
    assets: {
      type: 'array',
      description: 'Array of Assets',
      items: asset
    },
    custom: customFields
  },
  required: [...resource.required, ...categoryDraft.required]
};
