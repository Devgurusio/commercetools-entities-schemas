const Ajv = require('ajv');
const schema = require('../transactionState');

describe('transactionState', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when Initial', () => {
      beforeAll(() => {
        data = 'Initial';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when Pending', () => {
      beforeAll(() => {
        data = 'Pending';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when Success', () => {
      beforeAll(() => {
        data = 'Success';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when Failure', () => {
      beforeAll(() => {
        data = 'Failure';
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
    describe('when value is not an allowed one', () => {
      beforeAll(() => {
        data = 'nonAllowedValue';
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
