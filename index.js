const apiClient = require('./apiClient');
const baseTypes = require('./baseTypes');
const cart = require('./cart');
const category = require('./category');
const channel = require('./channel');
const common = require('./common');
const customer = require('./customer');
const customerGroup = require('./customerGroup');
const customObject = require('./customObject');
const discountCode = require('./discountCode');
const extension = require('./extension');
const httpApi = require('./httpApi');
const inventory = require('./inventory');
const message = require('./message');
const myCustomer = require('./myCustomer');
const myPayment = require('./myPayment');
const myShoppingList = require('./myShoppingList');
const order = require('./order');
const pagedQueryResult = require('./pagedQueryResult');
const payment = require('./payment');
const product = require('./product');
const productSelections = require('./product-selections');
const productDiscount = require('./productDiscount');
const productProjection = require('./productProjection');
const productType = require('./productType');
const project = require('./project');
const review = require('./review');
const shippingMethod = require('./shippingMethod');
const shoppingList = require('./shoppingList');
const state = require('./state');
const store = require('./store');
const subscription = require('./subscription');
const taxCategory = require('./taxCategory');
const zone = require('./zone');

module.exports = {
  apiClient,
  baseTypes,
  cart,
  category,
  channel,
  common,
  customer,
  customerGroup,
  customObject,
  discountCode,
  extension,
  httpApi,
  inventory,
  message,
  myCustomer,
  myPayment,
  myShoppingList,
  order,
  pagedQueryResult,
  payment,
  product,
  productSelections,
  productDiscount,
  productProjection,
  productType,
  project,
  review,
  shippingMethod,
  shoppingList,
  state,
  store,
  subscription,
  taxCategory,
  zone
};
