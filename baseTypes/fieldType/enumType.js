const enumValue = require("../enumValue");

module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["Enum"] },
    values: { type: "array", items: enumValue }
  },
  required: ["name"]
};
