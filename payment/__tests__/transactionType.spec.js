const Ajv = require("ajv");
const schema = require("../transactionType");

describe("transactionType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when Authorization", () => {
      beforeAll(() => {
        data = "Authorization";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when CancelAuthorization", () => {
      beforeAll(() => {
        data = "CancelAuthorization";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when SuChargeccess", () => {
      beforeAll(() => {
        data = "SuChargeccess";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Refund", () => {
      beforeAll(() => {
        data = "Refund";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Chargeback", () => {
      beforeAll(() => {
        data = "Chargeback";
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
    describe("when value is not an allowed one", () => {
      beforeAll(() => {
        data = "nonAllowedValue";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeFalsy();
      });
    });
  });
});
