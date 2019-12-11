const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const key = require("../baseTypes/key");
const lineItemDraft = require("./lineItemDraft");
const localizedString = require("../baseTypes/localizedString");
const textLineItemDraft = require("./textLineItemDraft");
const resourceIdentifier = require("../baseTypes/resourceIdentifier");
const slug = require("../baseTypes/slug");

module.exports = {
  type: "object",
  description: "Shopping list draft object",
  properties: {
    key: {
      ...key,
      description: "User-specific unique identifier for the shopping list"
    },
    slug,
    name: localizedString,
    description: localizedString,
    customer: {
      ...resourceIdentifier,
      description: "ResourceIdentifier to a Customer"
    },
    anonymousId: {
      type: "string",
      description:
        "Identifies shopping lists belonging to an anonymous session (the customer has not signed up/in yet)"
    },
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
