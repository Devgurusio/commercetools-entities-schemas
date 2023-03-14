const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../trigger');

describe('trigger', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        resourceTypeId: 'cart',
        actions: ['Create', 'Update']
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
    describe('when missing resourceTypeId property', () => {
      beforeAll(() => {
        data = {
          actions: ['Create', 'Update']
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

    describe('when missing actions property', () => {
      beforeAll(() => {
        data = {
          resourceTypeId: 'cart'
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
