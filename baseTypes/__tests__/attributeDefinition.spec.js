const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../attributeDefinition');

describe('attributeDefinition', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          type: { name: 'number' },
          name: 'customizableWithAccessoryVariant',
          label: { en: 'Customizable with accessory variant' },
          isRequired: true
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
          type: { name: 'number' },
          name: 'customizableWithAccessoryVariant',
          label: { en: 'Customizable with accessory variant' },
          isRequired: true,
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          name: 'customizableWithAccessoryVariant',
          label: { en: 'Customizable with accessory variant' },
          isRequired: true,
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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
          type: { name: 'number' },
          label: { en: 'Customizable with accessory variant' },
          isRequired: true,
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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

    describe('when missing label property', () => {
      beforeAll(() => {
        data = {
          type: { name: 'number' },
          name: 'customizableWithAccessoryVariant',
          isRequired: true,
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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

    describe('when missing isRequired property', () => {
      beforeAll(() => {
        data = {
          type: { name: 'number' },
          name: 'customizableWithAccessoryVariant',
          label: { en: 'Customizable with accessory variant' },
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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
