const Ajv = require('ajv');
const schema = require('../discountCodeDraft');

describe('discountCode', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
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

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
            }
          ],
          isActive: true,
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
    describe('when missing code property', () => {
      beforeAll(() => {
        data = {
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

    describe('when missing cartDiscounts property', () => {
      beforeAll(() => {
        data = {
          code: 'TEST',
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

    describe('when missing isActive property', () => {
      beforeAll(() => {
        data = {
          code: 'TEST',
          cartDiscounts: [
            {
              typeId: 'cart-discount',
              id: 'd1229e6f-2b79-441e-b419-180311e52754'
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
  });
});
