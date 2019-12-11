module.exports = {
  type: "object",
  properties: {
    url: {
      type: "string",
      description: "URL of the image in its original size",
      format: "uri"
    },
    dimensions: {
      type: "object",
      description: "Dimensions of the original image",
      properties: {
        w: { type: "number" },
        h: { type: "number" }
      }
    },
    label: {
      type: "string",
      description:
        "Custom label that can be used, for example, as an image description"
    }
  },
  required: ["url", "dimensions"]
};
