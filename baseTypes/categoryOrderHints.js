module.exports = {
  type: 'object',
  description: `The category order hints is a JSON object where the keys are the category IDs, and the values are the corresponding order hint set for that category.
    Order hints are strings representing valid number values between 0 and 1 while everything closer to 1 is interpreted as higher than everything closer to 0. Order hints thus always start with “0.” and must never end with a “0” (i.e., always write “0.1” but never “0.10”). Products that have no order hint have an order score below “0”.
    Order hints are non-unique. If a subset of products have the same value for order hint in a specific category, the behavior is undetermined.`,
  patternProperties: {
    '^.+$': {
      type: 'string',
      description:
        'String representing valid number value between 0 and 1 while everything closer to 1 is interpreted as higher than everything closer to 0. Order hints thus always start with “0.” and must never end with a “0” (i.e., always write “0.1” but never “0.10”)'
    }
  }
};
