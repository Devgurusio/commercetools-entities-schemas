const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../typeDraft');

describe('typeDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          name: { en: 'name', es: 'nombre' }
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'description' },
          resourceTypeIds: ['asset'],
          fieldDefinitions: [
            {
              type: { name: 'String' },
              name: 'test-fieldDefinition',
              label: { en: 'Test Field Definition ' },
              required: false,
              inputHint: 'SingleLine'
            }
          ]
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

  describe('when error', () => {
    describe('when missing key property', () => {
      beforeAll(() => {
        data = {
          name: { en: 'name', es: 'nombre' },
          description: { en: 'description', es: 'description' },
          resourceTypeIds: ['asset'],
          fieldDefinitions: [
            {
              type: { name: 'String' },
              name: 'test-fieldDefinition',
              label: { en: 'Test Field Definition ' },
              required: false,
              inputHint: 'SingleLine'
            }
          ]
        };
        ajv = new Ajv();
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
          key: 'key',
          description: { en: 'description', es: 'description' },
          resourceTypeIds: ['asset'],
          fieldDefinitions: [
            {
              type: { name: 'String' },
              name: 'test-fieldDefinition',
              label: { en: 'Test Field Definition ' },
              required: false,
              inputHint: 'SingleLine'
            }
          ]
        };
        ajv = new Ajv();
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
