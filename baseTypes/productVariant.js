const asset = require("./asset");
const attribute = require("./attribute");
const price = require("./price");
const productVariantAvailability = require("./productVariantAvailability");
const productVariantDraft = require("./productVariantDraft");
const scopedPrice = require("./scopedPrice");

module.exports = {
  ...productVariantDraft,
  properties: {
    ...productVariantDraft.properties,
    id: {
      type: "number",
      description: "The sequential ID of the variant within the product"
    },
    prices: {
      type: "array",
      description:
        "The prices of the variant. The prices does not contain two prices for the same price scope (same currency, country, customer group and channel)",
      items: price
    },
    price: {
      ...price,
      description:
        "Only appears when price selection is used. This field cannot be used in a query predicate"
    },
    assets: {
      type: "array",
      items: asset
    },
    attributes: {
      type: "array",
      description: `The AttributeType determines the format for the attribute value to be provided, in particular:
        - for EnumType and LocalizableEnumType attributes:
          - either only the key of the EnumValue or of the LocalizedEnumValue is to be used as value
          - or the complete EnumValue or the complete LocalizedEnumValue is to be used as value
        - for LocalizableTextType attributes the LocalizedString object is to be used as value
        - for MoneyType attributes the Money object is to be used as value
        - for SetType attributes the entire set object is to be used as value
        - for NestedType attributes the list of values of all attributes of the nested product is to be used as value
        - for ReferenceType attributes the Reference object is to be used as value`,
      items: attribute
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
  },
  required: ["id"]
};
