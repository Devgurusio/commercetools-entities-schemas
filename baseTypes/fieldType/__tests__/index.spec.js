const Ajv = require("ajv");
const schema = require("../index");

describe("fieldType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when Boolean", () => {
      beforeAll(() => {
        data = { name: "Boolean" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when DateTime", () => {
      beforeAll(() => {
        data = { name: "DateTime" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Date", () => {
      beforeAll(() => {
        data = { name: "Date" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Enum", () => {
      beforeAll(() => {
        data = {
          name: "Enum",
          values: [{ key: "key", label: "label" }]
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

    describe("when LocalizedEnum", () => {
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

    describe("when LocalizedString", () => {
      beforeAll(() => {
        data = { name: "LocalizedString" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Money", () => {
      beforeAll(() => {
        data = { name: "Money" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Number", () => {
      beforeAll(() => {
        data = { name: "Number" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Reference", () => {
      beforeAll(() => {
        data = {
          name: "Reference",
          referenceTypeId: "cart"
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

    describe("when Set", () => {
      beforeAll(() => {
        data = {
          name: "Set",
          elementType: { name: "Boolean" }
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

    describe("when String", () => {
      beforeAll(() => {
        data = { name: "String" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when Time", () => {
      beforeAll(() => {
        data = { name: "Time" };
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
    describe("when name property is not an allowed one", () => {
      beforeAll(() => {
        data = { name: "NotAllowedName" };
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
