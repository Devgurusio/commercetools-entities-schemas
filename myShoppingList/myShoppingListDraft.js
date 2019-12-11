const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const lineItemDraft = require("./lineItemDraft");
const localizedString = require("../baseTypes/localizedString");
const textLineItemDraft = require("./textLineItemDraft");

module.exports = {
  type: "object",
  description:
    "A MyShoppingListDraft is the object submitted as payload to the Create MyShoppingList method. The customer field of ShoppingList is automatically set with a password flow token. The anonymousId is automatically set with a token for an anonymous session. The key and slug fields can not be set",
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
