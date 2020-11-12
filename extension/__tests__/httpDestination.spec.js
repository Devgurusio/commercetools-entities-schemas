const Ajv = require('ajv');
const schema = require('../httpDestination');

describe('httpDestination', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          url: 'http://localhost'
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
      describe('when authentication is authorizationHeader', () => {
        beforeAll(() => {
          data = {
            type: 'HTTP',
            url: 'http://localhost',
            authentication: {
              type: 'AuthorizationHeader',
              headerValue: 'headerValue'
            }
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

      describe('when authentication is azureFunctionsAuthentication', () => {
        beforeAll(() => {
          data = {
            type: 'HTTP',
            url: 'http://localhost',
            authentication: {
              type: 'AzureFunctions',
              key: 'key'
            }
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
  });

  describe('when error', () => {
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          url: 'http://localhost'
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

    describe('when missing url', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP'
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

    describe('when authorization is not valid', () => {
      beforeAll(() => {
        data = {
          type: 'invalidType',
          url: 'http://localhost'
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

    describe('when authorization is not oneOf [authorizationHeader, azureFunctionsAuthentication]', () => {
      beforeAll(() => {
        data = {
          type: 'HTTP',
          url: 'http://localhost',
          authentication: {
            type: 'invalidType',
            headerValue: 'headerValue',
            key: 'key'
          }
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
