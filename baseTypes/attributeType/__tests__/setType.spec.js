const Ajv = require('ajv');
const schema = require('../setType');

describe('setType', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        name: 'set',
        elementType: { name: 'boolean' }
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
    describe('when missing name property', () => {
      beforeAll(() => {
        data = { elementType: { name: 'text' } };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when name property is not an allowed one', () => {
      beforeAll(() => {
        data = {
          name: 'NotAllowedName',
          elementType: { name: 'text' }
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

    describe('when missing referenceTypeId property', () => {
      beforeAll(() => {
        data = { name: 'set' };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test('should not be valid', () => {
        expect(valid).toBeFalsy();
      });
    });

    describe('when wrong elementType property', () => {
      beforeAll(() => {
        data = {
          name: 'set',
          elementType: { name: 'NotAllowedName' }
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
