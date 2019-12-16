const Ajv = require("ajv");
const schema = require("../localizableTextType");

describe("localizableTextType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = { name: "ltext" };
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
    describe("when missing name property", () => {
      beforeAll(() => {
        data = {};
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when name property is not an allowed one", () => {
      beforeAll(() => {
        data = { name: "NotAllowedName" };
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
