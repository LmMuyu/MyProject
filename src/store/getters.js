export default {
  //获取登录者信息
  getUserInfo(state) {
    return state.userInfo;
  },
  //获取帖子数据
  getPostData(state) {
    return state.releasePost;
  },
};
