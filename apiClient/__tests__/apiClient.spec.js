const Ajv = require("ajv");
const schema = require("../apiClient");

describe("apiClient", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          id: "7217f75f-5931-42f0-8029-9dd51513c221",
          name: "my-api-client",
          scope: "scope"
        };
      });

      beforeAll(() => {
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
          id: "7217f75f-5931-42f0-8029-9dd51513c221",
          name: "my-api-client",
          scope: "scope",
          createdAt: "2017-09-19T17:41:52.494Z",
          lastUsedAt: "2019-11-19",
          secret: "secret"
        };
      });

      beforeAll(() => {
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
          name: "my-api-client",
          scope: "scope",
          createdAt: "2017-09-19T17:41:52.494Z",
          lastUsedAt: "2019-11-19",
          secret: "secret"
        };
      });

      beforeAll(() => {
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
          id: "7217f75f-5931-42f0-8029-9dd51513c221",
          scope: "scope",
          createdAt: "2017-09-19T17:41:52.494Z",
          lastUsedAt: "2019-11-19",
          secret: "secret"
        };
      });

      beforeAll(() => {
        ajv = Ajv();
      });

      beforeEach(() => {
        valid = ajv.validate(schema, data);
      });

      test("should be valid", () => {
        expect(valid).toBeFalsy();
      });
    });

    describe("when missing scope property", () => {
      beforeAll(() => {
        data = {
          id: "7217f75f-5931-42f0-8029-9dd51513c221",
          name: "my-api-client",
          createdAt: "2017-09-19T17:41:52.494Z",
          lastUsedAt: "2019-11-19",
          secret: "secret"
        };
      });

      beforeAll(() => {
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
