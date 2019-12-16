const Ajv = require("ajv");
const schema = require("../reviewRatingStatistics");

describe("reviewRatingStatistics", () => {
  let ajv;
  let data;
  let valid;

  describe("when success", () => {
    beforeAll(() => {
      data = {
        averageRating: 4.42892,
        highestRating: 7,
        lowestRating: 1,
        count: 401,
        ratingsDistribution: {
          "1": 3,
          "2": 7,
          "3": 59,
          "4": 169,
          "5": 74,
          "6": 87,
          "7": 2
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
