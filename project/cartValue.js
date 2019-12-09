module.exports = {
  type: "object",
  description: `Cart Value is used when the shipping rate maps to the sum of the line item prices.
    The value of the cart is used to select a tier. If chosen, it is not possible to set a value for the shippingRateInput on the cart. Tiers contain the centAmount (a value of 100 in the currency USD corresponds to $ 1.00), and start at 1`,
  properties: {
    type: { type: "string", enum: ["CartValue"] }
  },
  required: ["type"]
};
