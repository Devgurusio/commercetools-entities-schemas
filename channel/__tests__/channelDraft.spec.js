const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../channelDraft');

describe('channelDraft', () => {
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
          roles: ['InventorySupply', 'Primary'],
          name: { en: 'Channel name' },
          description: { en: 'Channel description' },
          address: {
            key: 'my-address',
            title: 'Baron',
            salutation: 'Mr.',
            firstName: 'Sherlok',
            lastName: 'Holmes',
            streetName: 'Baker St.',
            streetNumber: '221B',
            additionalStreetInfo: 'additionalStreetInfo',
            postalCode: '10012',
            city: 'London',
            region: 'region',
            state: 'state',
            country: 'UK',
            company: 'company',
            department: 'department',
            building: 'building',
            apartment: 'apartment',
            pOBox: 'pOBox',
            phone: 'phone',
            email: 'email',
            fax: 'fax',
            additionalAddressInfo: 'additionalAddressInfo',
            externalId: 'externalId'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          geoLocation: {
            type: 'Point',
            coordinates: [35.2366173, -6.6724601]
          }
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
    describe('when missing key property', () => {
      beforeAll(() => {
        data = {
          roles: ['InventorySupply', 'Primary'],
          name: { en: 'Channel name' },
          description: { en: 'Channel description' },
          address: {
            key: 'my-address',
            title: 'Baron',
            salutation: 'Mr.',
            firstName: 'Sherlok',
            lastName: 'Holmes',
            streetName: 'Baker St.',
            streetNumber: '221B',
            additionalStreetInfo: 'additionalStreetInfo',
            postalCode: '10012',
            city: 'London',
            region: 'region',
            state: 'state',
            country: 'UK',
            company: 'company',
            department: 'department',
            building: 'building',
            apartment: 'apartment',
            pOBox: 'pOBox',
            phone: 'phone',
            email: 'email',
            fax: 'fax',
            additionalAddressInfo: 'additionalAddressInfo',
            externalId: 'externalId'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          geoLocation: {
            type: 'Point',
            coordinates: [35.2366173, -6.6724601]
          }
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
