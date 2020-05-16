<template>
  <view class="communityTopCategories">
    <view class="flex-ja-c hljs-class">
      <view class="lefttext">热门分类</view>
      <view class="iconfont mdi-gender-male">
        更多
        <i>&#xe694;</i>
      </view>
    </view>
    <view class="flex">
      <view v-for="(item, index) in category" :key="index">{{item.name}}</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "communityTopCategories",
  props: {
    category: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.mdi-gender-male {
  margin-left: auto;
  font-size: $uni-font-size-base;
  color: $uni-text-color-placeholder;
}
.hljs-class {
  padding: 16rpx;
}
.lefttext {
  font-size: $uni-font-size-lg;
  color: $uni-text-color;
}
.flex {
  display: flex;
  font-size: $uni-font-size-base;
  justify-content: space-around;
}
.flex > view {
  background-color: $uni-bg-color-hover;
  padding: $uni-spacing-row-sm $uni-spacing-row-base;
  border-radius: $uni-border-radius-base;
}
.communityTopCategories{
  padding-bottom: $uni-spacing-col-lg;
}
</style>