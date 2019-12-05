const reference = require("../baseTypes/reference");

module.exports = {
  type: "object",
  description: "custom field definition",
  properties: {
    type: reference,
    fields: {
      type: "object",
      description: "A valid JSON object, based on FieldDefinition",
      additionalProperties: true
    }
  },
  additionalProperties: false,
  required: ["type"]
};
