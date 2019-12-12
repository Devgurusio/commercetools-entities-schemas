const customFields = require("../baseTypes/customFields");
const money = require("../baseTypes/money");
const paymentMethodInfo = require("../payment/paymentMethodInfo");
const reference = require("../baseTypes/reference");
const transaction = require("../payment/transaction");

module.exports = {
  type: "object",
  description: "Representation of my payment",
  properties: {
    id: { type: "string" },
    version: { type: "number" },
    customer: {
      ...reference,
      description: "A reference to the customer this payment belongs to"
    },
    anonymousId: {
      type: "string",
      description:
        "Identifies payments belonging to an anonymous session (the customer has not signed up/in yet)"
    },
    amountPlanned: {
      ...money,
      description:
        "How much money this payment intends to receive from the customer. The value usually matches the cart or order gross total"
    },
    paymentMethodInfo,
    custom: customFields,
    transactions: {
      type: "array",
      items: transaction,
      description:
        "A list of financial transactions of different TransactionTypes with different TransactionStates."
    }
  },
  required: ["id", "version", "amountPlanned"]
};
