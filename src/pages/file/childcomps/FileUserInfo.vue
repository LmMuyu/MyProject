<template>
  <view class="flex">
    <image src="~static/img/file/user.svg" class="iamge" v-if="userAvatar" @click="openPersonalSpace" />
    <image :src="userInfo.avatar" class="iamge" v-else @click="openPersonalSpace" />
    <view class="text flex-1 ma-l">
      <text class="siae">{{userName}}</text>
      <text class="font-size">{{userRelease}}</text>
    </view>
    <view class="iconfont flex-ja-c">&#xe694;</view>
  </view>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    userName() {
      return this.userInfo.name ? this.userInfo.name : "点击登录";
    },
    userAvatar() {
      return this.userInfo.avatar ? false : true;
    },
    userRelease() {
      return this.userInfo.post ? `总贴子:${this.userInfo.post.length}` : "";
    }
  },
  methods: {
    //打开个人空间
    openPersonalSpace() {
      this.$emit("openPersonalSpace", this.userInfo.uid);
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  padding: 38rpx;
}
.iamge {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  border: 1rpx solid $uni-border-color;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.text > text:nth-last-child(1) {
  color: $uni-text-color-grey;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>