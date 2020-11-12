const Ajv = require('ajv');
const schema = require('../index');

describe('index', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when is a Point', () => {
      beforeAll(() => {
        data = {
          type: 'Point',
          coordinates: [35.2366173, -6.6724601]
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
    describe('when type is not an allowed one', () => {
      beforeAll(() => {
        data = {
          type: 'Polygon',
          coordinates: [
            [
              [0, 0],
              [3, 6],
              [6, 1],
              [0, 0]
            ]
          ]
        };
        ajv = Ajv();
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
