import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

App.mpType = "app";

// import {FastClick} from "fastclick"
// const FastClick = require("fastclick");
// FastClick.attach(document.body);

const app = new Vue({
  ...App,
  store,
  router,
});
app.$mount();
