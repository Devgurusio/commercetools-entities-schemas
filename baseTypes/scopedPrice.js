const baseMoney = require("./baseMoney");
const customFields = require("./customFields");
const dateTime = require("./dateTime");
const discountedPrice = require("./discountedPrice");
const reference = require("./reference");

module.exports = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "The unique ID of this price"
    },
    value: {
      ...baseMoney,
      description: "the original price value"
    },
    country: {
      type: "string",
      description: "A two-digit country code as per ISO 3166-1 alpha-2"
    },
    customerGroup: {
      ...reference,
      description: "A reference to a customer group"
    },
    channel: reference,
    validFrom: {
      ...dateTime,
      description: "Date from which the price is valid"
    },
    validUntil: {
      ...dateTime,
      description: "Date until which the price is valid"
    },
    discounted: {
      ...discountedPrice,
      description:
        "Set if a matching ProductDiscount exists. If set, the Cart will use the discounted value for the cart price calculation. When a relative discount is applied and the fraction part of the discounted price is 0.5, the discounted price is rounded in favor of the customer with the half down rounding"
    },
    custom: customFields
  },
  required: ["id", "value", "currentValue"]
};
