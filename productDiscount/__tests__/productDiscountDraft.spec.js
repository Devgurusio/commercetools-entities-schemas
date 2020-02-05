const Ajv = require("ajv");
const schema = require("../productDiscountDraft");

describe("productDiscountDraft", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          value: { type: "external" },
          predicate: "product.key",
          sortOrder: "0.1",
          isActive: true
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
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "external" },
          predicate: "product.key",
          sortOrder: "0.1",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "external" },
          predicate: "product.key",
          sortOrder: "0.1",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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

    describe("when missing value property", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          predicate: "product.key",
          sortOrder: "0.1",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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

    describe("when missing predicate property", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "external" },
          sortOrder: "0.1",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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

    describe("when missing sortOrder property", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "external" },
          predicate: "product.key",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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

    describe("when missing isActive property", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "external" },
          predicate: "product.key",
          sortOrder: "0.1",
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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

    describe("when value is not oneOf [absolute, external, relative]", () => {
      beforeAll(() => {
        data = {
          name: { en: "name", es: "nombre" },
          key: "key",
          description: { en: "description", es: "descripcion" },
          value: { type: "invalidType" },
          predicate: "product.key",
          sortOrder: "0.1",
          isActive: true,
          validFrom: "2017-09-20T11:32:32.727Z",
          validUntil: "2017-09-28T10:43:18.863Z"
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
