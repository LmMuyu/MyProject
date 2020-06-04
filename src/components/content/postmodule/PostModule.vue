<template>
  <view class="ispostmodule">
    <view class="postmodule">
      <view @click="openSpace">
        <image :src="Info.avatar" class="img-to" />
      </view>
      <view class="xinxi" @click="openSpace">
        <view>{{ Info.name }}</view>
        <view>{{ Info.date | timestamp }}</view>
      </view>
      <view class="guanzhu">
        <span
          @click="opentTion"
          class="animate__animated animate__backInLeft"
          :style="{ background: attention ? '#55efc4' : '#70a1ff' }"
        >{{ attention ? '已关注' : '关注' }}</span>
      </view>
    </view>
    <!--内容文字-->
    <view class="font" @click="openPostDetail">
      <text class="text">{{ Info.content }}</text>
    </view>
    <!--内容图片-->
    <view class="content" @click="openPostDetail">
      <image
        v-for="(item, index) in Info.contentimage"
        :key="index"
        :src="item"
        lazy-load
        mode="aspectFill"
      />
    </view>
    <view class="gong-neng">
      <view class="iconfont" :class="{active:dinaz}" @click="point">
        &#xe654;
        <text class="gong_text">{{Info.like | numFliter}}</text>
      </view>
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
      Info: this.dataInfo,
      dinaz: false
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
    },
    //数字过虑
    numFliter(val) {
      let num = Number(val);
      return num === 0 ? "" : num >= 99 ? `${num}+` : num;
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
      this.$emit("openPostDetail", this.Info.postId);
    },
    //点赞
    point() {
      this.dinaz = this.dinaz ? false : true;
      this.$bus.$emit("point", {
        info: this.Info,
        dinaz: this.dinaz
      });
    }
  }
};
</script>

<style lang="scss" scoped>
image {
  width: 200rpx;
  height: 300rpx;
  margin: 0 8rpx;
}
.gong_text {
  font-size: 28rpx;
}
.active {
  color: #3498db;
}
.ispostmodule {
  border-bottom: 1rpx solid $uni-border-color;
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
  margin-right: 24rpx;
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
.content > image {
  border-radius: 6rpx;
  height: 300rpx;
  padding-bottom: 6rpx;
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
.font {
  padding: 8rpx 0;
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
</style>
