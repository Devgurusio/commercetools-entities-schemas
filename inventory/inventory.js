const customFields = require("../baseTypes/customFields");
const inventoryDraft = require("./inventoryDraft");
const reference = require("../baseTypes/reference");
const resource = require("../common/resource");

module.exports = {
  ...resource,
  ...inventoryDraft,
  type: "object",
  description: "Representation of an inventory",
  properties: {
    ...resource.properties,
    ...inventoryDraft.properties,
    supplyChannel: {
      ...reference,
      description: "Reference to a Channel"
    },
    custom: customFields
  },
  required: [...inventoryDraft.this.required, ...resource.required]
};
