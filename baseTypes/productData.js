const categoryOrderHints = require('./categoryOrderHints');
const localizedString = require('./localizedString');
const productVariant = require('./productVariant');
const reference = require('./reference');
const searchKeywords = require('./searchKeywords');
const slug = require('./slug');

module.exports = {
  type: 'object',
  properties: {
    name: localizedString,
    categories: {
      type: 'array',
      items: reference,
      description: 'References to categories the product is in'
    },
    categoryOrderHints,
    description: localizedString,
    slug,
    metaTitle: localizedString,
    metaDescription: localizedString,
    metaKeywords: localizedString,
    masterVariant: productVariant,
    variants: {
      type: 'array',
      items: productVariant
    },
    searchKeywords
  },
  required: ['name', 'slug', 'masterVariant']
};
