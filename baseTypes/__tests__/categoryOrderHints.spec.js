const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../categoryOrderHints');

describe('categoryOrderHints', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = { category1: '0.9', category2: '0.2' };
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
    beforeAll(() => {
      data = { category1: 9 };
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
