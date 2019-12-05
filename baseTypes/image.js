module.exports = {
  type: "object",
  properties: {
    url: {
      type: "string",
      description: "URL of the image in its original size."
    },
    dimensions: {
      type: "object",
      description: "Dimensions of the original image. ",
      properties: {
        w: {
          type: "integer"
        },
        h: {
          type: "integer"
        }
      }
    },
    label: {
      type: "string",
      description:
        "Custom label that can be used, for example, as an image description."
    }
  },
  additionalProperties: false,
  required: ["url", "dimensions"]
};
