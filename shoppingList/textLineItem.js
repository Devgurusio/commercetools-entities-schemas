const customFields = require("../baseTypes/customFields");
const textLineItemDraft = require("./textLineItemDraft");

module.exports = {
  ...textLineItemDraft,
  properties: {
    ...textLineItemDraft.properties,
    id: {
      type: "string",
      description: "The unique ID of this TextLineItem"
    },
    custom: customFields
  },
  required: [...textLineItemDraft.required, "quantity", "addedAt"]
};
