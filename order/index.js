const order = require('./order');
const orderFromCartDraft = require('./orderFromCartDraft');
const orderState = require('./orderState');
const paymentState = require('./paymentState');
const returnInfo = require('./returnInfo');
const returnItem = require('./returnItem');
const returnPaymentState = require('./returnPaymentState');
const returnShipmentState = require('./returnShipmentState');
const shipmentState = require('./shipmentState');
const syncInfo = require('./syncInfo');

module.exports = {
  order,
  orderFromCartDraft,
  orderState,
  paymentState,
  returnInfo,
  returnItem,
  returnPaymentState,
  returnShipmentState,
  shipmentState,
  syncInfo
};
