const money = require("./money");

module.exports = {
  type: "object",
  description:
    "Base polymorphic Money type which can be stored in cent or high precision",
  properties: {
    ...money.properties,
    preciseAmount: {
      type: "integer",
      description:
        "The amount in 1 / (10 * fractionDigits) of a currency. Used along with type 'highPrecision'"
    }
  },
  additionalProperties: true,
  required: ["currencyCode"]
};
