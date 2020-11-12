const Ajv = require('ajv');
const schema = require('../externalOAuth');

describe('externalOAuth', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        url: 'http://localhost:3000',
        authorizationHeader: 'authorizationHeader'
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
    describe('when missing url property', () => {
      beforeAll(() => {
        data = { authorizationHeader: 'authorizationHeader' };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when url is not an uri', () => {
      beforeAll(() => {
        data = {
          url: 'notAnURI',
          authorizationHeader: 'authorizationHeader'
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

    describe('when missing authorizationHeader property', () => {
      beforeAll(() => {
        data = { url: 'http://localhost:3000' };
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
