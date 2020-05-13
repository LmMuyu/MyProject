<template>
  <view class="ispostmodule">
    <view class="postmodule">
      <view @click="openSpace">
        <image src="static/img/tabbar/home.png" class="img-to" />
      </view>
      <view class="xinxi" @click="openSpace">
        <view>名称</view>
        <view>2002-1.-4555</view>
      </view>
      <view class="guanzhu">
        <span
          @click="opentTion"
          class="animate__animated animate__backInLeft"
          :style="{'background':attention? '#55efc4':'#70a1ff'} "
        >{{attention ? "已关注":"关注"}}</span>
      </view>
    </view>
    <view class="content">
      <span class="text">123456789ldlalwdlalwdlawd</span>
      <img
        src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg"
        alt
      />
    </view>
    <view class="gong-neng">
      <view class="iconfont">&#xe654;</view>
      <view class="iconfont">&#xe65e;</view>
      <view class="iconfont">&#xe62f;</view>
      <view class="iconfont">&#xe740;</view>
    </view>
  </view>
</template>

<script>
export default {
  name: "PostModule",
  props: {
    dataInfo: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      attention: false,
      Info: this.dataInfos
    };
  },
  methods: {
    openSpace() {},
    opentTion() {
      this.attention = this.attention === false ? true : false;
    }
  }
};
</script>

<style scoped>
.ispostmodule {
  border-bottom: 1rpx solid #dcdde1;
}
.img-to {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  background: red;
}
.postmodule {
  display: flex;
  margin-top: 10rpx;
}
.xinxi {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10rpx;
}
.xinxi > view:nth-child(1) {
  font-weight: bold;
  font-size: 32rpx;
}

.xinxi > view:nth-child(2) {
  font-size: 30rpx;
}
.guanzhu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.guanzhu > span {
  margin-right: 24rpx;
  color: #ffffff;
  padding: 6rpx 8rpx;
  border-radius: 6rpx;
  font-size: 32rpx;
}
.content img {
  width: 100%;
  border-radius: 6rpx;
  height: 300rpx;
}
.gong-neng {
  height: 48rpx;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.gong-neng > view {
  margin-right: 32rpx;
}
.text {
  font-size: 32rpx;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4rpx;
  -moz-osx-font-smoothing: grayscale;
}
</style>
