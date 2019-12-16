const Ajv = require("ajv");
const schema = require("../slug");

describe("slug", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        en: "sample-slug",
        es: "slug-de-ejemplo",
        "en-US": "sample-slug"
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
    describe("when value is not a valid slug", () => {
      beforeAll(() => {
        data = {
          en: "sample-slug",
          es: "mal slug"
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
