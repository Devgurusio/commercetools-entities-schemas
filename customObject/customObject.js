const customObjectDraft = require('./customObjectDraft');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...resource,
  description: 'Representation of a custom object',
  properties: {
    ...resource.properties,
    ...customObjectDraft.properties
  },
  required: [...resource.required, ...customObjectDraft.required]
};
