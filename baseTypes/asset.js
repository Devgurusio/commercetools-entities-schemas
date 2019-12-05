const assetSource = require("./assetSource");
const localizedString = require("./localizedString");

module.exports = {
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    key: {
      type: "string"
    },
    sources: {
      type: "array",
      items: assetSource
    },
    name: localizedString,
    description: localizedString,
    tags: {
      type: "array",
      items: {
        type: "string"
      }
    }
  },
  additionalProperties: false,
  required: ["id", "sources"]
};
