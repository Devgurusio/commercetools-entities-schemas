module.exports = {
  type: "object",
  description:
    "A Reference is a JSON object representing a (loose) reference to \
    another resource on the commercetools platform. It consists of two fields",
  properties: {
    id: {
      type: "string",
      description: "The unique ID of the referenced resource"
    },
    typeId: {
      type: "string",
      description: "The typeId of the reference"
    }
  },
  additionalProperties: false,
  required: ["id", "typeId"]
};
