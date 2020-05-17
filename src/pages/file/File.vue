<template>
  <view>
    <!--导航栏-->
    <uni-nav-bar class="navbar" right-text="设置" title="我的" @openSetup="openSetup" />
    <!--用户信息-->
    <FileUserInfo />
    <!--用户帖子详细信息-->
    <FilePostInfo :info="listpost" />
    <!--广告-->
    <FileBilling class="billing" />
    <!--功能区-->
    <FileFeatures />
  </view>
</template>

<script>
import uniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";

import FileUserInfo from "./childcomps/FileUserInfo";
import FilePostInfo from "./childcomps/FilePostInfo";
import FileFeatures from "./childcomps/FileFeatures";
import FileBilling from "./childcomps/FileBilling";

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
      ]
    };
  },
  methods: {
    openSetup() {
      uni.navigateTo({
        url: "../install/Install",
        animationType: "pop-in",
        animationDuration: 150
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  margin-top: 32rpx;
}
.billing {
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 16rpx 0;
}
</style>