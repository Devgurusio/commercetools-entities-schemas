const localizedEnumValue = require("../localizedEnumValue");

module.exports = {
  type: "object",
  properties: {
    name: { type: "string", enum: ["LocalizedEnum"] },
    values: { type: "array", items: localizedEnumValue }
  },
  required: ["name"]
};
