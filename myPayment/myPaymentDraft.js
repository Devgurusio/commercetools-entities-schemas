const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const money = require("../baseTypes/money");
const myTransactionDraft = require("./myTransactionDraft");
const paymentMethodInfo = require("./paymentMethodInfo");

module.exports = {
  type: "object",
  description: "My payment draft object",
  properties: {
    amountPlanned: {
      ...money,
      description:
        "How much money this payment intends to receive from the customer. The value usually matches the cart or order gross total"
    },
    paymentMethodInfo,
    custom: customFieldsDraft,
    transaction: {
      ...myTransactionDraft,
      description:
        "A list of financial transactions of the Authorization or Charge TransactionTypes"
    }
  },
  required: ["amountPlanned"]
};
