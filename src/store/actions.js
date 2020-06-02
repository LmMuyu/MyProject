export default {
  //退出登录
  delLog(context) {
    return new Promise((resolve) => {
      context.commit("deleteLogin");
      resolve("true");
    });
  },
};
