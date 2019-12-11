const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const key = require("../baseTypes/key");
const money = require("../baseTypes/money");
const reference = require("../baseTypes/reference");
const paymentMethodInfo = require("./paymentMethodInfo");
const paymentStatus = require("./paymentStatus");
const transactionDraft = require("./transactionDraft");

module.exports = {
  type: "object",
  description: "Payment draft object",
  properties: {
    key,
    customer: {
      ...reference,
      description: "A reference to the customer this payment belongs to"
    },
    anonymousId: {
      type: "string",
      description:
        "Identifies payments belonging to an anonymous session (the customer has not signed up/in yet)"
    },
    interfaceId: {
      type: "string",
      description:
        "The identifier that is used by the interface that manages the payment (usually the PSP). Cannot be changed once it has been set. The combination of this ID and the PaymentMethodInfo paymentInterface must be unique"
    },
    amountPlanned: {
      ...money,
      description:
        "How much money this payment intends to receive from the customer. The value usually matches the cart or order gross total"
    },
    paymentMethodInfo,
    custom: customFieldsDraft,
    paymentStatus,
    transactions: {
      type: "array",
      description:
        "A list of financial transactions of different TransactionTypes with different TransactionStates",
      items: transactionDraft
    },
    interfaceInteractions: {
      type: "array",
      description:
        "Interface interactions can be requests send to the PSP, responses received from the PSP or notifications received from the PSP. Some interactions may result in a transaction. If so, the interactionId in the Transaction should be set to match the ID of the PSP for the interaction. Interactions are managed by the PSP integration and are usually neither written nor read by the user facing frontends or other services",
      items: customFieldsDraft
    }
  },
  required: ["amountPlanned"]
};
