const suggestTokenizer = require("./suggestTokenizer");

module.exports = {
  type: "object",
  properties: {
    text: {
      type: "string",
      description: "Text to return in the result of a suggest query"
    },
    suggestTokenizer: {
      ...suggestTokenizer,
      description: `The tokenizer defines the tokens that are used to match against the suggest query input.
        If no tokenizer is defined, the text is used as as single token`
    }
  },
  required: ["text"]
};
