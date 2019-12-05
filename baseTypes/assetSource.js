module.exports = {
  type: "object",
  properties: {
    uri: {
      type: "string"
    },
    key: {
      type: "string"
    },
    dimensions: {
      type: "object",
      description: "Dimensions of the original asset. ",
      properties: {
        w: {
          type: "integer"
        },
        h: {
          type: "integer"
        }
      }
    },
    contentType: {
      type: "string"
    }
  },
  additionalProperties: false,
  required: ["uri"]
};
