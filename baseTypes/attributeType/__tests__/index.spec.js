const Ajv = require("ajv");
const schema = require("../index");

describe("attributeType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when Boolean", () => {
      beforeAll(() => {
        data = { name: "boolean" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when datetime", () => {
      beforeAll(() => {
        data = { name: "datetime" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when date", () => {
      beforeAll(() => {
        data = { name: "date" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when enum", () => {
      beforeAll(() => {
        data = {
          name: "enum",
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

    describe("when lenum", () => {
      beforeAll(() => {
        data = {
          name: "lenum",
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

    describe("when ltext", () => {
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

    describe("when money", () => {
      beforeAll(() => {
        data = { name: "money" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when nested", () => {
      beforeAll(() => {
        data = {
          name: "nested",
          typeReference: "cart"
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

    describe("when number", () => {
      beforeAll(() => {
        data = { name: "number" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when reference", () => {
      beforeAll(() => {
        data = {
          name: "reference",
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

    describe("when set", () => {
      beforeAll(() => {
        data = {
          name: "set",
          elementType: { name: "boolean" }
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

    describe("when text", () => {
      beforeAll(() => {
        data = { name: "text" };
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeTruthy();
      });
    });

    describe("when time", () => {
      beforeAll(() => {
        data = { name: "time" };
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
