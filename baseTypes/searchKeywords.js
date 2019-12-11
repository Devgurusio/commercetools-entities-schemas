const searchKeyword = require("./searchKeyword");

module.exports = {
  type: "object",
  description:
    "Search keywords are primarily used by the suggester, but are also considered for the full text search. SearchKeywords is a JSON object where the keys are of IETF language tag . The value to a language tag key is an array of SearchKeyword for the specific language",
  patternProperties: {
    "^.+$": {
      type: "array",
      items: searchKeyword
    }
  }
};
