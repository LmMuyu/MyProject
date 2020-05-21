import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import moment from "moment";
import "moment/locale/zh-cn";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.moment = moment;
Vue.prototype.$store = store;
moment.locale("zh-cn");

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
