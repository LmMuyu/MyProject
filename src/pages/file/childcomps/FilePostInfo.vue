<template>
  <view class="flex-f">
    <view class="flex flex-1" v-for="(item, index) in info" :key="index">
      <text>{{item.num}}</text>
      <text class="siae">{{item.name}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex-f {
  display: flex;
  padding: 8rpx;
  align-items: center;
}
</style>