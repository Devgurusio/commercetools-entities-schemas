const reference = require("../baseTypes/reference");

module.exports = {
  type: "object",
  properties: {
    interfaceCode: {
      type: "string",
      description:
        "A code describing the current status returned by the interface that processes the payment"
    },
    interfaceText: {
      type: "string",
      description:
        "A text describing the current status returned by the interface that processes the payment"
    },
    state: {
      ...reference,
      description: "Reference to a State"
    }
  }
};
