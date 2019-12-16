const Ajv = require("ajv");
const schema = require("../customerGroup");

describe("customerGroup", () => {
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
          name: "name"
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
          name: "name",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
          name: "name",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
          name: "name",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
          name: "name",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
          name: "name",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
          key: "key",
          custom: {
            type: {
              typeId: "product",
              id: "f74b4e9f-2c01-4178-9ba5-bf6d6167a597"
            },
            fields: {
              description: "my description"
            }
          }
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
