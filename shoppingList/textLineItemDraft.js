const customFieldsDraft = require("../baseTypes/customFieldsDraft");
const dateTime = require("../baseTypes/dateTime");
const localizedString = require("../baseTypes/localizedString");

module.exports = {
  type: "object",
  properties: {
    name: localizedString,
    description: localizedString,
    quantity: {
      type: "number",
      description: "Defaults to 1"
    },
    addedAt: {
      ...dateTime,
      description: "Defaults to the current date and time"
    },
    custom: customFieldsDraft
  },
  required: ["name"]
};
