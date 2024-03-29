const key = require('../baseTypes/key');

module.exports = {
  type: 'object',
  description: 'Custom Object draft object',
  properties: {
    container: {
      type: 'string',
      description: 'A namespace to group custom objects',
      pattern: '^[a-zA-Z0-9-_~]+$',
      minLength: 2,
      maxLength: 256
    },
    key: {
      ...key,
      description:
        'A user-defined key that is unique within the given container'
    },
    value: {},
    version: { type: 'number' }
  },
  required: ['container', 'key', 'value']
};
