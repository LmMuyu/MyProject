<template>
  <view class="flex">
    <view>
      <image
        src="http://img5.imgtn.bdimg.com/it/u=2495532804,4272035673&fm=26&gp=0.jpg"
        mode="aspectFill"
        lazy-load
      />
    </view>

    <view class="content">
      <view class="viewflex">
        <text class="size">名称</text>
        <text class="font-size ma-left-au" style="color:#c0c0c0">2020-20-1</text>
      </view>
      <view class="viewflex text-view">
        <text class="font-size text-black">jdjawjdjawjdjajdaj道加瓦蒂阿我i大家我嗲文件到五级到达我降维打击的wj</text>
        <span>
          <uniBadge size="small" type="success" text="15" />
        </span>
      </view>
    </view>
  </view>
</template>

<script>
import uniBadge from "components/content/uni-badge/uni-badge";

export default {
  components: {
    uniBadge
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  padding: 20rpx;
  border-bottom: 1rpx solid $uni-border-color;
}
image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 20rpx;
}
.viewflex {
  display: flex;
  justify-content: space-between;
}
.text-view {
  display: flex;
  align-items: center;
}
.text-black {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500rpx;
}
</style>