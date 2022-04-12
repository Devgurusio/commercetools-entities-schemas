const key = require('../baseTypes/key');
const addressDraft = require('../baseTypes/addressDraft');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const localizedString = require('../baseTypes/localizedString');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const inventoryMode = require('./inventoryMode');
const lineItemDraft = require('./lineItemDraft');
const roundingMode = require('./roundingMode');
const taxCalculationMode = require('./taxCalculationMode');
const taxMode = require('./taxMode');
const customLineItemDraft = require('./customLineItemDraft');
const externalTaxRateDraft = require('./externalTaxRateDraft');
const cartOrigin = require('./cartOrigin');
const shippingRateInput = require('./shippingRateInput');

module.exports = {
  description: 'Representation of a Cart Draft',
  properties: {
    currency: {
      type: 'string',
      description: 'A three-digit currency code as per ISO 4217'
    },
    key,
    customerId: {
      type: 'string',
      description: 'Id of an existing Customer'
    },
    customerEmail: {
      type: 'string',
      description: 'Email of an existing Customer'
    },
    customerGroup: {
      ...resourceIdentifier,
      description:
        'Will be set automatically when the customerId is set and the customer is a member of a customer group'
    },
    anonymousId: {
      type: 'string',
      description: 'Assigns the new cart to an anonymous session'
    },
    store: {
      ...resourceIdentifier,
      description: 'Assigns the new cart to the store'
    },
    country: {
      type: 'string',
      description: 'A two-digit country code as per ISO 3166-1 alpha-2'
    },
    inventoryMode: {
      ...inventoryMode,
      description: 'Default inventory mode is None'
    },
    taxMode: {
      ...taxMode,
      description: 'The default tax mode is Platform'
    },
    taxRoundingMode: {
      ...roundingMode,
      description: 'The default tax rounding mode is HalfEven'
    },
    taxCalculationMode: {
      ...taxCalculationMode,
      description: 'The default tax calculation mode is LineItemLevel'
    },
    lineItems: {
      type: 'array',
      description: 'Array of LineItemDraft',
      items: lineItemDraft
    },
    customLineItems: {
      type: 'array',
      description: 'Array of CustomLineItemDraft',
      items: customLineItemDraft
    },
    shippingAddress: {
      ...addressDraft,
      description:
        'The shipping address is used to determine the eligible shipping methods and rates as well as the tax rate of the line items'
    },
    billingAddress: addressDraft,
    shippingMethod: {
      ...resourceIdentifier,
      description: 'ResourceIdentifier to a ShippingMethod'
    },
    externalTaxRateForShippingMethod: {
      ...externalTaxRateDraft,
      description:
        'An external tax rate can be set for the shippingMethod if the cart has the External TaxMode'
    },
    custom: customFieldsDraft,
    locale: {
      ...localizedString,
      description: 'Must be one of the languages supported for this project'
    },
    deleteDaysAfterLastModification: {
      type: 'number',
      description: `The cart will be deleted automatically if it hasn't been modified for the specified amount of days. If not set, the default value configured in the Project is used`
    },
    shippingRateInput,
    origin: {
      ...cartOrigin,
      description: 'The default origin is Customer'
    },
    itemShippingAddresses: {
      type: 'array',
      description: 'Array of Addresses',
      items: addressDraft
    },
    discountCodes: {
      type: 'array',
      description: 'The code of existing DiscountCodes',
      items: { type: 'string' }
    }
  },
  required: ['currency']
};
