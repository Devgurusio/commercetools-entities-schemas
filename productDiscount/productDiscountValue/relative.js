module.exports = {
  type: "object",
  describe:
    "Discounts the product price by a percentage, defined by the permyriad field",
  properties: {
    type: {
      type: "string",
      enum: ["relative"]
    },
    permyriad: {
      type: "number",
      description:
        "Per ten thousand. The fraction the price is reduced. 1000 will result in a 10% price reduction"
    }
  },
  required: ["type", "permyriad"]
};
