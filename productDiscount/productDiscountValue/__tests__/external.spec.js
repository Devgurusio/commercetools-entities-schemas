const Ajv = require('ajv');
const schema = require('../external');

describe('external', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        type: 'external'
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
        data = {};
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
          type: 'invalidType'
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
