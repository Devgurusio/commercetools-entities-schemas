const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../store');

describe('store', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          key: 'key'
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          languages: ['en', 'es'],
          distributionChannels: [
            { typeId: 'channel', id: 'distributionChannel' }
          ],
          custom: {
            type: { typeId: 'type', id: 'store-type' },
            fields: { foo: 'bar' }
          },
          supplyChannels: [{ typeId: 'channel', id: 'supplyChannel' }],
          productSelections: [
            {
              productSelection: {
                typeId: 'product-selection',
                id: 'productSelection'
              },
              active: true
            }
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
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
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
