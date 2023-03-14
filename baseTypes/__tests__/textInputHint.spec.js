const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../textInputHint');

describe('textInputHint', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when value is SingleLine', () => {
      beforeAll(() => {
        data = 'SingleLine';
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

    describe('when value is MultiLine', () => {
      beforeAll(() => {
        data = 'SingleLine';
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
    describe('when value is not an allowed one', () => {
      beforeAll(() => {
        data = 'notAllowedValue';
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
