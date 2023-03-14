const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../transactionType');

describe('transactionType', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when Authorization', () => {
      beforeAll(() => {
        data = 'Authorization';
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

    describe('when CancelAuthorization', () => {
      beforeAll(() => {
        data = 'CancelAuthorization';
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

    describe('when SuChargeccess', () => {
      beforeAll(() => {
        data = 'SuChargeccess';
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

    describe('when Refund', () => {
      beforeAll(() => {
        data = 'Refund';
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

    describe('when Chargeback', () => {
      beforeAll(() => {
        data = 'Chargeback';
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
