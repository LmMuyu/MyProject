<template>
  <view class="pa-tb-2">
    <view
      class="flex border-b padding"
      v-for="item in features"
      :key="item.id"
      @click="openFeatures(item.id)"
    >
      <i class="iconfont">&#xe65e;</i>
      <text class="flex-1 size ma-l">{{item.name}}</text>
      <i class="iconfont">&#xe694;</i>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openFeatures(id) {
      this.$emit("openFeatures", id);
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
.flex {
  display: flex;
  align-items: center;
}
.padding {
  padding: 28rpx 0;
}
</style>