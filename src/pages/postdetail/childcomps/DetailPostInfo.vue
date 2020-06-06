<template>
  <view class="ispostmodule">
    <view class="postmodule">
      <view @click="openSpace">
        <image mode="aspectFill" :src="dataInfo.avatar" class="img-to" />
      </view>
      <view class="xinxi" @click="openSpace">
        <view>{{dataInfo.name}}</view>
        <view>200202</view>
      </view>
      <view class="guanzhu">
        <span
          @click="opentTion"
          class="animate__animated animate__backInLeft"
          :style="{ background: attention ? '#55efc4' : '#70a1ff' }"
        >{{ attention ? '已关注' : '关注' }}</span>
      </view>
    </view>
    <view class="texts">
      <span class="text">{{dataInfo.content}}</span>
    </view>
    <view class="content" @click="openPostDetail">
      <image
        v-for="(item, index) in dataInfo.contentimage"
        :key="index"
        mode="widthFix"
        :src="item"
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
import moment from "moment";

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
      Info: this.dataInfo
    };
  },
  filters: {
    timestamp(val) {
      let date = Date.now();
      let releaseTime = moment(Number(val))
        .format("YYYY-MM-DD")
        .split("-");
      let currentTime = moment(Number(date)).format("YYYY-MM-DD");
      return moment(releaseTime).from(currentTime);
    }
  },
  mounted() {},
  methods: {
    openSpace() {},
    //关注
    opentTion() {
      this.attention = this.attention === false ? true : false;
    },
    //打开帖子详情页
    openPostDetail() {
      this.$emit("openPostDetail");
    }
  }
};
</script>

<style lang="scss" scoped>
.ispostmodule {
  border-bottom: 1rpx solid $uni-border-color;
  padding: 8rpx;
  margin-bottom: 20rpx;
}
.img-to {
  width: 70rpx;
  height: 70rpx;
  border-radius: 50%;
  background-color: $uni-bg-color-mask;
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
  font-size: $uni-font-size-lg;
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
  margin-right: 16rpx;
  color: #ffffff;
  padding: 6rpx 8rpx;
  border-radius: 6rpx;
  font-size: $uni-font-size-lg;
}
.content {
  margin-top: 15rpx;
  display: flex;
  flex-wrap: wrap;
}
.content image {
  border-radius: 6rpx;
  padding: 16rpx 0;
}
.gong-neng {
  height: 75rpx;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.gong-neng > view {
  margin-right: 50rpx;
}
.text {
  font-size: $uni-font-size-base;
  color: $uni-text-color;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 38rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.4rpx;
  -moz-osx-font-smoothing: grayscale;
}
.texts {
  padding: 8rpx 0;
}
</style>
