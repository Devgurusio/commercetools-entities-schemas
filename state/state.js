const resource = require('../common/resource');
const stateDraft = require('./stateDraft');

module.exports = {
  ...resource,
  ...stateDraft,
  description: 'Representation of a state',
  properties: {
    ...resource.properties,
    ...stateDraft.properties,
    builtIn: {
      type: 'boolean',
      description:
        'Builtin states are integral parts of the project that cannot be deleted nor the key can be changed'
    }
  },
  required: [...resource.required, ...stateDraft.required]
};
