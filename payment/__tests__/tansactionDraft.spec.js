const Ajv = require('ajv');
const schema = require('../transactionDraft');

describe('transactionDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          type: 'Authorization',
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
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

    describe('when all fields', () => {
      beforeAll(() => {
        data = {
          timestamp: '2017-10-04T14:31:41.643Z',
          type: 'Authorization',
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          },
          interactionId: 'interactionId',
          state: 'Initial'
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
    describe('when missing type property', () => {
      beforeAll(() => {
        data = {
          timestamp: '2017-10-04T14:31:41.643Z',
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          },
          interactionId: 'interactionId',
          state: 'Initial'
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

    describe('when type property is not an allowed one', () => {
      beforeAll(() => {
        data = {
          timestamp: '2017-10-04T14:31:41.643Z',
          type: 'notAllowedType',
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          },
          interactionId: 'interactionId',
          state: 'Initial'
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

    describe('when missing amount property', () => {
      beforeAll(() => {
        data = {
          timestamp: '2017-10-04T14:31:41.643Z',
          type: 'Authorization',
          interactionId: 'interactionId',
          state: 'Initial'
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

    describe('when state property is not an allowed one', () => {
      beforeAll(() => {
        data = {
          timestamp: '2017-10-04T14:31:41.643Z',
          type: 'Authorization',
          amount: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 390,
            fractionDigits: 2
          },
          interactionId: 'interactionId',
          state: 'notAllowedType'
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
