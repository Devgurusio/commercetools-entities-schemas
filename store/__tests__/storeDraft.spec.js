const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../storeDraft');

describe('storeDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = { key: 'key' };
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
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          languages: ['en', 'es'],
          distributionChannels: [{ key: 'distributionChannel' }],
          custom: { type: { key: 'store-type' }, fields: { foo: 'bar' } },
          supplyChannels: [{ key: 'supplyChannel' }],
          productSelections: [
            { productSelection: { key: 'productSelection' }, active: true }
          ]
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

  describe('when error', () => {
    describe('when missing key', () => {
      beforeAll(() => {
        data = {
          name: { en: 'name', es: 'nombre' },
          languages: ['en', 'es'],
          distributionChannels: [{ key: 'distributionChannel' }],
          custom: { type: { key: 'store-type' }, fields: { foo: 'bar' } },
          supplyChannels: [{ key: 'supplyChannel' }],
          productSelections: [{ key: 'productSelection', active: true }]
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
