const baseMoney = require("./baseMoney");
const reference = require("./reference");
const resourceIdentifier = require("./resourceIdentifier");
const customFieldsDraft = require("./customFieldsDraft");

module.exports = {
  type: "object",
  properties: {
    value: baseMoney,
    country: {
      type: "string",
      description: "A two-digit country code as per ISO 3166-1 alpha-2"
    },
    customerGroup: reference,
    channel: resourceIdentifier,
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
    custom: customFieldsDraft
  }
};
