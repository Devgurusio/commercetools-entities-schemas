const Ajv = require("ajv");
const schema = require("../");

describe("productDiscountValue", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when productDiscountValue is absolute", () => {
      beforeAll(() => {
        data = {
          type: "absolute",
          money: [
            {
              type: "centPrecision",
              currencyCode: "EUR",
              centAmount: 390,
              fractionDigits: 2
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

    describe("when productDiscountValue is external", () => {
      beforeAll(() => {
        data = {
          type: "external"
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

    describe("when productDiscountValue is relative", () => {
      beforeAll(() => {
        data = {
          type: "relative",
          permyriad: 1000
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
    describe("when productDiscountValue is not oneOf [absolute, external, relative]", () => {
      beforeAll(() => {
        data = {
          type: "invalidType"
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
