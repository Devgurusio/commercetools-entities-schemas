const apiClient = require("./apiClient");
const baseTypes = require("./baseTypes");
const category = require("./category");
const channel = require("./channel");
const common = require("./common");
const customer = require("./customer");
const customerGroup = require("./customerGroup");
const customObject = require("./customObject");
const extension = require("./extension");
const httpApi = require("./httpApi");
const inventory = require("./inventory");
const myCustomer = require("./myCustomer");
const myPayment = require("./myPayment");
const myShoppingList = require("./myShoppingList");
const payment = require("./payment");
const product = require("./product");
const productType = require("./productType");
const project = require("./project");
const review = require("./review");
const shoppingList = require("./shoppingList");
const state = require("./state");
const store = require("./store");
const subscription = require("./subscription");
const taxCategory = require("./taxCategory");
const zone = require("./zone");

module.exports = {
  apiClient,
  baseTypes,
  category,
  channel,
  common,
  customer,
  customerGroup,
  customObject,
  extension,
  httpApi,
  inventory,
  myCustomer,
  myPayment,
  myShoppingList,
  payment,
  product,
  productType,
  project,
  review,
  shoppingList,
  state,
  store,
  subscription,
  taxCategory,
  zone
};
