<template>
  <view class="install">
    <uni-list>
      <uni-list-item
        v-for="(item, index) in liisttext"
        :key="index"
        :title="item.name"
        @click="open(index)"
      />
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
        { name: "账户与安全" },
        { name: "资料编辑" },
        { name: "绑定邮箱" },
        { name: "清除缓存" },
        { name: "意见反馈" },
        { name: "关于社区" }
      ]
    };
  },
  methods: {
    //封装页面跳转
    pageto(path) {
      uni.navigateTo({
        url: path,
        animationType: "none"
      });
    },
    open(i) {
      switch (i) {
        case 0:
          this.pageto("./childcomps/InstallPassword");
          break;
        case 1:
          this.pageto("./childcomps/InstaillUserInfo");
          break;
        case 2:
          this.pageto("./childcomps/InstaillMailbox");
          break;

        default:
          break;
      }
    }
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
</style>