const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../transactionState');

describe('transactionState', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when Initial', () => {
      beforeAll(() => {
        data = 'Initial';
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

    describe('when Pending', () => {
      beforeAll(() => {
        data = 'Pending';
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

    describe('when Success', () => {
      beforeAll(() => {
        data = 'Success';
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

    describe('when Failure', () => {
      beforeAll(() => {
        data = 'Failure';
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
        data = 'nonAllowedValue';
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
