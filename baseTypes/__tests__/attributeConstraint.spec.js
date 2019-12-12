const Ajv = require("ajv");
const schema = require("../attributeConstraint");

describe("attributeConstraint", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe('when attribute constraint is "None"', () => {
      beforeAll(() => {
        data = "None";
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

    describe('when attribute constraint is "Unique"', () => {
      beforeAll(() => {
        data = "Unique";
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

    describe('when attribute constraint is "CombinationUnique"', () => {
      beforeAll(() => {
        data = "CombinationUnique";
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

    describe('when attribute constraint is "SameForAll"', () => {
      beforeAll(() => {
        data = "SameForAll";
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
    describe("when attribute constraint is not an allowed value", () => {
      beforeAll(() => {
        data = "NonValidConstraint";
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
  });
});
