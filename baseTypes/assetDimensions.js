module.exports = {
  type: "object",
  description: "The width and height of the asset source",
  properties: {
    w: { type: "number", description: "The width of the asset source" },
    h: { type: "number", description: "The height of the asset source" }
  },
  required: ["w", "h"]
};
