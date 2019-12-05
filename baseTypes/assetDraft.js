const assetSource = require("./assetSource");
const customFieldsDraft = require("./customFieldsDraft");
const localizedString = require("./localizedString");

module.exports = {
  type: "object",
  properties: {
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
    },
    custom: customFieldsDraft
  },
  additionalProperties: false,
  required: ["sources"]
};
