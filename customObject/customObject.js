const customObjectDraft = require("./customObjectDraft");
const resource = require("../common/resource");

module.exports = {
  ...resource,
  ...resource,
  description: "Custom Object",
  properties: {
    ...resource.properties,
    ...customObjectDraft.properties
  },
  required: [...resource.required, ...customObjectDraft.required]
};
