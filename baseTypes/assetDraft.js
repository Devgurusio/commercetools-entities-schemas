const assetSource = require("./assetSource");
const localizedString = require("./localizedString");
const customFieldsDraft = require("./customFieldsDraft");

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
