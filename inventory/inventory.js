const customFields = require("../baseTypes/customFields");
const inventoryDraft = require("./inventoryDraft");
const reference = require("../baseTypes/reference");
const resource = require("../common/resource");

module.exports = {
  ...resource,
  ...inventoryDraft,
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
  required: [...inventoryDraft.required, ...resource.required]
};
