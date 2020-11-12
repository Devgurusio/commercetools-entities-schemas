const productTypeDraft = require('./productTypeDraft');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...productTypeDraft,
  description: 'Representation of a product type',
  properties: {
    ...resource.properties,
    ...productTypeDraft.properties
  },
  required: [...resource.required, ...productTypeDraft.required]
};
