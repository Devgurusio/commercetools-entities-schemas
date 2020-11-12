const Ajv = require('ajv');
const schema = require('../attributeDraft');

describe('attributeDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        name: 'attributeName',
        value: {
          type: { name: 'number' },
          name: 'customizableWithAccessoryVariant',
          label: { en: 'Customizable with accessory variant' },
          isRequired: true,
          attributeConstraint: 'None',
          inputTip: { en: 'inputTip', es: 'inputTip' },
          inputHint: 'SingleLine',
          isSearchable: true,
          displayGroup: 'Other'
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

  describe('when error', () => {
    describe('when missing name property', () => {
      beforeAll(() => {
        data = {
          value: {
            type: { name: 'number' },
            name: 'customizableWithAccessoryVariant',
            label: { en: 'Customizable with accessory variant' },
            isRequired: true,
            attributeConstraint: 'None',
            inputTip: { en: 'inputTip', es: 'inputTip' },
            inputHint: 'SingleLine',
            isSearchable: true,
            displayGroup: 'Other'
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

    describe('when missing value property', () => {
      beforeAll(() => {
        data = { name: 'attributeName' };
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
