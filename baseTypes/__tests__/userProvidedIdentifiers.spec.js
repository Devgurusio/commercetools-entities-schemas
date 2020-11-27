const Ajv = require('ajv');
const schema = require('../userProvidedIdentifiers');

describe('userProvidedIdentifiers', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          key: 'my-key',
          externalId: '1f0d7e26-fe73-4277-93cf-2735d898d300',
          orderNumber: '1',
          customerNumber: '1f0d7e26-fe73-4277-93cf-2735d898d300',
          sku: 'SKU01',
          slug: {
            en: 'example',
            es: 'ejemplo'
          }
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
  });

  describe('when error', () => {
    describe('when any field', () => {
      beforeAll(() => {
        data = {};
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
});
