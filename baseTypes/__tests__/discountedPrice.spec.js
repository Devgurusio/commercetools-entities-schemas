const Ajv = require('ajv');
const schema = require('../discountedPrice');

describe('discountedPrice', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    beforeAll(() => {
      data = {
        value: {
          currencyCode: 'EUR',
          centAmount: 4200
        },
        discount: {
          typeId: 'product',
          id: '7217f75f-5931-42f0-8029-9dd51513c221'
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
    describe('when missing value property', () => {
      beforeAll(() => {
        data = {
          discount: {
            typeId: 'product',
            id: '7217f75f-5931-42f0-8029-9dd51513c221'
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

    describe('when missing discount property', () => {
      beforeAll(() => {
        data = {
          value: {
            currencyCode: 'EUR',
            centAmount: 4200
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
