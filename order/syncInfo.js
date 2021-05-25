const reference = require('../baseTypes/reference');
const dateTime = require('../baseTypes/dateTime');

module.exports = {
  description:
    'Stores information about order synchronization activities (like export or import).',
  properties: {
    channel: {
      ...reference,
      description: 'Connection to a particular synchronization destination.'
    },
    externalId: {
      type: 'string',
      description:
        'Can be used to reference an external order instance, file etc.'
    },
    syncedAt: dateTime
  },
  required: ['channel', 'syncedAt']
};
