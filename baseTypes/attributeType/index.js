const booleanType = require('./booleanType');
const dateTimeType = require('./dateTimeType');
const dateType = require('./dateType');
const enumType = require('./enumType');
const localizableEnumType = require('./localizableEnumType');
const localizableTextType = require('./localizableTextType');
const moneyType = require('./moneyType');
const nestedType = require('./nestedType');
const numberType = require('./numberType');
const referenceType = require('./referenceType');
const setType = require('./setType');
const textType = require('./textType');
const timeType = require('./timeType');

module.exports = {
  oneOf: [
    booleanType,
    dateTimeType,
    dateType,
    enumType,
    localizableEnumType,
    localizableTextType,
    moneyType,
    nestedType,
    numberType,
    referenceType,
    setType,
    textType,
    timeType
  ]
};
