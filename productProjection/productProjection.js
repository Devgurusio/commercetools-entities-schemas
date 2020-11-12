const categoryOrderHints = require('../baseTypes/categoryOrderHints');
const key = require('../baseTypes/key');
const localizedString = require('../baseTypes/localizedString');
const productVariant = require('../baseTypes/productVariant');
const reference = require('../baseTypes/reference');
const resource = require('../common/resource');
const searchKeywords = require('../baseTypes/searchKeywords');
const slug = require('../baseTypes/slug');
const reviewRatingStatistics = require('../baseTypes/reviewRatingStatistics');

module.exports = {
  ...resource,
  description: 'Representation of a product projection',
  properties: {
    ...resource.properties,
    key,
    productType: {
      ...reference,
      description: 'Reference to a ProductType'
    },
    name: localizedString,
    description: localizedString,
    slug,
    categories: {
      type: 'array',
      description: 'References to categories the product is in',
      items: reference
    },
    categoryOrderHints,
    metaTitle: localizedString,
    metaDescription: localizedString,
    metaKeywords: localizedString,
    searchKeywords,
    hasStagedChanges: { type: 'boolean' },
    published: { type: 'boolean' },
    masterVariant: productVariant,
    variants: {
      type: 'array',
      items: productVariant
    },
    taxCategory: {
      ...reference,
      description: 'Reference to a TaxCategory'
    },
    state: {
      ...reference,
      description: 'Reference to an initial State'
    },
    reviewRatingStatistics: {
      ...reviewRatingStatistics,
      description:
        'Statistics about the review ratings taken into account for this product'
    }
  },
  required: [...resource.required, 'productType', 'name', 'slug']
};
