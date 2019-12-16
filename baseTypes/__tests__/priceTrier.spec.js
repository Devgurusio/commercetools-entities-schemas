const Ajv = require("ajv");
const schema = require("../priceTier");

describe("priceTier", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        minimumQuantity: 3,
        value: {
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

  describe("when error", () => {
    describe("when missing minimumQuantity property", () => {
      beforeAll(() => {
        data = {
          value: {
            currencyCode: "EUR",
            centAmount: 400
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
          minimumQuantity: 3
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
