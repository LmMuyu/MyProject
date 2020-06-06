<template>
  <view class="imageshow flex">
    <view v-for="(item, index) in imagelist" :key="index" class="flex imageshowis">
      <image class="image" :src="item" mode="aspectFill" />
      <view class="iconfont position" @click="deleteImage(index)">&#xe6be;</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ReleasePageImageShow",
  props: {
    imagelist: {
      type: Array,
      default: () => []
    }
  },
  mounted() {},
  methods: {
    //删除照片
    deleteImage(i) {
      this.$bus.$emit("deleteImage", i);
    }
  }
};
</script>

<style lang="scss" scoped>
.imageshowis {
  position: relative;
}
.imageshow {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.image {
  width: 220rpx;
  max-height: 250rpx;
	margin-bottom: 16rpx;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 38rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4rpx;
  -moz-osx-font-smoothing: grayscale;
}
.position {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
