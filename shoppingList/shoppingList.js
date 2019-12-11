const customFields = require("../baseTypes/customFields");
const lineItem = require("./lineItem");
const textLineItem = require("./textLineItem");
const reference = require("../baseTypes/reference");
const resource = require("../common/resource");
const shoppingListDraft = require("./shoppingListDraft");

module.exports = {
  ...resource,
  ...shoppingListDraft,
  description: "Representation of a shopping list",
  properties: {
    ...resource.properties,
    ...shoppingListDraft.properties,
    customer: {
      ...reference,
      description: "Reference to a Customer"
    },
    lineItems: {
      type: "array",
      items: lineItem
    },
    textLineItems: {
      type: "array",
      items: textLineItem
    },
    custom: customFields
  },
  required: [...resource.required, ...shoppingListDraft.required]
};
