const localizedString = require('../baseTypes/localizedString');
const reference = require('../baseTypes/reference');
const dateTime = require('../baseTypes/dateTime');
const customFieldsDraft = require('../baseTypes/customFieldsDraft');

module.exports = {
  type: 'object',
  description: 'Discount code draft object',
  properties: {
    name: localizedString,
    description: localizedString,
    code: {
      type: 'string',
      description:
        'Unique identifier of this discount code. This value is added to the cart to enable the related cart discounts in the cart.'
    },
    cartDiscounts: {
      type: 'array',
      item: reference,
      description:
        'The referenced matching cart discounts can be applied to the cart once the discount code is added. The number of cart discounts in a discount code is limited to 10.',
      maxItems: 10
    },
    cartPredicate: {
      type: 'string',
      description:
        'The discount code can only be applied to carts that match this predicate.'
    },
    groups: {
      type: 'array',
      item: 'string',
      description: 'The groups to which this discount code shall belong to.'
    },
    isActive: {
      type: 'boolean'
    },
    validFrom: {
      ...dateTime,
      description:
        'The time from which the discount can be applied on a cart. Before that time the code is invalid.'
    },
    validUntil: {
      ...dateTime,
      description:
        'The time until the discount can be applied on a cart. After that time the code is invalid.'
    },
    maxApplications: {
      type: 'number',
      description:
        'The discount code can only be applied maxApplications times.'
    },
    maxApplicationsPerCustomer: {
      type: 'number',
      description:
        'The discount code can only be applied maxApplicationsPerCustomer times per customer.'
    },
    custom: customFieldsDraft
  },
  required: ['code', 'cartDiscounts', 'isActive']
};
