const Ajv = require('ajv');
const schema = require('../customerDraft');

describe('customerDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          email: 'user@domain.io',
          password: 'password'
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          customerNumber: '12345',
          email: 'user@domain.io',
          key: 'key',
          password: 'password',
          stores: [
            {
              typeId: 'store',
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
            }
          ],
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          title: 'Dr.',
          salutation: 'Mr.',
          anonymousCartId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          anonymousId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          externalId: 'externalId',
          dateOfBirth: '1983-08-17',
          companyName: 'companyName',
          vatId: 'vatId',
          isEmailVerified: false,
          customerGroup: {
            typeId: 'customer-group',
            id: '74d32d79-aa32-44c8-8f2e-74132890310b'
          },
          addresses: [
            {
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
            }
          ],
          defaultBillingAddress: 0,
          billingAddresses: [0],
          defaultShippingAddress: 0,
          shippingAddresses: [0],
          custom: {
            type: {
              typeId: 'customer',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          locale: 'en'
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
    describe('when missing email property', () => {
      beforeAll(() => {
        data = {
          customerNumber: '12345',
          key: 'key',
          password: 'password',
          stores: [
            {
              typeId: 'store',
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
            }
          ],
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          title: 'Dr.',
          salutation: 'Mr.',
          anonymousCartId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          anonymousId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          externalId: 'externalId',
          dateOfBirth: '1983-08-17',
          companyName: 'companyName',
          vatId: 'vatId',
          isEmailVerified: false,
          customerGroup: {
            typeId: 'customer-group',
            id: '74d32d79-aa32-44c8-8f2e-74132890310b'
          },
          addresses: [
            {
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
            }
          ],
          defaultBillingAddress: 0,
          billingAddresses: [0],
          defaultShippingAddress: 0,
          shippingAddresses: [0],
          custom: {
            type: {
              typeId: 'customer',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          locale: 'en'
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing password property', () => {
      beforeAll(() => {
        data = {
          customerNumber: '12345',
          email: 'user@domain.io',
          key: 'key',
          stores: [
            {
              typeId: 'store',
              id: '74d32d79-aa32-44c8-8f2e-74132890310b'
            }
          ],
          firstName: 'firstName',
          lastName: 'lastName',
          middleName: 'middleName',
          title: 'Dr.',
          salutation: 'Mr.',
          anonymousCartId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          anonymousId: '74d32d79-aa32-44c8-8f2e-74132890310b',
          externalId: 'externalId',
          dateOfBirth: '1983-08-17',
          companyName: 'companyName',
          vatId: 'vatId',
          isEmailVerified: false,
          customerGroup: {
            typeId: 'customer-group',
            id: '74d32d79-aa32-44c8-8f2e-74132890310b'
          },
          addresses: [
            {
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
            }
          ],
          defaultBillingAddress: 0,
          billingAddresses: [0],
          defaultShippingAddress: 0,
          shippingAddresses: [0],
          custom: {
            type: {
              typeId: 'customer',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          locale: 'en'
        };
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
