const Ajv = require('ajv');
const schema = require('../attributeConstraint');

describe('attributeConstraint', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when attribute constraint is "None"', () => {
      beforeAll(() => {
        data = 'None';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when attribute constraint is "Unique"', () => {
      beforeAll(() => {
        data = 'Unique';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when attribute constraint is "CombinationUnique"', () => {
      beforeAll(() => {
        data = 'CombinationUnique';
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should be valid', () => {
        expect(valid).toBeTruthy();
      });
    });

    describe('when attribute constraint is "SameForAll"', () => {
      beforeAll(() => {
        data = 'SameForAll';
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
    describe('when attribute constraint is not an allowed value', () => {
      beforeAll(() => {
        data = 'NonValidConstraint';
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
