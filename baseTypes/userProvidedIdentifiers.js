const localizedString = require('../baseTypes/localizedString');

module.exports = {
  type: 'object',
  description:
    'User provided identifiers of the resource, such as key or orderNumber. Only present if the resource has such identifiers.',
  properties: {
    key: {
      type: 'string'
    },
    externalId: {
      type: 'string'
    },
    orderNumber: {
      type: 'string'
    },
    customerNumber: {
      type: 'string'
    },
    sku: {
      type: 'string'
    },
    slug: localizedString
  }
};
