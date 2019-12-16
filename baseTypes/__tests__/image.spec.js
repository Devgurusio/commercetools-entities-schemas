const Ajv = require("ajv");
const schema = require("../image");

describe("image", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    describe("when only required fields", () => {
      beforeAll(() => {
        data = {
          url: "http://localhost:3000/image.jpg",
          dimensions: {
            w: 640,
            h: 480
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

    describe("when all fields", () => {
      beforeAll(() => {
        data = {
          url: "http://localhost:3000/image.jpg",
          dimensions: {
            w: 640,
            h: 480
          },
          label: "alt text"
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
    describe("when missing url property", () => {
      beforeAll(() => {
        data = {
          dimensions: {
            w: 640,
            h: 480
          },
          label: "alt text"
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

    describe("when url has not uri format", () => {
      beforeAll(() => {
        data = {
          url: "image.jpg",
          dimensions: {
            w: 640,
            h: 480
          },
          label: "alt text"
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

    describe("when missing dimensions property", () => {
      beforeAll(() => {
        data = {
          url: "http://localhost:3000/image.jpg",
          label: "alt text"
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
