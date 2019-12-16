const Ajv = require("ajv");
const schema = require("../scopedPrice");

describe("scopedPrice", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          value: {
            currencyCode: "EUR",
            centAmount: 400
          },
          currentValue: {
            currencyCode: "EUR",
            centAmount: 400
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
          id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          value: {
            currencyCode: "EUR",
            centAmount: 400
          },
          currentValue: {
            currencyCode: "EUR",
            centAmount: 400
          },
          country: "ES",
          customerGroup: {
            typeId: "customer-group",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          channel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          validFrom: "1983-08-17T17:00:00Z",
          validUntil: "1983-08-17T17:00:00Z",
          discounted: {
            value: {
              currencyCode: "EUR",
              centAmount: 400
            },
            discount: {
              typeId: "discount",
              id: "462ac753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          },
          custom: {
            type: {
              typeId: "type",
              id: "1f0d7e26-fe73-4277-93cf-2735d898d300"
            },
            fields: {
              attribute: "value"
            }
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
  });

  describe("when error", () => {
    describe("when missing id property", () => {
      beforeAll(() => {
        data = {
          value: {
            currencyCode: "EUR",
            centAmount: 400
          },
          currentValue: {
            currencyCode: "EUR",
            centAmount: 400
          },
          country: "ES",
          customerGroup: {
            typeId: "customer-group",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          channel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          validFrom: "1983-08-17T17:00:00Z",
          validUntil: "1983-08-17T17:00:00Z",
          discounted: {
            value: {
              currencyCode: "EUR",
              centAmount: 400
            },
            discount: {
              typeId: "discount",
              id: "462ac753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          },
          custom: {
            type: {
              typeId: "type",
              id: "1f0d7e26-fe73-4277-93cf-2735d898d300"
            },
            fields: {
              attribute: "value"
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

    describe("when missing value property", () => {
      beforeAll(() => {
        data = {
          id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          currentValue: {
            currencyCode: "EUR",
            centAmount: 400
          },
          country: "ES",
          customerGroup: {
            typeId: "customer-group",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          channel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          validFrom: "1983-08-17T17:00:00Z",
          validUntil: "1983-08-17T17:00:00Z",
          discounted: {
            value: {
              currencyCode: "EUR",
              centAmount: 400
            },
            discount: {
              typeId: "discount",
              id: "462ac753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          },
          custom: {
            type: {
              typeId: "type",
              id: "1f0d7e26-fe73-4277-93cf-2735d898d300"
            },
            fields: {
              attribute: "value"
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

    describe("when missing currentValue property", () => {
      beforeAll(() => {
        data = {
          id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597",
          value: {
            currencyCode: "EUR",
            centAmount: 400
          },
          country: "ES",
          customerGroup: {
            typeId: "customer-group",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          channel: {
            typeId: "channel",
            id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
          },
          validFrom: "1983-08-17T17:00:00Z",
          validUntil: "1983-08-17T17:00:00Z",
          discounted: {
            value: {
              currencyCode: "EUR",
              centAmount: 400
            },
            discount: {
              typeId: "discount",
              id: "462ac753-82d5-4f6a-9dd7-9ec81723dac1"
            }
          },
          custom: {
            type: {
              typeId: "type",
              id: "1f0d7e26-fe73-4277-93cf-2735d898d300"
            },
            fields: {
              attribute: "value"
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
