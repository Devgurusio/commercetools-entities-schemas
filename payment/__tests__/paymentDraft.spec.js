const Ajv = require("ajv");
const schema = require("../paymentDraft");

describe("paymentDraft", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          amountPlanned: {
            type: "centPrecision",
            currencyCode: "EUR",
            centAmount: 390,
            fractionDigits: 2
          }
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when all fields", () => {
      beforeAll(() => {
        data = {
          key: "key",
          customer: {
            typeId: "customer",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          anonymousId: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          interfaceId: "interfaceId",
          amountPlanned: {
            type: "centPrecision",
            currencyCode: "EUR",
            centAmount: 390,
            fractionDigits: 2
          },
          paymentMethodInfo: {
            paymentInterface: "paymentInterface",
            method: "Credit Card",
            name: { en: "Credit Card", es: "Tarjeta de Crédito" }
          },
          paymentStatus: {
            interfaceCode: "interfaceCode",
            interfaceText: "interfaceText",
            state: {
              typeId: "state",
              id: "74d32d79-aa32-44c8-8f2e-74132890310b"
            }
          },
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          },
          transactions: [
            {
              timestamp: "2017-10-04T14:31:41.643Z",
              type: "Authorization",
              amount: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 390,
                fractionDigits: 2
              },
              interactionId: "interactionId",
              state: "Initial"
            }
          ],
          interfaceInteractions: [
            {
              type: {
                typeId: "product",
                id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
              },
              fields: {
                description: "my description"
              }
            }
          ]
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });
  });

  describe("when error", () => {
    describe("when missing amountPlanned property", () => {
      beforeAll(() => {
        data = {
          key: "key",
          customer: {
            typeId: "customer",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          anonymousId: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          interfaceId: "interfaceId",
          paymentMethodInfo: {
            paymentInterface: "paymentInterface",
            method: "Credit Card",
            name: { en: "Credit Card", es: "Tarjeta de Crédito" }
          },
          paymentStatus: {
            interfaceCode: "interfaceCode",
            interfaceText: "interfaceText",
            state: {
              typeId: "state",
              id: "74d32d79-aa32-44c8-8f2e-74132890310b"
            }
          },
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          },
          transactions: [
            {
              timestamp: "2017-10-04T14:31:41.643Z",
              type: "Authorization",
              amount: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 390,
                fractionDigits: 2
              },
              interactionId: "interactionId",
              state: "Initial"
            }
          ],
          interfaceInteractions: [
            {
              type: {
                typeId: "product",
                id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
              },
              fields: {
                description: "my description"
              }
            }
          ]
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should not be valid", () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
