const extensionDraft = require("./extensionDraft");
const resource = require("../common/resource");

module.exports = {
  ...resource,
  ...resource,
  description: "API Extension",
  properties: {
    ...resource.properties,
    ...extensionDraft.properties
  },
  required: [...resource.required, ...extensionDraft.required]
};
