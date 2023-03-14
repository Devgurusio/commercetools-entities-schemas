const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../baseMoney');

describe('baseMoney', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when centPrecision', () => {
      describe('when only required fields', () => {
        beforeAll(() => {
          data = {
            currencyCode: 'EUR',
            centAmount: 4200
          };
        });

        beforeAll(() => {
          ajv = new Ajv();
          addFormats(ajv);
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
            centAmount: 4200,
            fractionDigits: 2
          };
        });

        beforeAll(() => {
          ajv = new Ajv();
          addFormats(ajv);
        });

        beforeEach(() => {
          valid = ajv.validate(schema, data);
        });

        test('should be valid', () => {
          expect(valid).toBeTruthy();
        });
      });
    });

    describe('when highPrecision', () => {
      describe('when only required fields', () => {
        beforeAll(() => {
          data = {
            type: 'highPrecision',
            currencyCode: 'EUR',
            centAmount: 4200,
            fractionDigits: 2
          };
        });

        beforeAll(() => {
          ajv = new Ajv();
          addFormats(ajv);
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
            centAmount: 4200,
            preciseAmount: 42,
            fractionDigits: 2
          };
        });

        beforeAll(() => {
          ajv = new Ajv();
          addFormats(ajv);
        });

        beforeEach(() => {
          valid = ajv.validate(schema, data);
        });

        test('should be valid', () => {
          expect(valid).toBeTruthy();
        });
      });
    });
  });

  describe('when error', () => {
    beforeAll(() => {
      data = data = {
        type: 'nonExistingType',
        currencyCode: 'EUR',
        centAmount: 4200
      };
      ajv = new Ajv();
      addFormats(ajv);
    });

    beforeEach(() => {
      valid = ajv.validate(schema, data);
    });

    test('should not be valid', () => {
      expect(valid).toBeFalsy();
    });
  });
});
