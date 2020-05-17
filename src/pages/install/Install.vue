<template>
  <view class="install">
    <view class="pa-tb-2 text">账户与安全</view>
    <uni-list>
      <uni-list-item v-for="(item, index) in liisttext" :key="index" :title="item.name"></uni-list-item>
    </uni-list>
    <view class="flex-ja-c color mar size">退出登录</view>
  </view>
</template>

<script>
import uniListItem from "components/content/list/uni-list-item/uni-list-item";
import uniList from "components/content/list/uni-list/uni-list";

export default {
  components: { uniList, uniListItem },
  data() {
    return {
      liisttext: [
        { name: "资料编辑" },
        { name: "清除缓存" },
        { name: "意见反馈" },
        { name: "关于社区" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.color {
  background: $uni-color-error;
  border-radius: $uni-border-radius-lg;
  padding: 20rpx 0;
  color: $uni-text-color;
}

.text {
  font-size: 38rpx;
}
</style>