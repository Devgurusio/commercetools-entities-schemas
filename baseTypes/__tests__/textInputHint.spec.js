const Ajv = require("ajv");
const schema = require("../textInputHint");

describe("textInputHint", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when value is SingleLine", () => {
      beforeAll(() => {
        data = "SingleLine";
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when value is MultiLine", () => {
      beforeAll(() => {
        data = "SingleLine";
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
        data = "notAllowedValue";
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
