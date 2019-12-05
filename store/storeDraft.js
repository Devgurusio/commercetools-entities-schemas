const localizedString = require("../baseTypes/localizedString");

module.exports = {
  type: "object",
  description: "Store draft object",
  properties: {
    key: {
      type: "string",
      description: "User-specific unique identifier for the store"
    },
    name: {
      type: localizedString,
      description: "The name of the store"
    }
  },
  required: ["key"]
};
