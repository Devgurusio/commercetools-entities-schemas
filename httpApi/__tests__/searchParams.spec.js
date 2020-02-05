const Ajv = require("ajv");
const schema = require("../searchParams");

describe("searchParams", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {};
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
          page: 1,
          perPage: 500,
          sortBy: "field",
          sortDirection: "asc"
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
    describe("when page is less than 1", () => {
      beforeAll(() => {
        data = {
          page: 0,
          perPage: 500,
          sortBy: "field",
          sortDirection: "asc"
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

    describe("when perPage is less than 1", () => {
      beforeAll(() => {
        data = {
          page: 1,
          perPage: 0,
          sortBy: "field",
          sortDirection: "asc"
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

    describe("when perPage is higher than 500", () => {
      beforeAll(() => {
        data = {
          page: 1,
          perPage: 501,
          sortBy: "field",
          sortDirection: "asc"
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

    describe("when sortDirection is invalid", () => {
      beforeAll(() => {
        data = {
          page: 1,
          perPage: 500,
          sortBy: "field",
          sortDirection: "invalidSortDirection"
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
