const Ajv = require("ajv");
const schema = require("../assetDimensions");

describe("assetDimensions", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        w: 640,
        h: 480
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

  describe("when error", () => {
    describe("when missing w property", () => {
      beforeAll(() => {
        data = {
          w: 640
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

    describe("when missing h property", () => {
      beforeAll(() => {
        data = {
          h: 480
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
  });
});
