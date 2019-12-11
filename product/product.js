const key = require("../baseTypes/key");
const productCatalogData = require("../baseTypes/productCatalogData");
const reference = require("../baseTypes/reference");
const resource = require("../common/resource");
const reviewRatingStatistics = require("../baseTypes/reviewRatingStatistics");

module.exports = {
  ...resource,
  description: "Representation of a product",
  properties: {
    ...resource.properties,
    key,
    productType: {
      ...reference,
      description: "Reference to a ProductType"
    },
    masterData: {
      ...productCatalogData,
      description: "The product data in the master catalog"
    },
    taxCategory: {
      ...reference,
      description: "Reference to a TaxCategory"
    },
    state: {
      ...reference,
      description: "Reference to a State"
    },
    reviewRatingStatistics: {
      ...reviewRatingStatistics,
      description:
        "Statistics about the review ratings taken into account for this product"
    }
  },
  required: [...resource.required, "productType", "masterData"]
};
