<template>
  <view class="dateil">
    <!--导航栏-->
    <uniNavBar left-icon="back" class="heahnav" left-text="返回" title="详情" />
    <!--模糊照片-->
    <DateilHeadimg/>
  </view>
</template>

<script>
import uniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";

import DateilHeadimg from "./childcomps/DateilHeadimg";

export default {
  name: "Dateil",
  components: {
    DateilHeadimg,
    uniNavBar
  }
};
</script>

<style lang="scss" scoped>
.heahnav {
  position: relative;
  top: 32rpx;
}
</style>