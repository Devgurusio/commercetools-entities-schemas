const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../assetSource');

describe('assetSource', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          uri: 'http://localhost:3000/my-asset'
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
          uri: 'http://localhost:3000/my-asset',
          key: 'key',
          dimensions: {
            w: 640,
            h: 480
          },
          contentType: 'image/jpeg'
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
    describe('when missing uri property', () => {
      beforeAll(() => {
        data = {
          key: 'key',
          dimensions: {
            w: 640,
            h: 480
          },
          contentType: 'image/jpeg'
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
