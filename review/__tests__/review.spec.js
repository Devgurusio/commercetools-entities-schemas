const Ajv = require('ajv');
const schema = require('../review');

describe('review', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
        version: 1,
        createdAt: '2017-10-04T14:31:41.643Z',
        lastModifiedAt: '2017-10-04T14:31:41.643Z',
        key: 'key',
        uniquenessValue: 'uniquenessValue',
        locale: 'en',
        authorName: 'authorName',
        title: 'title',
        text: 'text',
        target: {
          typeId: 'product',
          id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
        },
        state: {
          typeId: 'state',
          id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
        },
        rating: 57,
        customer: {
          typeId: 'customer',
          id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
        },
        custom: {
          type: {
            typeId: 'product',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          fields: {
            description: 'my description'
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

  describe('when error', () => {
    describe('when missing id property', () => {
      beforeAll(() => {
        data = {
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          key: 'key',
          uniquenessValue: 'uniquenessValue',
          locale: 'en',
          authorName: 'authorName',
          title: 'title',
          text: 'text',
          target: {
            typeId: 'product',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          state: {
            typeId: 'state',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          rating: 57,
          customer: {
            typeId: 'customer',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
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

    describe('when missing version property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          createdAt: '2017-10-04T14:31:41.643Z',
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          key: 'key',
          uniquenessValue: 'uniquenessValue',
          locale: 'en',
          authorName: 'authorName',
          title: 'title',
          text: 'text',
          target: {
            typeId: 'product',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          state: {
            typeId: 'state',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          rating: 57,
          customer: {
            typeId: 'customer',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
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

    describe('when missing createdAt property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          lastModifiedAt: '2017-10-04T14:31:41.643Z',
          key: 'key',
          uniquenessValue: 'uniquenessValue',
          locale: 'en',
          authorName: 'authorName',
          title: 'title',
          text: 'text',
          target: {
            typeId: 'product',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          state: {
            typeId: 'state',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          rating: 57,
          customer: {
            typeId: 'customer',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
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

    describe('when missing lastModifiedAt property', () => {
      beforeAll(() => {
        data = {
          id: 'd0cc3195-5d4c-4f35-90d7-950ba7b0034b',
          version: 1,
          createdAt: '2017-10-04T14:31:41.643Z',
          key: 'key',
          uniquenessValue: 'uniquenessValue',
          locale: 'en',
          authorName: 'authorName',
          title: 'title',
          text: 'text',
          target: {
            typeId: 'product',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          state: {
            typeId: 'state',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          rating: 57,
          customer: {
            typeId: 'customer',
            id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
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
