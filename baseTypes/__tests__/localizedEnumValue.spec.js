const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../localizedEnumValue');

describe('localizedEnumValue', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        key: 'key',
        label: {
          en: 'Key label',
          es: 'Etiquieta'
        }
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

  describe('when error', () => {
    describe('when missing key property', () => {
      beforeAll(() => {
        data = {
          label: {
            en: 'Key label',
            es: 'Etiquieta'
          }
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

    describe('when missing label property', () => {
      beforeAll(() => {
        data = {
          key: 'key'
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
