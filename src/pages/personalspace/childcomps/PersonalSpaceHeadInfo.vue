<template>
  <view class="flex">
    <view>
      <image
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"
        mode="aspectFill"
      />
    </view>
    <view class="textis">
      <view class="viewis">
        <view class="viewtext" v-for="(item, index) in info" :key="index">
          <text>{{item.num}}</text>
          <text>{{item.features}}</text>
        </view>
      </view>
      <view class="guaz flex-ja-c size">
        <text>关注</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          features: "获赞",
          num: 10
        },
        {
          features: "关注",
          num: 10
        },
        {
          features: "粉丝",
          num: 10
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
image {
  width: 130rpx;
  height: 130rpx;
  border-radius: 50%;
}
.flex {
  display: flex;
  padding: 20rpx;
}
.textis {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20rpx;
}
.viewis {
  display: flex;
  flex-direction: row;
}
.viewtext {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.guaz {
  width: 200rpx;
  border-radius: 6rpx;
  padding: 18rpx;
  width: 100%;
  background: #ff7675;
  word-wrap: 10rpx;
  margin-top: 20rpx;
}
</style>