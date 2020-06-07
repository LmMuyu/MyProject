import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
import moment from "moment";
import "moment/locale/zh-cn";
import io from "./common/weapp.socket.io";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.prototype.socket = io("http://192.168.43.31:4000");
Vue.prototype.moment = moment;
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
