<template>
  <view>
    <!--导航栏-->
    <uni-nav-bar
      class="margin-top navbar"
      @clickLeft="backPage"
      left-icon="back"
      fixed
      left-text="返回"
      right-text="菜单"
    >
      <view slot="default">
        <!--搜索栏-->
        <uni-search-bar
          placeholder="搜索好友"
          class="searchbar"
          :radius="6"
          canctelButon="none"
        ></uni-search-bar>
      </view>
    </uni-nav-bar>
    <!--分割线-->
    <Dividing />
    <!--顶部tab切换-->
    <BuddyTab :tablist="tablist" ref="tabs" @tabIndex="tabIndex" />
    <!--滑屏-->
    <swiper :current="itemIndex" @change="change" class="swiper" :style="`height:${scrollH}`">
      <swiper-item v-for="(item, index) in tablist" :key="index">
        <scroll-view scroll-y :style="`height:${scrollH}`">
          <!--好友列表-->
          <BuddyPlateList />
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import uniSearchBar from "components/content/search/uni-search-bar/uni-search-bar";
import uniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";
import Dividing from "components/content/dividing/Dividing";

import BuddyPlateList from "./childcomps/BuddyPlateList";
import BuddyTab from "./childcomps/BuddyTab";

export default {
  components: {
    BuddyPlateList,
    uniSearchBar,
    uniNavBar,
    BuddyTab,
    Dividing
  },
  data() {
    return {
      itemIndex: 0,
      tablist: [
        { name: "互关", info: 15 },
        { name: "关注", info: 0 },
        { name: "粉丝", info: 1100 }
      ],
      scrollH: 0 + "px"
    };
  },
  created() {},
  methods: {
    //左右滑屏头部标签卡也切换位置
    change({ detail }) {
      this.$refs.tabs.activeindex = detail.current;
    },
    //点击头部标签栏滑屏位置也会变化
    tabIndex(i) {
      this.itemIndex = i;
    },
    queryElement() {
      const query = uni.createSelectorQuery().in(this);
      return new Promise(resolve => {
        query
          .select(".navbar")
          .boundingClientRect(({ height }) => {
            resolve(height);
          })
          .exec();
      });
    },
    //点击导航栏右边返回上一级页面
    backPage() {
      //隐藏软键盘
      uni.hideKeyboard();

      uni.navigateBack({
        delta: 1,
        animationType: "slide-out-left",
        animationDuration: 150
      });
    }
  },
  onReady() {
    uni.getSystemInfo({
      success: res => {
        this.scrollH = res.windowHeight - res.statusBarHeight - 100 + "px";
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.margin-top {
  padding-top: 32rpx;
}
.swiper {
  border: 1rpx solid black;
}
.navbar {
  background: #ffffff;
}
.searchbar {
  width: 100%;
}
</style>