<template>
  <view>
    <image
      class="filter"
      :src="builImage"
    />
  </view>
</template>

<script>
export default {
  props: {
    builImage: String,
    default: () => ""
  }
};
</script>

<style lang="scss" scoped>
.filter {
  filter: blur(8px);
  width: 100%;
  height: 450rpx;
}
</style>