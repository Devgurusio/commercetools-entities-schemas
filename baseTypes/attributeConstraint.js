module.exports = {
  type: "string",
  description:
    "AttributeConstraint enum tells how an attribute or a set of attributes should be validated across all variants of a product",
  enum: ["None", "Unique", "CombinationUnique", "SameForAll"]
};
