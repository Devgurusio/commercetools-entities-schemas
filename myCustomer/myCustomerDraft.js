const addressDraft = require('../baseTypes/addressDraft');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const date = require('../baseTypes/date');

module.exports = {
  type: 'object',
  description: 'My customer draft object',
  properties: {
    email: {
      type: 'string',
      description:
        'Stored in given case. For the uniqueness check, it is treated as case-insensitive',
      format: 'email'
    },
    password: {
      type: 'string',
      description: 'Customer password'
    },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    middleName: { type: 'string' },
    title: { type: 'string' },
    salutation: { type: 'string' },
    dateOfBirth: date,
    companyName: { type: 'string' },
    vatId: { type: 'string' },
    addresses: {
      type: 'array',
      description: 'Array of AddressDraft',
      items: addressDraft
    },
    defaultBillingAddress: {
      type: 'number',
      description: `The index of the address in the addresses array.
        The defaultBillingAddressId of the customer will be set to the ID of that address`
    },
    defaultShippingAddress: {
      type: 'number',
      description: `The index of the address in the addresses array.
        The defaultShippingAddressId of the customer will be set to the ID of that address`
    },
    custom: customFieldsDraft,
    locale: {
      type: 'string',
      description: `String conforming to IETF language tag.
        Must be one of the languages supported for this project`
    }
  },
  required: ['email', 'password']
};
