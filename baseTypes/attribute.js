module.exports = {
  type: "object",
  properties: {
    name: { type: "string" },
    value: {
      type: ["string", "number", "object", "array", "boolean", "null"],
      description: "A valid JSON value, based on an AttributeDefinition"
    }
  },
  required: ["name", "value"]
};
