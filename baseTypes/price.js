const baseMoney = require("./baseMoney");
const customFields = require("./customFields");
const money = require("./money");
const reference = require("./reference");

module.exports = {
  type: "object",
  properties: {
    id: {
      type: "string",
      description: "The unique ID of this price."
    },
    value: baseMoney,
    country: {
      type: "string",
      description: "A two-digit country code as per ISO 3166-1 alpha-2 ."
    },
    customerGroup: reference,
    channel: reference,
    validFrom: {
      type: "string",
      description:
        "Date from which the price is valid. Format YYYY-MM-DDThh:mm:ss.sssZ"
    },
    validUntil: {
      type: "string",
      description:
        "Date until which the price is valid. Format YYYY-MM-DDThh:mm:ss.sssZ"
    },
    custom: customFields,
    tiers: {
      type: "array",
      description: "Price tiers associated with the variant",
      items: {
        type: "object",
        additionalProperties: true,
        properties: {
          minimumQuantity: {
            type: "integer",
            description:
              "The minimum quantity this price tier is valid for, always greater than or equal to 2"
          },
          value: baseMoney
        },
        required: ["minimumQuantity", "value"]
      }
    },
    discounted: {
      type: "object",
      description:
        "Set if a matching ProductDiscount exists. If set, the Cart will use the discounted value for the cart price calculation. When a relative discount is applied and the fraction part of the discounted price is 0.5, the discounted price is rounded in favor of the customer with the half down rounding.",
      properties: {
        value: money,
        discount: reference
      },
      additionalProperties: false,
      required: ["value", "discount"]
    }
  }
};
