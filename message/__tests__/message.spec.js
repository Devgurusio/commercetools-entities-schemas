const Ajv = require('ajv');
const schema = require('../message');

describe('textInputHint', () => {
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
          sequenceNumber: 1,
          resource: {
            typeId: 'cart-discount',
            id: 'd1229e6f-2b79-441e-b419-180311e52754'
          },
          resourceVersion: 1,
          type: 'msg'
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
          sequenceNumber: 1,
          resource: {
            typeId: 'cart-discount',
            id: 'd1229e6f-2b79-441e-b419-180311e52754'
          },
          resourceVersion: 1,
          resourceProviderIdentifier: {
            key: 'my-key',
            externalId: '1f0d7e26-fe73-4277-93cf-2735d898d300',
            orderNumber: '1',
            customerNumber: '1f0d7e26-fe73-4277-93cf-2735d898d300',
            sku: 'SKU01',
            slug: {
              en: 'example',
              es: 'ejemplo'
            }
          },
          type: 'msg'
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
    describe('when missing sequenceNumber property', () => {
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
          resource: {
            typeId: 'cart-discount',
            id: 'd1229e6f-2b79-441e-b419-180311e52754'
          },
          resourceVersion: 1,
          type: 'msg'
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

    describe('when missing resource property', () => {
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
          sequenceNumber: 1,
          resourceVersion: 1,
          type: 'msg'
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

    describe('when missing resourceVersion property', () => {
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
          sequenceNumber: 1,
          resource: {
            typeId: 'cart-discount',
            id: 'd1229e6f-2b79-441e-b419-180311e52754'
          },
          type: 'msg'
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

    describe('when missing type property', () => {
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
          sequenceNumber: 1,
          resource: {
            typeId: 'cart-discount',
            id: 'd1229e6f-2b79-441e-b419-180311e52754'
          },
          resourceVersion: 1
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
