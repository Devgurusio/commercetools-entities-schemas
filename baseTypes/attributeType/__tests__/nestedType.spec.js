const Ajv = require('ajv');
const schema = require('../nestedType');

describe('nestedType', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        name: 'nested',
        typeReference: 'cart'
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
    describe('when missing name property', () => {
      beforeAll(() => {
        data = { typeReference: 'cart' };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when name property is not an allowed one', () => {
      beforeAll(() => {
        data = {
          name: 'NotAllowedName',
          typeReference: 'cart'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing typeReference property', () => {
      beforeAll(() => {
        data = { name: 'nested' };
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
