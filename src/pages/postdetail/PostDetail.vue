<template>
  <view>
    <!--导航栏-->
    <uni-nav-bar class="navbar" left-icon="back" left-text="返回" right-text="菜单" title="详情页" />
    <!--头部作者信息-->
    <DetailHeadInfo />
  </view>
</template>

<script>
import uniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";

import DetailHeadInfo from "./childcomps/DetailHeadInfo";

export default {
  components: {
    DetailHeadInfo,
    uniNavBar
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20rpx 0 0 0;
}
</style>