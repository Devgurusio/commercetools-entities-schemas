const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../attribute');

describe('attribute', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when string value', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName',
          value: 'string'
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

    describe('when number value', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName',
          value: 13
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

    describe('when object value', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName',
          value: { key: 'value' }
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

    describe('when array value', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName',
          value: [{ key: 'value' }]
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

    describe('when boolean value', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName',
          value: true
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
    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          value: true
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

    describe('when missing value property', () => {
      beforeAll(() => {
        data = {
          name: 'attributeName'
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
