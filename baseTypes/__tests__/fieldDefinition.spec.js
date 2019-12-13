const Ajv = require("ajv");
const schema = require("../fieldDefinition");

describe("fieldDefinition", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          type: { name: "Boolean" },
          name: "test-fieldDefinition",
          label: { en: "Test Field Definition " }
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

    describe("when all fields", () => {
      beforeAll(() => {
        data = {
          type: { name: "String" },
          name: "test-fieldDefinition",
          label: { en: "Test Field Definition " },
          required: false,
          inputHint: "SingleLine"
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
    describe("when missing type property", () => {
      beforeAll(() => {
        data = {
          name: "test-fieldDefinition",
          label: { en: "Test Field Definition " },
          required: false,
          inputHint: "SingleLine"
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

    describe("when type property is not an allowed one", () => {
      beforeAll(() => {
        data = {
          type: { name: "None" },
          name: "test-fieldDefinition",
          label: { en: "Test Field Definition " },
          required: false,
          inputHint: "SingleLine"
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

    describe("when missing name property", () => {
      beforeAll(() => {
        data = {
          type: { name: "Boolean" },
          label: { en: "Test Field Definition " },
          required: false,
          inputHint: "SingleLine"
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

    describe("when missing label property", () => {
      beforeAll(() => {
        data = {
          type: { name: "Boolean" },
          name: "test-fieldDefinition",
          required: false,
          inputHint: "SingleLine"
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
