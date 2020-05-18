<template>
  <view class="flex-ja-c tba">
    <view
      class="flex-ja-c"
      :class="{active:activeindex===index}"
      v-for="(item, index) in tablist"
      :key="index"
      @click="tabIndex(index)"
    >{{item.name}}</view>
  </view>
</template>

<script>
export default {
  props: {
    tablist: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeindex: 0
    };
  },
  methods: {
    tabIndex(i) {
      this.activeindex = i;
      this.$emit("tabIndex", i);
    }
  }
};
</script>

<style lang="scss" scoped>
.tba {
  padding: 16rpx 0;
}
.tba > view {
  flex: 1;
  font-size: 32rpx;
}

.active {
  font-size: 38rpx !important;
  color: $uni-color-error;
}
</style>