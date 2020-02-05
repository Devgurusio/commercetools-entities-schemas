const Ajv = require("ajv");
const schema = require("../authorizationHeader");

describe("authorizationHeader", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        type: "AuthorizationHeader",
        headerValue: "headerValue"
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
    describe("when missing type property", () => {
      beforeAll(() => {
        data = {
          headerValue: "headerValue"
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

    describe("when missing headerValue", () => {
      beforeAll(() => {
        data = {
          type: "AuthorizationHeader"
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

    describe("when type is not valid", () => {
      beforeAll(() => {
        data = {
          type: "invalidType",
          headerValue: "headerValue"
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
