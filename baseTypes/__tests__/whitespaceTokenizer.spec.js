const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../whitespaceTokenizer');

describe('whitespaceTokenizer', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = { type: 'whitespace' };
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
    describe('when type is not whitespace', () => {
      beforeAll(() => {
        data = { type: 'notAllowedWhitespace' };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
