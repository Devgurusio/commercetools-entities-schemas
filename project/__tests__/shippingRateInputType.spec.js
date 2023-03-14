const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../shippingRateInputType');

describe('shippingRateInputType', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when CartValue', () => {
      beforeAll(() => {
        data = { type: 'CartValue' };
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

    describe('when CartClassification', () => {
      beforeAll(() => {
        data = {
          type: 'CartClassification',
          values: [
            {
              key: 'key',
              label: {
                en: 'Key label',
                es: 'Etiquieta'
              }
            }
          ]
        };
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

    describe('when CartScore', () => {
      beforeAll(() => {
        data = { type: 'CartScore' };
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

  describe('when error', () => {
    describe('when type is not allowed value', () => {
      beforeAll(() => {
        data = { type: 'notAllowedValue' };
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
});
