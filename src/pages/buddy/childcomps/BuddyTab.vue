<template>
  <view class="flex-ja-c tba">
    <view
      class="flex-ja-c"
      :class="{active:activeindex===index}"
      v-for="(item, index) in tablist"
      :key="index"
      @click="tabIndex(index)"
    >{{item.name}} {{item.info | numGulu}}</view>
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
  filters:{
    numGulu(vlaue){
      let num = Number(vlaue)

      if (num === 0) {
        return ""
      }else if(num>=99){
        return 99+"+"
      }else{
        return num
      }
    }
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
  box-shadow: -1rpx 0 1rpx $uni-border-color;
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