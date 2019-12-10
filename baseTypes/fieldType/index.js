const booleanType = require("./booleanType");
const dateTimeType = require("./dateTimeType");
const dateType = require("./dateType");
const enumType = require("./enumType");
const localizedEnumType = require("./localizedEnumType");
const localizedStringType = require("./localizedStringType");
const moneyType = require("./moneyType");
const numberType = require("./numberType");
const referenceType = require("./referenceType");
const setType = require("./setType");
const textType = require("./textType");
const timeType = require("./timeType");

module.exports = {
  oneOf: [
    booleanType,
    dateTimeType,
    dateType,
    enumType,
    localizedEnumType,
    localizedStringType,
    moneyType,
    numberType,
    referenceType,
    setType,
    textType,
    timeType
  ]
};
