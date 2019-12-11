const assetDraft = require("./assetDraft");
const customFields = require("./customFields");

module.exports = {
  ...assetDraft,
  description:
    "An Asset can be used to represent media assets, such as images, videos or PDFs",
  properties: {
    ...assetDraft.properties,
    id: { type: "string" },
    custom: customFields
  },
  required: [...assetDraft.required, "id"]
};
