const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../httpDestinationAuthentication');

describe('httpDestinationAuthentication', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when httpDestinationAuthentication is authorizationHeader', () => {
      beforeAll(() => {
        data = {
          type: 'AuthorizationHeader',
          headerValue: 'headerValue'
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

    describe('when httpDestinationAuthentication is azureFunctionsAuthentication', () => {
      beforeAll(() => {
        data = {
          type: 'AzureFunctions',
          key: 'key'
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
    describe('when is not oneOf [authorizationHeader, azureFunctionsAuthentication]', () => {
      beforeAll(() => {
        data = {
          type: 'invalidType'
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
