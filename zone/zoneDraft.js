const key = require("../baseTypes/key");
const location = require("../baseTypes/location");

module.exports = {
  type: "object",
  description: "Zone draft object",
  properties: {
    key,
    name: { type: "string" },
    description: { type: "string" },
    locations: {
      type: "array",
      items: location
    }
  },
  required: ["name"]
};
