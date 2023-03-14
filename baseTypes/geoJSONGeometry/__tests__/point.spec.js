const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../point');

describe('point', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        type: 'Point',
        coordinates: [35.2366173, -6.6724601]
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

  describe('when error', () => {
    describe('when missing type property', () => {
      beforeAll(() => {
        data = { coordinates: [35.2366173, -6.6724601] };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when missing coordinates property', () => {
      beforeAll(() => {
        data = { type: 'Point' };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when wrong coordinates property', () => {
      beforeAll(() => {
        data = {
          type: 'Point',
          coordinates: [35.2366173]
        };
        ajv = new Ajv();
        addFormats(ajv);
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
