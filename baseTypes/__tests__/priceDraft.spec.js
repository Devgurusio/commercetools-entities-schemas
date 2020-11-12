const Ajv = require('ajv');
const schema = require('../priceDraft');

describe('priceDraft', () => {
  let ajv;
  let data;
  let valid;

  describe('when success', () => {
    describe('when only required fields', () => {
      beforeAll(() => {
        data = {
          value: {
            currencyCode: 'EUR',
            centAmount: 400
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
          value: {
            currencyCode: 'EUR',
            centAmount: 400
          },
          country: 'ES',
          customerGroup: {
            typeId: 'customer',
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
          },
          channel: {
            typeId: 'channel',
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
          },
          discounted: {
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            discount: {
              typeId: 'discount',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            }
          },
          validFrom: '1983-08-17T17:00:00Z',
          validUntil: '1983-08-17T17:00:00Z',
          tiers: [
            {
              minimumQuantity: 3,
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              }
            }
          ],
          custom: {
            type: {
              typeId: 'type',
              id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
            },
            fields: {
              attribute: 'value'
            }
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
  });

  describe('when error', () => {
    describe('when missing value property', () => {
      beforeAll(() => {
        data = {
          country: 'ES',
          customerGroup: {
            typeId: 'customer',
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
          },
          channel: {
            typeId: 'channel',
            id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
          },
          discounted: {
            value: {
              currencyCode: 'EUR',
              centAmount: 400
            },
            discount: {
              typeId: 'discount',
              id: '462ac753-82d5-4f6a-9dd7-9ec81723dac1'
            }
          },
          validFrom: '1983-08-17T17:00:00Z',
          validUntil: '1983-08-17T17:00:00Z',
          tiers: [
            {
              minimumQuantity: 3,
              value: {
                currencyCode: 'EUR',
                centAmount: 400
              }
            }
          ],
          custom: {
            type: {
              typeId: 'type',
              id: '1f0d7e26-fe73-4277-93cf-2735d898d300'
            },
            fields: {
              attribute: 'value'
            }
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
