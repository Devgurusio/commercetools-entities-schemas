const baseMoney = require("./baseMoney");

module.exports = {
  type: "object",
  description: `A price tier is selected instead of the default price when a certain quantity of the ProductVariant is added to a cart and ordered.
    For example: the price can be lower if more than 10 items are ordered.
    If no price tier is found for the order quantity, the base Price is used.
    A price tier is applied for the entire quantity of a product variant put as LineItem in a cart as soon as the minimum quantity for the price tier is reached.
    The price tier is applied per line item of the product variant. If, for example, the same product variant appears in the same cart as several line items, (what can be achieved by different values of a custom field on the line items) for each line item the minimum quantity must be reached to get the price tier`,
  properties: {
    minimumQuantity: {
      type: "number",
      description: `The minimum quantity this price tier is valid for.
              The minimum quantity is always greater than or equal to 2 (the base Price is interpreted as valid for minimum quantity equals to 1)`
    },
    value: {
      ...baseMoney,
      description:
        "The currency of a price tier is always the same as the currency of the base Price"
    }
  },
  required: ["minimumQuantity", "value"]
};
