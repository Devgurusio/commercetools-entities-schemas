const cloudEventsFormat = require('./cloudEventsFormat');
const platformFormat = require('./platformFormat');

module.exports = {
  oneOf: [cloudEventsFormat, platformFormat]
};
