const categoryOrderHints = require("../baseTypes/categoryOrderHints");
const key = require("../baseTypes/key");
const localizedString = require("../baseTypes/localizedString");
const productVariantDraft = require("../baseTypes/productVariantDraft");
const reference = require("../baseTypes/reference");
const resourceIdentifier = require("../baseTypes/resourceIdentifier");
const searchKeywords = require("../baseTypes/searchKeywords");
const slug = require("../baseTypes/slug");

module.exports = {
  type: "object",
  description: "Product draft object",
  properties: {
    key,
    name: localizedString,
    productType: {
      ...resourceIdentifier,
      description:
        "A predefined product type assigned to the product. All products must have a product type"
    },
    slug,
    description: localizedString,
    categories: {
      type: "array",
      description: "Categories assigned to the product",
      items: resourceIdentifier
    },
    categoryOrderHints,
    metaTitle: localizedString,
    metaDescription: localizedString,
    metaKeywords: localizedString,
    masterVariant: {
      ...productVariantDraft,
      description:
        "The master product variant. Required if the variants array has product variants"
    },
    variants: {
      type: "array",
      description: "An array of related product variants",
      items: productVariantDraft
    },
    taxCategory: {
      ...resourceIdentifier,
      description: "ResourceIdentifier to a TaxCategory"
    },
    searchKeywords,
    state: {
      ...reference,
      description: "Reference to an initial State"
    },
    publish: {
      type: "boolean",
      description: "If true, the product is published immediately"
    }
  },
  required: ["name", "productType", "slug"]
};
