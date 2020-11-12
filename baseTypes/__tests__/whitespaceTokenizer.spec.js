const Ajv = require('ajv');
const schema = require('../whitespaceTokenizer');

describe('whitespaceTokenizer', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = { type: 'whitespace' };
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
    describe('when type is not whitespace', () => {
      beforeAll(() => {
        data = { type: 'notAllowedWhitespace' };
        ajv = Ajv();
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
