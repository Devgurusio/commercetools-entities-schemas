const point = {
  type: "object",
  description: "Point Geometry",
  properties: {
    type: {
      type: "string",
      description: "String with value “Point”",
      enum: ["Point"]
    },
    coordinates: {
      type: "array",
      description: "(longitude, latitude)",
      minItems: 2,
      maxItems: 2,
      items: { type: "number" }
    }
  }
};

module.exports = {
  type: "object",
  ...point
};
