const customer = require("./customer");

module.exports = {
  type: "object",
  properties: {
    customer,
    cart: {
      type: "object",
      description:
        "A cart that is associated to the customer. Empty if the customer does not have a cart yet",
      additionalProperties: true
    }
  },
  required: ["customer"]
};
