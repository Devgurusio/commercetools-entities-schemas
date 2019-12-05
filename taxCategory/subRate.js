module.exports = {
  type: "object",
  properties: {
    name: { type: "string" },
    amount: {
      type: "number",
      minimum: 0,
      maximum: 1,
      description: "Percentage in the range of [0..1]."
    }
  },
  required: ["name", "amount"]
};
