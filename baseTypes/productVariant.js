const asset = require("./asset");
const attribute = require("./attribute");
const image = require("./image");
const key = require("./key");
const price = require("./price");
const productVariantAvailability = require("./productVariantAvailability");
const scopedPrice = require("./scopedPrice");
module.exports = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "The sequential ID of the variant within the product"
    },
    sku: {
      type: "string",
      description: "The unique SKU of the variant"
    },
    key: {
      ...key,
      description: "User-specific unique identifier for the variant"
    },
    prices: {
      type: "array",
      description:
        "The prices of the variant. The prices does not contain two prices for the same price scope (same currency, country, customer group and channel)",
      items: price
    },
    attributes: {
      type: "array",
      items: attribute
    },
    price: {
      ...price,
      description:
        "Only appears when price selection is used. This field cannot be used in a query predicate"
    },
    images: {
      type: "array",
      items: image
    },
    assets: {
      type: "array",
      items: asset
    },
    availability: {
      ...productVariantAvailability,
      description:
        "The availability is set if the variant is tracked by the inventory. The field might not contain the latest inventory state (it is eventually consistent) and can be used as an optimization to reduce calls to the inventory service"
    },
    isMatchingVariant: {
      type: "boolean",
      description:
        "Only appears in response to a Product Projection Search request to mark this variant as one that matches the search query"
    },
    scopedPrice: {
      ...scopedPrice,
      description: "Only appears when price selection is used"
    },
    scopedPriceDiscounted: {
      type: "boolean",
      description:
        "Only appears in response to a Product Projection Search request when price selection is used"
    }
  }
};
