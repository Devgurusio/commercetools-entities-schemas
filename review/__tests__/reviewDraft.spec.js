const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../reviewDraft');

describe('reviewDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
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
