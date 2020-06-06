<template>
  <view class="flex">
    <view
      v-for="(item, index) in info"
      :key="index"
      :class="{active:index === isIndex}"
      @click="switchTab(index)"
    >
      <text class="size">{{item.name}}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isIndex: 0,
      info: [
        {
          name: "主页"
        },
        {
          name: "帖子",
          spacetab: "post"
        },
        {
          name: "收藏"
        }
      ]
    };
  },
  methods: {
    //切换tab标签栏
    switchTab(i) {
      if (this.isIndex === i) return;

      this.isIndex = i;
      let { spacetab } = this.info[i];

      this.$emit("switchTab", {
        i,
        spacetab
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: space-around;
  background: $uni-bg-color-grey;
  padding: 20rpx;
  align-items: center;
}
.active {
  color: #ff7675;
}
</style>