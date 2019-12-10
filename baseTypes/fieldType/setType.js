const fieldType = require("./index");

module.exports = {
  type: "object",
  description:
    "The set attribute type defines a set (array without duplicates) with values of the given elementType. It does not support isRequired",
  properties: {
    name: { type: "string", enum: ["Set"] },
    elementType: fieldType
  },
  required: ["name", "elementType"]
};
