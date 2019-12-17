const Ajv = require("ajv");
const schema = require("../myPayment");

describe("myPayment", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          version: 3,
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
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          version: 3,
          customer: {
            typeId: "customer",
            id: "74d32d79-aa32-44c8-8f2e-74132890310b"
          },
          anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
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
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
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
    describe("when missing id property", () => {
      beforeAll(() => {
        data = {
          version: 3,
          customer: {
            typeId: "customer",
            id: "74d32d79-aa32-44c8-8f2e-74132890310b"
          },
          anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
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
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
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

    describe("when missing version property", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          customer: {
            typeId: "customer",
            id: "74d32d79-aa32-44c8-8f2e-74132890310b"
          },
          anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
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
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
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

    describe("when missing amountPlanned property", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          version: 3,
          customer: {
            typeId: "customer",
            id: "74d32d79-aa32-44c8-8f2e-74132890310b"
          },
          anonymousId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          paymentMethodInfo: {
            paymentInterface: "paymentInterface",
            method: "Credit Card",
            name: { en: "Credit Card", es: "Tarjeta de Crédito" }
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
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
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

    describe("when missing lastModifiedAt property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          sku: "sku",
          quantityOnStock: 5,
          restockableInDays: 2,
          expectedDelivery: "2017-10-04T14:31:41.643Z",
          supplyChannel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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

    describe("when missing sku property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          quantityOnStock: 5,
          restockableInDays: 2,
          expectedDelivery: "2017-10-04T14:31:41.643Z",
          supplyChannel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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

    describe("when missing quantityOnStock property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          sku: "sku",
          restockableInDays: 2,
          expectedDelivery: "2017-10-04T14:31:41.643Z",
          supplyChannel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
