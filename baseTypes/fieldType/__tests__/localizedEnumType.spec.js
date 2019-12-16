const Ajv = require("ajv");
const schema = require("../localizedEnumType");

describe("localizedEnumType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = { name: "LocalizedEnum" };
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
          name: "LocalizedEnum",
          values: [{ key: "key", label: { en: "label", es: "etiqueta" } }]
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
    describe("when missing name property", () => {
      beforeAll(() => {
        data = {
          values: [{ key: "key", label: { en: "label", es: "etiqueta" } }]
        };
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
        data = {
          name: "NotAllowedName",
          values: [{ key: "key", label: { en: "label", es: "etiqueta" } }]
        };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when values property are not localized strings", () => {
      beforeAll(() => {
        data = {
          name: "LocalizedEnum",
          values: [{ key: "key", label: "label" }]
        };
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
