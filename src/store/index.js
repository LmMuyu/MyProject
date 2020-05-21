import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

const state = {
  name: "123",
  /**
   * 是否需要强制登录
   */
  forcedLogin: false,
  hasLogin: false,
  userName: "",
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {},
});

export default store;
