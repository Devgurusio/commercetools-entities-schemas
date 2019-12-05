const resource = require("../common/resource");
const customerGroupDraft = require("./customerGroupDraft");
const customFields = require("../baseTypes/customFields");

module.exports = {
  ...resource,
  ...customerGroupDraft,
  type: "object",
  description: "Representation of a customer group",
  properties: {
    ...resource.properties,
    ...customerGroupDraft.properties,
    name: { type: "string" },
    custom: customFields
  },
  required: [...resource.required, "name"]
};
