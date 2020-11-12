const booleanType = require('./booleanType');
const dateTimeType = require('./dateTimeType');
const dateType = require('./dateType');
const enumType = require('./enumType');
const localizedEnumType = require('./localizedEnumType');
const localizedStringType = require('./localizedStringType');
const moneyType = require('./moneyType');
const numberType = require('./numberType');
const referenceType = require('./referenceType');
const stringType = require('./stringType');
const timeType = require('./timeType');
const setType = require('./setType');

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
    stringType,
    timeType
  ]
};
