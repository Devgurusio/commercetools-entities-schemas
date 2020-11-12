const Ajv = require('ajv');
const schema = require('../absolute');

describe('absolute', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        type: 'absolute',
        money: [
          {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          }
        ]
      };
      ajv = Ajv();
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should be valid', () => {
      expect(valid).toBeTruthy();
    });
  });

  describe('when error', () => {
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          money: [
            {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 390,
              fractionDigits: 2
            }
          ]
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing money property', () => {
      beforeAll(() => {
        data = {
          type: 'absolute'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when type is not valid', () => {
      beforeAll(() => {
        data = {
          type: 'invalidType',
          money: [
            {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 390,
              fractionDigits: 2
            }
          ]
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
