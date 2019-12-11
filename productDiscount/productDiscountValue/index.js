const absolute = require("./absolute");
const external = require("./external");
const relative = require("./relative");

module.exports = {
  oneOf: [absolute, external, relative]
};
