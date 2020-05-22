<template>
  <view class="flex" :style="keyPosition">
    <input
      @confirm="confirm"
      @click="keyChange"
      class="flex-1 font-size"
      v-model="comtent"
      :adjust-position="false"
      placeholder="不要害羞啊~~~~~"
    />
    <i class="iconfont class_name flex-ja-c">&#xe604;</i>
  </view>
</template>

<script>
export default {
  data() {
    return {
      comtent: "",
      keyPosition: {}
    };
  },
  methods: {
    //收起软键盘
    confirm() {
      uni.hideKeyboard();

      this.comtent = "";
    },
    //键盘高度发生变化
    keyChange() {
      uni.onKeyboardHeightChange(({ height }) => {
        this.keyPosition = {
          position: "absolute",
          left: 0,
          bottom: height+"px"
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 64rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80rpx;
}
input {
  border-radius: 8rpx;
  background: rgb(245, 245, 245);
  color: $uni-text-color-disable;
  padding: 6rpx;
}
.class_name {
  width: 100rpx;
}
</style>