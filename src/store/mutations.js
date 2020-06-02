export default {
  login(state, userName) {
    state.userName = userName || "新用户";
    state.hasLogin = true;
  },
  logout(state) {
    state.userName = "";
    state.hasLogin = false;
  },
  //登录成功信息
  logininfo(state, { userinfo, token }) {
    state.userInfo = { ...userinfo };
    state.token = token;
  },
  //退出登录
  deleteLogin(state) {
    //清除用户信息
    state.userInfo = {};
  },
};
