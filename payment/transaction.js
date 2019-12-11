const transactionDraft = require("./transactionDraft");
const transactionState = require("./transactionState");

module.exports = {
  ...transactionDraft,
  properties: {
    ...transactionDraft.properties,
    id: {
      type: "string",
      description: "The unique ID of this object"
    },
    state: {
      ...transactionState,
      description: "The state of this transaction."
    }
  }
};
