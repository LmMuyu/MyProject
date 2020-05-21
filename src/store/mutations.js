export default {
  login(state, userName) {
    state.userName = userName || '新用户';
    state.hasLogin = true;
  },
  logout(state) {
    state.userName = "";
    state.hasLogin = false;
  }
};
