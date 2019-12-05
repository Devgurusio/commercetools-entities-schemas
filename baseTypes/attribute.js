module.exports = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Attribute name"
    },
    value: {
      type: ["array", "object", "string", "boolean", "number"],
      items: {
        type: ["object", "string", "boolean", "number"],
        additionalProperties: true
      },
      description: "Value could be any valid JSON schema",
      additionalProperties: true
    }
  },
  additionalProperties: false,
  required: ["name", "value"]
};
