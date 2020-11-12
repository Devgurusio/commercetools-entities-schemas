const Ajv = require('ajv');
const schema = require('../azureFunctionsAuthentication');

describe('azureFunctionsAuthentication', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        type: 'AzureFunctions',
        key: 'key'
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
          key: 'key'
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

    describe('when missing key', () => {
      beforeAll(() => {
        data = {
          type: 'AzureFunctions'
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
          headerValue: 'headerValue'
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
