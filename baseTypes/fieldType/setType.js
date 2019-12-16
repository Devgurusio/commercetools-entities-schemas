const booleanType = require("./booleanType");
const dateTimeType = require("./dateTimeType");
const dateType = require("./dateType");
const enumType = require("./enumType");
const localizedEnumType = require("./localizedEnumType");
const localizedStringType = require("./localizedStringType");
const moneyType = require("./moneyType");
const numberType = require("./numberType");
const referenceType = require("./referenceType");
const stringType = require("./stringType");
const timeType = require("./timeType");

const setType = {
  type: "object",
  description:
    "The set attribute type defines a set (array without duplicates) with values of the given elementType. It does not support isRequired",
  properties: {
    name: { type: "string", enum: ["Set"] }
  },
  required: ["name"]
};

module.exports = {
  ...setType,
  properties: {
    ...setType.properties,
    elementType: {
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
        stringType,
        timeType
      ]
    }
  },
  required: [...setType.required, "elementType"]
};
