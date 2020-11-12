const resource = require('../common/resource');
const zoneDraft = require('./zoneDraft');

module.exports = {
  ...resource,
  ...zoneDraft,
  description: 'Representation of a zone',
  properties: {
    ...resource.properties,
    ...zoneDraft.properties
  },
  required: [...zoneDraft.required, ...resource.required]
};
