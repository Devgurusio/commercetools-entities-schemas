const localizedString = require("../baseTypes/localizedString");

module.exports = {
  type: "object",
  properties: {
    paymentInterface: {
      type: "string",
      description:
        "The interface that handles the payment (usually a PSP). Cannot be changed once it has been set. The combination of PaymentinterfaceId and this field must be unique"
    },
    method: {
      type: "string",
      description:
        "The payment method that is used, e.g. e.g. a conventional string representing Credit Card, Cash Advance etc"
    },
    name: {
      ...localizedString,
      description:
        "A human-readable, localized name for the payment method, e.g. ‘Credit Card’"
    }
  }
};
