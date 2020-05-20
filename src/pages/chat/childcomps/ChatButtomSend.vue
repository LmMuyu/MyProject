<template>
  <view class="flex-a-c full-width" :style="`margin-bottom:${Keyboard}`">
    <input class="flex-1 input font-size" v-model="text" @click="onKeyHeight" confirm-hold />
    <view class="class-name">
      <i class="iconfont">&#xe604;</i>
      <text class="text" @click="Send">发送</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      Keyboard: 0 + "px",
      text: ""
    };
  },
  methods: {
    onKeyHeight() {
      uni.onKeyboardHeightChange(res => {
        this.Keyboard = res.height + "px";
      });
    },
    Send() {
      //收起软键盘
      uni.hideKeyboard();

      if (!this.text) {
        return false;
      }

      this.$bus.$emit("Send", this.text); //src\pages\chat\Chat.vue
      //清空信息
      this.text = "";
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
.full-width {
  width: 100%;
  padding: 16rpx 0;
  background: #f1f2f6;
  box-shadow: 1rpx 0 1rpx $uni-border-color;
}
.input {
  border: 1rpx solid $uni-border-color;
  padding: 16rpx;
}
.class-name {
  padding: 0 20rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  font-size: $uni-font-size-sm;
}
</style>