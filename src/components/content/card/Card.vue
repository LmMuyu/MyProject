<template>
  <view>
    <view class="cu-list menu-avatar">
      <view class="cu-item">
        <image class="cu-avatar round lg class" :src="info.avatar" />
        <view class="content flex-sub">
          <view>{{info.name}}</view>
          <view class="text-gray text-sm flex justify-between">2019年12月3日</view>
        </view>
      </view>
    </view>
    <view class="text-content col-1" @click="openPostDateil">{{info.content}}</view>
    <view class="grid flex-sub padding-lr only-img imageshow">
      <image
        @click="openPostDateil"
        v-for="(item, index) in info.contentimage"
        :key="index"
        class="bg-img"
        :src="item"
        mode="aspectFill"
      />
    </view>
    <view class="text-gray text-sm text-right padding">
      <text class="text cuIcon-attentionfill margin-lr-xs">{{info.like | filter}}</text>
      <text class="text cuIcon-appreciatefill margin-lr-xs">{{info.kan | filter}}</text>
      <text class="text cuIcon-messagefill margin-lr-xs">{{info.comment | filter}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    postData: {
      type: Object,
      default: () => {}
    }
  },
  filters: {
    filter(values) {
      let value = values * 1;

      if (value === 0) {
        return "";
      } else if (value >= 99) {
        return "99+";
      } else {
        return value;
      }
    }
  },
  data() {
    return {
      info: this.postData
    };
  },
  methods: {
    //打开帖子详细
    openPostDateil() {
      console.log("111");
      
      this.$emit("openPostDateil", this.info.postId);
    }
  }
};
</script>

<style lang="scss" scoped>
.class {
  width: 75rpx;
  height: 75rpx;
}
.text {
  font-size: 32rpx !important;
}
.padding > text {
  padding: 12rpx;
}
.imageshow>image{
  width: 300rpx;
  
}
</style>