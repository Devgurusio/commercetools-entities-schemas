module.exports = {
  type: "object",
  describe:
    "Discounts the product price by allowing the client to explicitly set a discounted value. Use this value when setting discounts using an external service",
  properties: {
    type: {
      type: "string",
      enum: ["external"]
    }
  },
  required: ["type"]
};
