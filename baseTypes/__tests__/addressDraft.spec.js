const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../addressDraft');

describe('addressDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          country: 'ES'
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
    describe('when missing country property', () => {
      beforeAll(() => {
        data = {
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
