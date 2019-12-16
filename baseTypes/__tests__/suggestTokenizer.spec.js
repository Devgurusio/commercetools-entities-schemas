const Ajv = require("ajv");
const schema = require("../suggestTokenizer");

describe("suggestTokenizer", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when custom tokenizer", () => {
      describe("when only required fields", () => {
        beforeAll(() => {
          data = { type: "custom" };
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
            type: "custom",
            inputs: ["input1", "imput2"]
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

    describe("when whitespace tokenizer", () => {
      beforeAll(() => {
        data = { type: "whitespace" };
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
    describe("when type is not custom or whitespace", () => {
      beforeAll(() => {
        data = { type: "notAllowedWhitespace" };
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
