const Ajv = require('ajv');
const schema = require('../assetDraft');

describe('assetDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
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
              key: 'my-category'
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
    describe('when missing sources property', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
          custom: {
            type: {
              key: 'my-category'
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
          key: 'key',
          sources: [],
          name: { en: 'asset name', es: 'nombre del asset' },
          description: { en: 'asset description', es: 'descripción del asset' },
          tags: ['images', 'myasset'],
          custom: {
            type: {
              key: 'my-category'
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
              key: 'my-category'
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
