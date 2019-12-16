const assetDraft = require("./assetDraft");
const attribute = require("./attribute");
const image = require("./image");
const key = require("./key");
const priceDraft = require("./priceDraft");

module.exports = {
  type: "object",
  properties: {
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
      items: priceDraft
    },
    images: {
      type: "array",
      description:
        "External images for the variant draft. You can also upload images to use the commercetools platform’s Content Delivery Network",
      items: image
    },
    assets: {
      type: "array",
      items: assetDraft
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
    }
  }
};
