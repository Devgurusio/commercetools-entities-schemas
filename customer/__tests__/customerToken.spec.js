const Ajv = require("ajv");
const schema = require("../customerToken");

describe("customerToken", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        id: "74d32d79-aa32-44c8-8f2e-74132890310b",
        customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
        createdAt: "2017-09-20T11:32:32.727Z",
        lastModifiedAt: "2017-09-28T10:43:18.863Z",
        expiresAt: "2017-09-28T10:43:18.863Z",
        value: "tokenValue"
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
    describe("when missing id property", () => {
      beforeAll(() => {
        data = {
          customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          createdAt: "2017-09-20T11:32:32.727Z",
          lastModifiedAt: "2017-09-28T10:43:18.863Z",
          expiresAt: "2017-09-28T10:43:18.863Z",
          value: "tokenValue"
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

    describe("when missing customerId property", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          createdAt: "2017-09-20T11:32:32.727Z",
          lastModifiedAt: "2017-09-28T10:43:18.863Z",
          expiresAt: "2017-09-28T10:43:18.863Z",
          value: "tokenValue"
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

    describe("when missing createdAt property", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          lastModifiedAt: "2017-09-28T10:43:18.863Z",
          expiresAt: "2017-09-28T10:43:18.863Z",
          value: "tokenValue"
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
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          createdAt: "2017-09-20T11:32:32.727Z",
          expiresAt: "2017-09-28T10:43:18.863Z",
          value: "tokenValue"
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

    describe("when missing expiresAt property", () => {
      beforeAll(() => {
        data = {
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          createdAt: "2017-09-20T11:32:32.727Z",
          lastModifiedAt: "2017-09-28T10:43:18.863Z",
          value: "tokenValue"
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
          id: "74d32d79-aa32-44c8-8f2e-74132890310b",
          customerId: "74d32d79-aa32-44c8-8f2e-74132890310b",
          createdAt: "2017-09-20T11:32:32.727Z",
          lastModifiedAt: "2017-09-28T10:43:18.863Z",
          expiresAt: "2017-09-28T10:43:18.863Z"
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
