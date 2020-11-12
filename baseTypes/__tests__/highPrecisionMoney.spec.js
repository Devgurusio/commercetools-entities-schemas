const Ajv = require('ajv');
const schema = require('../highPrecisionMoney');

describe('highPrecisionMoney', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          type: 'highPrecision',
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          type: 'highPrecision',
          currencyCode: 'EUR',
          centAmount: 390,
          preciseAmount: 3.9,
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
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          currencyCode: 'EUR',
          centAmount: 390,
          preciseAmount: 3.9,
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
          preciseAmount: 3.9,
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

    describe('when missing currencyCode property', () => {
      beforeAll(() => {
        data = {
          type: 'highPrecision',
          centAmount: 390,
          preciseAmount: 3.9,
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
          type: 'highPrecision',
          currencyCode: 'EUR',
          preciseAmount: 3.9,
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

    describe('when missing fractionDigits property', () => {
      beforeAll(() => {
        data = {
          type: 'highPrecision',
          currencyCode: 'EUR',
          centAmount: 390,
          preciseAmount: 3.9
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
