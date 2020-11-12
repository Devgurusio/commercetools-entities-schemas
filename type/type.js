const typeDraft = require('./typeDraft');
const resource = require('../common/resource');

module.exports = {
  ...resource,
  ...typeDraft,
  description: 'Representation of a type',
  properties: {
    ...resource.properties,
    ...typeDraft.properties
  },
  required: [...resource.required, ...typeDraft.required]
};
