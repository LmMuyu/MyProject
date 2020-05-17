<template>
  <view class="dateil">
    <!--模糊照片-->
    <DateilHeadimg class="headimg" />
    <!--展示-->
    <DateilShow class="dateilshow" />
    <!--分割线-->
    <Dividing class="dividing" />
    <!--精华话题列表-->
    <DateilEssenceList class="essencelist" />
    <!--分割线-->
    <Dividing class="dividing" />
    <!--tab-->
    <DateilTab :tablist="tablist" class="dateiltab" @tabIndex="tabIndex" />

    <!--start 话题列表-->
    <!--有数据显示-->
    <template v-if="!indextab.length == 0">
      <DateilPostshow :list="indextab" />
    </template>

    <!--没有数据显示-->
    <template v-else>
      <DateilNullData />
    </template>
    <!--end 话题列表-->
  </view>
</template>

<script>
import Dividing from "components/content/dividing/Dividing";

import DateilEssenceList from "./childcomps/DateilEssenceList";
import DateilPostshow from "./childcomps/DateilPostshow";
import DateilNullData from "./childcomps/DateilNullData";
import DateilHeadimg from "./childcomps/DateilHeadimg";
import DateilShow from "./childcomps/DateilShow";
import DateilTab from "./childcomps/DateilTab";

export default {
  name: "Dateil",
  components: {
    DateilEssenceList,
    DateilNullData,
    DateilPostshow,
    DateilHeadimg,
    DateilShow,
    DateilTab,
    Dividing
  },
  data() {
    return {
      tablist: [
        {
          name: "默认",
          list: []
        },
        {
          name: "最新",
          list: []
        }
      ],
      tabindex: 0
    };
  },
  computed: {
    indextab() {
      return this.tablist[this.tabindex].list;
    }
  },
  mounted() {
    this.tablist[0].list = [
      {
        uid: "88031114",
        id: "28878862",
        name: "金艳",
        date: Date.now(),
        avatar:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1925436222,738093984&fm=11&gp=0.jpg",
        content: "做机青以度利管性六使日花共利效。"
      },
      {
        uid: "880311147",
        id: "278862",
        name: "金艳",
        date: Date.now(),
        avatar:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1429545346,263808094&fm=11&gp=0.jpg",
        content: "做机青以度利管性六使日花共利效。"
      }
    ];
  },
  methods: {
    //点击标签栏切换数据
    tabIndex(i) {
      this.tabindex = i;
    },
    pullDownRefresh() {
      setTimeout(() => {
        this.tablist[this.tabindex].list.unshift({
          uid: "8803111",
          id: "278862s",
          name: "接待降低为",
          date: Date.now(),
          avatar:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1446822921,1259025579&fm=26&gp=0.jpg",
          content: "做机青以度利管性六使日花共利效。"
        });

        //停止下拉刷新
        uni.stopPullDownRefresh();
      }, 2000);
    },
    upLoading() {
      this.tablist[this.tabindex].list.push({
        uid: "8803111",
        id: "278862s",
        name: "接待降低为",
        date: Date.now(),
        avatar:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1446822921,1259025579&fm=26&gp=0.jpg",
        content: "做机青以度利管性六使日花共利效。"
      });
    }
  },
  onPullDownRefresh() {
    //下拉刷新
    this.pullDownRefresh();
  },
  //页面滚动到底部的触发事件
  onReachBottom() {
    //上拉加载
    this.upLoading();
  }
};
</script>

<style lang="scss" scoped>
.headimg {
  position: relative;
  z-index: -1;
}
.dateilshow {
  margin-left: $uni-spacing-row-base;
  position: relative;
  z-index: 1;
  background: #ffffff;
}
.essencelist {
  background: #ffffff;
}
.dividing {
  background: $uni-bg-color-grey;
}
.dateiltab {
  background: #ffffff;
}
</style>