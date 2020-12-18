const baseMoney = require('../baseTypes/baseMoney');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');
const localizedString = require('../baseTypes/localizedString');
const resourceIdentifier = require('../baseTypes/resourceIdentifier');
const externalTaxRateDraft = require('./externalTaxRateDraft');
const itemShippingDetailsDraft = require('./itemShippingDetailsDraft');

module.exports = {
  description: 'Representation of a Custom Line Item Draft',
  properties: {
    name: localizedString,
    quantity: {
      type: 'number',
      description:
        'The amount of a CustomLineItem in the Cart. Must be a positive integer'
    },
    money: {
      ...baseMoney,
      description: 'The cost to add to the cart. The amount can be negative'
    },
    slug: {
      type: 'string',
      description:
        'A unique String in the cart to identify this CustomLineItemDraft'
    },
    taxCategory: {
      ...resourceIdentifier,
      description:
        'The given tax category will be used to select a tax rate when a cart has the TaxMode Platform'
    },
    externalTaxRate: {
      ...externalTaxRateDraft,
      description:
        'An external tax rate can be set if the cart has the External TaxMode'
    },
    custom: customFieldsDraft,
    shippingDetails: {
      ...itemShippingDetailsDraft,
      description: 'Container for custom line item specific address(es)'
    }
  },
  required: ['name', 'money', 'slug']
};
