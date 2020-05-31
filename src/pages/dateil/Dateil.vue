<template>
  <view class="dateil">
    <!--模糊照片-->
    <DateilHeadimg class="headimg" :builImage="communiftInfo.topicImage" />
    <!--展示-->
    <DateilShow class="dateilshow" :communiftInfo="communiftInfo" />
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

import { detailReqPost } from "@/utils/detail";

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
      tabindex: 0,
      pid: "", //id
      communiftInfo: {} //展示的信息
    };
  },
  computed: {
    indextab() {
      return this.tablist[this.tabindex].list;
    }
  },
  mounted() {},
  methods: {
    //点击标签栏切换数据
    tabIndex(i) {
      this.tabindex = i;
    },
    //下拉刷新
    pullDownRefresh() {
      setTimeout(() => {
        //停止下拉刷新
        uni.stopPullDownRefresh();
      }, 2000);
    },
    //上拉加载
    upLoading() {},
    //数据请求
    detailReqPost() {
      let option = {
        option: "/community/postdata",
        data: {
          pid: this.pid
        }
      };

      detailReqPost(option)
        .then(({ data }) => {
          let { topicInfo, topicPost } = data;
          this.communiftInfo = topicInfo;
          this.tablist[this.tabindex].list = topicPost;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  onLoad: function(option) {
    //从url获取帖子id
    this.pid = option.pid;

    //数据请求
    this.detailReqPost();
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