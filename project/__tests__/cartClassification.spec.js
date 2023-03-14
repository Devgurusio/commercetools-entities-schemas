const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../cartClassification');

describe('cartClassification', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = { type: 'CartClassification' };
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
  });

  describe('when error', () => {
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
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

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when type is not allowed value', () => {
      beforeAll(() => {
        data = {
          type: 'notAllowedValue',
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

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
