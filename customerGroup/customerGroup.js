const customerGroupDraft = require("./customerGroupDraft");
const customFields = require("../baseTypes/customFields");
const resource = require("../common/resource");

module.exports = {
  ...resource,
  ...customerGroupDraft,
  description: "Representation of a customer group",
  properties: {
    ...resource.properties,
    ...customerGroupDraft.properties,
    name: { type: "string" },
    custom: customFields
  },
  required: [...resource.required, "name"]
};
