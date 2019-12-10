const plainEnumValue = require("../enumValue");

module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["enum"] },
    values: { type: "array", items: plainEnumValue }
  },
  required: ["name"]
};
