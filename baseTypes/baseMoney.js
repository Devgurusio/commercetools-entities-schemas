const money = require("./money");
const highPrecisionMoney = require("./highPrecisionMoney");

module.exports = {
  oneOf: [money, highPrecisionMoney]
};
