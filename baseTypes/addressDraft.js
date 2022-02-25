const key = require('./key');
const customFieldsDraft = require('./customFieldsDraft');

module.exports = {
  type: 'object',
  description: 'Address draft object',
  properties: {
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    id: {
      type: 'string',
      description:
        'Note: The id is overwritten internally when creating an address for a Customer.'
    },
    key,
    title: { type: 'string' },
    salutation: { type: 'string' },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    streetName: { type: 'string' },
    streetNumber: { type: 'string' },
    additionalStreetInfo: { type: 'string' },
    postalCode: { type: 'string' },
    city: { type: 'string' },
    region: { type: 'string' },
    state: { type: 'string' },
    company: { type: 'string' },
    department: { type: 'string' },
    building: { type: 'string' },
    apartment: { type: 'string' },
    pOBox: { type: 'string' },
    phone: { type: 'string' },
    mobile: { type: 'string' },
    email: { type: 'string' },
    fax: { type: 'string' },
    additionalAddressInfo: { type: 'string' },
    externalId: { type: 'string' },
    custom: customFieldsDraft
  },
  required: ['country']
};
