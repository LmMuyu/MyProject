<template>
  <view>
    <!--导航栏-->
    <uni-nav-bar class="navbar" right-text="设置" title="我的" @openSetup="openSetup" />
    <!--用户信息-->
    <FileUserInfo
      @openPersonalSpace="openPersonalSpace"
      @click.native="openLogin"
      :userInfo="userInfo"
    />
    <!--用户状态详细信息-->
    <FilePostInfo :info="listpost" />
    <!--广告-->
    <FileBilling class="billing" />
    <!--功能区-->
    <FileFeatures @openFeatures="openFeatures" :features="features" />
  </view>
</template>

<script>
import uniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";

import FileUserInfo from "./childcomps/FileUserInfo";
import FilePostInfo from "./childcomps/FilePostInfo";
import FileFeatures from "./childcomps/FileFeatures";
import FileBilling from "./childcomps/FileBilling";

import { mapGetters } from "vuex";

export default {
  name: "file",
  components: {
    FileUserInfo,
    FilePostInfo,
    FileFeatures,
    FileBilling,
    uniNavBar
  },
  data() {
    return {
      listpost: [
        { name: "帖子", num: 0 },
        { name: "动态", num: 0 },
        { name: "评论", num: 0 },
        { name: "粉丝", num: 0 }
      ],
      token: "", //用户的token
      userInfo: {}, //登录者信息
      features: [
        {
          id: "tourrecord",
          name: "游览记录"
        }
      ] //功能
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  watch: {
    
  },
  created() {
    this.getToken();
    this.userInfo = this.getUserInfo;
  },
  mounted() {},
  methods: {
    //打开页面
    openPages(path) {
      setTimeout(() => {
        uni.redirectTo({
          url: path
        });
      }, 0);
    },
    //打开功能
    openFeatures(id) {
      switch (id) {
        case "tourrecord":
          this.openPages("../tourrecord/TourRecord");
          break;
        default:
          break;
      }
    },
    //更新用户信息
    updateUserInfo() {
      //没有登录不用更新
      if (!this.token) return;

      this.listpost[0].num = this.userInfo.post.length;
    },
    //获取token
    getToken() {
      uni.getStorage({
        key: "token",
        success: res => {
          this.token = res.data;
        }
      });
    },
    //打开编辑页
    openSetup() {
      uni.navigateTo({
        url: "../install/Install",
        animationType: "pop-in",
        animationDuration: 150
      });
    },
    //打开登录
    openLogin() {
      //以登陆不跳转登录页
      if (this.token) return;

      uni.navigateTo({
        url: "../login/login/login",
        animationType: "none",
        animationDuration: 200
      });
    },
    //打开个人空间
    openPersonalSpace(uid) {
      if (!this.token) return;

      uni.navigateTo({
        url: `../personalspace/PersonalSpace?id=${uid}`
      });
    }
  },
  onShow() {
    this.updateUserInfo();
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 32rpx 0 0 0;
  background: #ffffff;
}
.billing {
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 16rpx 0;
}
</style>