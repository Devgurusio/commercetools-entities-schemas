const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../paymentMethodInfo');

describe('paymentMethodInfo', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {};
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          interfaceCode: 'interfaceCode',
          interfaceText: 'interfaceText',
          state: { typeId: 'state', id: '74d32d79-aa32-44c8-8f2e-74132890310b' }
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
  });
});
