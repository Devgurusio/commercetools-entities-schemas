const Ajv = require("ajv");
const schema = require("../localizedString");

describe("localizedString", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        en: "example",
        es: "ejemplo",
        "en-US": "example"
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
    describe("when value is not string", () => {
      beforeAll(() => {
        data = {
          en: "example",
          es: 7
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
