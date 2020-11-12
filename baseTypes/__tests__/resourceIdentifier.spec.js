const Ajv = require('ajv');
const schema = require('../resourceIdentifier');

describe('resourceIdentifier', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only id field', () => {
      beforeAll(() => {
        data = {
          id: '74d32d79-aa32-44c8-8f2e-74132890310b'
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

    describe('when only key field', () => {
      beforeAll(() => {
        data = { key: 'customerKey' };
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

  describe('when error', () => {
    describe('when id and key properties', () => {
      beforeAll(() => {
        data = {
          id: '74d32d79-aa32-44c8-8f2e-74132890310b',
          typeId: 'customer',
          key: 'customerKey'
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

    describe('when missing id and key properties', () => {
      beforeAll(() => {
        data = { typeId: 'customer' };
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
