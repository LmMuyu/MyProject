<template>
  <view id="home">
    <!-- start header -->
    <header>
      <WucTab :tab-list="tabList" tab-class="text-class" :tabCur.sync="TabCur" @change="tabChange"></WucTab>
    </header>
    <!-- end header -->
    <HomePostShow />
  </view>
</template>

<script>
/**
 * 公共组件
 * */
import WucTab from "components/wuc-tab/wuc-tab.vue";

import HomePostShow from "./childcomps/HomePostShow";

export default {
  name: "home",
  components: {
    HomePostShow,
    WucTab
  },
  data() {
    return {
      TabCur: 0,
      tabList: [{ name: "精选" }, { name: "订阅" }]
    };
  },
  created() {},
  methods: {
    tabChange(index) {
      this.TabCur = index;
    }
  },
  //停止下拉刷新
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function() {
      uni.stopPullDownRefresh();
    }, 1000);
  }
};
</script>

<style scoped>
.text-class {
  background: #f1f2f6;
}
</style>
