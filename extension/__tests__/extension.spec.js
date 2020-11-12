const Ajv = require('ajv');
const schema = require('../extension');

describe('extension', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z'
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
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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

    describe('when missing version property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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

    describe('when missing createdAt property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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

    describe('when missing lastModifiedAt property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
          createdAt: '2017-10-04T14:31:41.643Z',
          createdBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastModifiedBy: {
            user: {
              typeId: 'user',
              id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b'
            }
          },
          lastMessageSequenceNumber: 1
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

    describe('when missing destination property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          triggers: [
            {
              resourceTypeId: 'cart',
              actions: ['Create', 'Update']
            }
          ],
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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

    describe('when missing triggers property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          destination: {
            type: 'HTTP',
            url: 'http://localhost'
          },
          timeoutInMs: 2000,
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
          lastMessageSequenceNumber: 1
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
