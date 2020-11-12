const Ajv = require('ajv');
const schema = require('../reference');

describe('reference', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          id: '74d32d79-aa32-44c8-8f2e-74132890310b',
          typeId: 'customer'
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
          id: '74d32d79-aa32-44c8-8f2e-74132890310b',
          typeId: 'customer',
          obj: {
            id: '74d32d79-aa32-44c8-8f2e-74132890310b',
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: '2017-09-20T11:32:32.727Z',
            lastModifiedAt: '2017-09-28T10:43:18.863Z',
            email: 'user@domain.io',
            firstName: 'firstName',
            lastName: 'lastName',
            companyName: 'companyName',
            password: 'password',
            addresses: [],
            shippingAddressIds: [],
            billingAddressIds: [],
            isEmailVerified: false,
            stores: []
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
    describe('when missing id property', () => {
      beforeAll(() => {
        data = {
          typeId: 'customer',
          obj: {
            id: '74d32d79-aa32-44c8-8f2e-74132890310b',
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: '2017-09-20T11:32:32.727Z',
            lastModifiedAt: '2017-09-28T10:43:18.863Z',
            email: 'user@domain.io',
            firstName: 'firstName',
            lastName: 'lastName',
            companyName: 'companyName',
            password: 'password',
            addresses: [],
            shippingAddressIds: [],
            billingAddressIds: [],
            isEmailVerified: false,
            stores: []
          }
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

    describe('when missing typeId property', () => {
      beforeAll(() => {
        data = {
          id: '74d32d79-aa32-44c8-8f2e-74132890310b',
          obj: {
            id: '74d32d79-aa32-44c8-8f2e-74132890310b',
            version: 3,
            lastMessageSequenceNumber: 1,
            createdAt: '2017-09-20T11:32:32.727Z',
            lastModifiedAt: '2017-09-28T10:43:18.863Z',
            email: 'user@domain.io',
            firstName: 'firstName',
            lastName: 'lastName',
            companyName: 'companyName',
            password: 'password',
            addresses: [],
            shippingAddressIds: [],
            billingAddressIds: [],
            isEmailVerified: false,
            stores: []
          }
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
