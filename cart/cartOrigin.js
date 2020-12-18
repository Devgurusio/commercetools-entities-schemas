const customer = require('../customer/customer');
const merchant = require('../'); // TO COMPLETE

module.exports = {
  oneOf: [customer, merchant]
};
