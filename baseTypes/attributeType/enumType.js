const plainEnumValue = require("./plainEnumValue");

module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["enum"] },
    values: { type: "array", items: plainEnumValue }
  },
  required: ["name"]
};
