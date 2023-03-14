const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../productDiscount');

describe('productDiscount', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          name: { en: 'name', es: 'nombre' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z'
        };
        ajv = new Ajv({ strict: false });
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
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
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
    describe('when missing id property', () => {
      beforeAll(() => {
        data = {
          version: 1,
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
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
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
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
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
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
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing value property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing predicate property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing sortOrder property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
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
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'external' },
          predicate: 'product.key',
          sortOrder: '0.1',
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when value is not oneOf [absolute, external, relative]', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'descripcion' },
          value: { type: 'invalidType' },
          predicate: 'product.key',
          sortOrder: '0.1',
          isActive: true,
          validFrom: '2017-09-20T11:32:32.727Z',
          validUntil: '2017-09-28T10:43:18.863Z',
          references: [
            { id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b', typeId: 'product' }
          ],
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
        ajv = new Ajv({ strict: false });
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
