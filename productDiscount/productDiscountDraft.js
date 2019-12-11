const dateTime = require("../baseTypes/dateTime");
const key = require("../baseTypes/key");
const localizedString = require("../baseTypes/localizedString");
const productDiscountValue = require("./productDiscountValue");

module.exports = {
  type: "object",
  description: "Product discount draft object",
  properties: {
    name: localizedString,
    key,
    description: localizedString,
    value: productDiscountValue,
    predicate: {
      type: "string",
      description: "A valid ProductDiscount Predicate"
    },
    sortOrder: {
      type: "string",
      description:
        "The string must contain a decimal number between 0 and 1. A discount with greater sortOrder is prioritized higher than a discount with lower sortOrder"
    },
    isActive: {
      type: "boolean",
      description:
        "If set to true the discount will be applied to product prices"
    },
    validFrom: {
      ...dateTime,
      description:
        "The time from which the discount should be effective. Please take Eventual Consistency into account for calculated product discount values"
    },
    validUntil: {
      ...dateTime,
      description:
        "The time from which the discount should be effective. Please take Eventual Consistency into account for calculated undiscounted values"
    }
  },
  required: ["name", "value", "predicate", "sortOrder", "isActive"]
};
