const Ajv = require('ajv');
const schema = require('../money');

describe('money', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          currencyCode: 'EUR',
          centAmount: 390
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 390,
          fractionDigits: 2
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
  });

  describe('when error', () => {
    describe('when missing currencyCode property', () => {
      beforeAll(() => {
        data = {
          type: 'centPrecision',
          centAmount: 390,
          fractionDigits: 2
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

    describe('when missing centAmount property', () => {
      beforeAll(() => {
        data = {
          type: 'centPrecision',
          currencyCode: 'EUR',
          fractionDigits: 2
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

    describe('when type property is not an allowed one', () => {
      beforeAll(() => {
        data = {
          type: 'anotherType',
          currencyCode: 'EUR',
          centAmount: 390,
          fractionDigits: 2
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
