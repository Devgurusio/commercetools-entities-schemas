const addressDraft = require('../baseTypes/addressDraft');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const date = require('../baseTypes/date');
const key = require('../baseTypes/key');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');

module.exports = {
  type: 'object',
  description: 'Customer draft object',
  properties: {
    customerNumber: {
      type: 'string',
      description: `String that uniquely identifies a customer. It can be used to create more human-readable (in contrast to ID) identifier for the customer.
        It should be unique across a project. Once it’s set it cannot be changed`
    },
    email: {
      type: 'string',
      description:
        'Stored in given case. For the uniqueness check, it is treated as case-insensitive',
      format: 'email'
    },
    key,
    password: {
      type: 'string',
      description: 'Customer password'
    },
    stores: {
      type: 'array',
      description:
        'References to the stores the customer account is associated with. If no stores are specified, the customer is a global customer, and can log in using the Password Flow for global Customers. If one or more stores are specified, the customer can only log in using the Password Flow for Customers in a Store for those specific stores',
      items: resourceIdentifier
    },
    firstName: { type: 'string' },
    lastName: { type: 'string' },
    middleName: { type: 'string' },
    title: { type: 'string' },
    salutation: { type: 'string' },
    anonymousCartId: {
      type: 'string',
      description:
        'Identifies a single cart that will be assigned to the new customer account'
    },
    anonymousId: {
      type: 'string',
      description:
        'Identifies carts and orders belonging to an anonymous session that will be assigned to the new customer account'
    },
    externalId: { type: 'string' },
    dateOfBirth: date,
    companyName: { type: 'string' },
    vatId: { type: 'string' },
    isEmailVerified: { type: 'boolean' },
    customerGroup: resourceIdentifier,
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
    billingAddresses: {
      type: 'array',
      description: `The indices of the billing addresses in the addresses array.
        The billingAddressIds of the customer will be set to the IDs of that addresses`,
      items: { type: 'number' }
    },
    defaultShippingAddress: {
      type: 'number',
      description: `The index of the address in the addresses array.
        The defaultShippingAddressId of the customer will be set to the ID of that address`
    },
    shippingAddresses: {
      type: 'array',
      description: `The indices of the shipping addresses in the addresses array.
        The shippingAddressIds of the Customer will be set to the IDs of that addresses`,
      items: { type: 'number' }
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
