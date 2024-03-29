const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const schema = require('../myPaymentDraft');

describe('myPaymentDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          amountPlanned: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          }
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
          amountPlanned: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          },
          paymentMethodInfo: {
            paymentInterface: 'paymentInterface',
            method: 'Credit Card',
            name: { en: 'Credit Card', es: 'Tarjeta de Crédito' }
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          transaction: {
            timestamp: '2017-10-04T14:31:41.643Z',
            type: 'Authorization',
            amount: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 390,
              fractionDigits: 2
            },
            interactionId: 'interactionId'
          }
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
    describe('when missing amountPlanned property', () => {
      beforeAll(() => {
        data = {
          paymentMethodInfo: {
            paymentInterface: 'paymentInterface',
            method: 'Credit Card',
            name: { en: 'Credit Card', es: 'Tarjeta de Crédito' }
          },
          custom: {
            type: {
              typeId: 'product',
              id: 'f74b4e9f-2c01-4178-9ba5-bf6d6167a597'
            },
            fields: {
              description: 'my description'
            }
          },
          transaction: {
            timestamp: '2017-10-04T14:31:41.643Z',
            type: 'Authorization',
            amount: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 390,
              fractionDigits: 2
            },
            interactionId: 'interactionId'
          }
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
