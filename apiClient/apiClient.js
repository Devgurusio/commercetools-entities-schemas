const date = require('../baseTypes/date');
const dateTime = require('../baseTypes/dateTime');

module.exports = {
  type: 'object',
  description: 'Representation of an API client',
  properties: {
    id: {
      type: 'string',
      description:
        'The unique ID of the API client. This is the OAuth2 client_id and can be used to obtain a token'
    },
    name: { type: 'string' },
    scope: {
      type: 'string',
      description:
        'A whitespace separated list of the OAuth scopes. This is the OAuth2 scope and can be used to obtain a token'
    },
    createdAt: dateTime,
    lastUsedAt: {
      ...date,
      description: 'The last day this API Client was used to obtain a token'
    },
    secret: {
      type: 'string',
      description:
        'The secret is only shown once in the response of creating the API Client. This is the OAuth2 client_secret and can be used to obtain a token'
    },
    deleteAt: {
      ...dateTime,
      description:
        'If set, the client will be deleted on (or shortly after) this point in time'
    }
  },
  required: ['id', 'name', 'scope']
};
