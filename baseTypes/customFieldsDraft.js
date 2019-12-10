const fieldDefinition = require("./fieldDefinition");
const resourceIdentifier = require("./resourceIdentifier");

module.exports = {
  type: "object",
  description:
    "The representation to be sent to the server when creating a resource with custom fields",
  properties: {
    type: resourceIdentifier,
    fields: fieldDefinition
  },
  required: ["type"]
};
