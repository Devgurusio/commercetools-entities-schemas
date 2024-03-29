const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../date');

describe('date', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = '1983-08-17';
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
    describe('when data has no date format', () => {
      beforeAll(() => {
        data = 'sometext';
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

    describe('when data is a datetime', () => {
      beforeAll(() => {
        data = '1983-08-17T17:00:00Z';
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
