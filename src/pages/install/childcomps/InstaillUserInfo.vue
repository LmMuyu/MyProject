<template>
  <view>
    <view class="flex-a-c p-tb-16">
      <text>头像</text>
      <view class="ma-left-au flex-a-c vimagee">
        <image :src="image" style="width:100rpx;height:100rpx" class="image" />
        <i class="iconfont icon" @click="modifyT">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>名称</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>好好好</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>性别</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>男</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>生日</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>2002-1-6</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>职业</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>IT</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>地址</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>河源市</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <veiw class="flex-1 flex-ja-c margin-top wanc">
      <text>完成</text>
    </veiw>
  </view>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4051190685,3300949277&fm=11&gp=0.jpg"
    };
  },
  methods: {
    //修改头像
    modifyT() {
      uni.chooseImage({
        count: 1,
        sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
        success: res => {
          this.image = res.tempFilePaths[0];
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 48rpx;
  font-style: normal;
  color: #dbdbdb;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.flexbox {
  display: flex;
}
.image {
  border-radius: $uni-border-radius-circle;
}
.icon {
  padding: 0 32rpx;
}
text {
  color: $uni-text-color-grey;
  font-size: $uni-font-size-lg;
}
.wanc {
  padding: 20rpx;
  background: #3498db;
  margin: 0 32rpx;
  border-radius: $uni-border-radius-lg;
}
</style>