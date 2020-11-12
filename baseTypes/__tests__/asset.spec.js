const Ajv = require('ajv');
const schema = require('../asset');

describe('asset', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
          sources: [
            {
              uri: 'http://localhost:3000/my-asset',
              key: 'key',
              dimensions: {
                w: 640,
                h: 480
              },
              contentType: 'image/jpeg'
            }
          ],
          name: { en: 'asset name', es: 'nombre del asset' }
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
          id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
          key: 'key',
          sources: [
            {
              uri: 'http://localhost:3000/my-asset',
              key: 'key',
              dimensions: {
                w: 640,
                h: 480
              },
              contentType: 'image/jpeg'
            }
          ],
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
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
  });

  describe('when error', () => {
    describe('when missing id property', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          sources: [
            {
              uri: 'http://localhost:3000/my-asset',
              key: 'key',
              dimensions: {
                w: 640,
                h: 480
              },
              contentType: 'image/jpeg'
            }
          ],
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
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

    describe('when missing sources property', () => {
      beforeAll(() => {
        data = {
          id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
          key: 'key',
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
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

    describe('when sources property is empty', () => {
      beforeAll(() => {
        data = {
          id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
          key: 'key',
          sources: [],
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
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

    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          id: 'f74b4e9f-2c03-4178-9ba4-bf6d6160a597',
          key: 'key',
          sources: [
            {
              uri: 'http://localhost:3000/my-asset',
              key: 'key',
              dimensions: {
                w: 640,
                h: 480
              },
              contentType: 'image/jpeg'
            }
          ],
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
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
