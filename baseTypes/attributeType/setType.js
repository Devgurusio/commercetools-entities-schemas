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
const textType = require('./textType');
const timeType = require('./timeType');

const setType = {
  type: 'object',
  description:
    'The set attribute type defines a set (array without duplicates) with values of the given elementType. It does not support isRequired',
  properties: {
    name: { type: 'string', enum: ['set'] }
  },
  required: ['name']
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
    }
  },
  required: [...setType.required, 'elementType']
};
