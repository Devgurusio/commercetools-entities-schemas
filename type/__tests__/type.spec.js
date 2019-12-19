const Ajv = require("ajv");
const schema = require("../type");

describe("type", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" }
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
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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
    describe("when missing id property", () => {
      beforeAll(() => {
        data = {
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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

    describe("when missing version property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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

    describe("when missing createdAt property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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

    describe("when missing lastModifiedAt property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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

    describe("when missing key property", () => {
      beforeAll(() => {
        data = {
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          name: { en: "name", es: "nombre" },
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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
          id: "d0cc3195-5d4c-4f35-90d7-950ba7b0034b",
          version: 1,
          createdAt: "2017-10-04T14:31:41.643Z",
          lastModifiedAt: "2017-10-04T14:31:41.643Z",
          key: "key",
          description: { en: "description", es: "description" },
          resourceTypeIds: ["asset"],
          fieldDefinitions: [
            {
              type: { name: "String" },
              name: "test-fieldDefinition",
              label: { en: "Test Field Definition " },
              required: false,
              inputHint: "SingleLine"
            }
          ]
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
