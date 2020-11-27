const Ajv = require('ajv');
const schema = require('../discountCode');

describe('discountCode', () => {
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
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true,
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ]
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
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastMessageSequenceNumber: 1,
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true,
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ],
          validFrom: '2017-10-04T14:31:41.643Z',
          validUntil: '2017-10-04T14:31:41.643Z',
          maxApplications: 15,
          maxApplicationsPerCustomer: 1,
          custom: {
            type: {
              typeId: 'type',
              id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
            },
            fields: {
              attribute: 'value'
            }
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
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true,
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ]
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

    describe('when missing code property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true,
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ]
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

    describe('when missing cartDiscounts property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          code: 'TEST',
          isActive: true,
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ]
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

    describe('when missing isActive property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          references: [
            {
              typeId: 'cart',
              id: 'd1229e6f-2b79-441e-b419-9a8sdasda8s7'
            }
          ]
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

    describe('when missing references property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true
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
