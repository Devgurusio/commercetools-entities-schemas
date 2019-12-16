const Ajv = require("ajv");
const schema = require("../referenceType");

describe("referenceType", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
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

  describe("when error", () => {
    describe("when missing name property", () => {
      beforeAll(() => {
        data = { referenceTypeId: "cart" };
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
          referenceTypeId: "cart"
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

    describe("when missing referenceTypeId property", () => {
      beforeAll(() => {
        data = { name: "Reference" };
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
