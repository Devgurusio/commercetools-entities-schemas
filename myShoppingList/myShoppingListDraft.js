const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const lineItemDraft = require("./lineItemDraft");
const localizedString = require("../baseTypes/localizedString");
const textLineItemDraft = require("./textLineItemDraft");

module.exports = {
  type: "object",
  description: "My shopping list draft object",
  properties: {
    name: localizedString,
    description: localizedString,
    lineItems: {
      type: "array",
      items: lineItemDraft
    },
    textLineItems: {
      type: "array",
      items: textLineItemDraft
    },
    custom: customFieldsDraft,
    deleteDaysAfterLastModification: {
      type: "number",
      description:
        "The shopping list will be deleted automatically if it hasn’t been modified for the specified amount of days"
    }
  },
  required: ["name"]
};
