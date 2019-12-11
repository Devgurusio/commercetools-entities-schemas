const money = require("./money");
const reference = require("./reference");

module.exports = {
  type: "object",
  properties: {
    value: money,
    discount: reference
  },
  required: ["value", "discount"]
};
