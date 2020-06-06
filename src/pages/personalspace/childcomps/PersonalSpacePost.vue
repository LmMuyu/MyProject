<template>
  <view class="cu-card dynamic" :class="isCard?'no-card':''">
    <view class="cu-item shadow">
      <view class="cu-list menu-avatar">
        <view class="cu-item">
          <view class="cu-avatar ve_active round lg">
            <image class="image" :src="dataInfo.avatar" mode="aspectFill" />
          </view>
          <view class="content flex-sub">
            <view>{{dataInfo.name}}</view>
            <view class="text-gray text-sm flex justify-between">2019年12月3日</view>
          </view>
        </view>
      </view>
      <view class="text-content">{{dataInfo.content}}</view>
      <view class="grid flex-sub padding-lr flex_baseline" :class="isCard?'col-3 grid-square':'col-1'">
        <image
          :src="item"
          class="bg-img article"
          v-for="(item,index) in dataInfo.contentimage"
          :key="index"
        />
      </view>
      <view class="text-gray text-sm text-right padding">
        <text class="cuIcon-attentionfill margin-lr-xs text">{{dataInfo.like}}</text>
        <text class="cuIcon-appreciatefill margin-lr-xs text">{{dataInfo.kan}}</text>
        <text class="cuIcon-messagefill margin-lr-xs text">{{dataInfo.comment}}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isCard: false
    };
  },
  props: {
    dataInfo: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.flex_baseline{
  display: flex;
  flex-wrap: wrap;
}
.text {
  font-size: 28rpx;
}
.image {
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
}
.ve_active {
  background: #ffffff;
}
.article {
  width: 200rpx;
  height: 280rpx;
  padding: 0 10rpx;
}
</style>