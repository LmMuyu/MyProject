<template>
  <view class="community">
    <!--头部分类栏-->
    <CommunityHeadText
      class="HeadText"
      :classification="classification"
      @onIndex="onIndex"
      ref="CommunityHeadText"
    />
    <swiper :style="`height:${height}`" class="swiperIs" :current="index" @change="change">
      <!--话题-->
      <swiper-item class="swiperitem">
        <!--热门分类-->
        <CommunityTopCategories class="topcategories" :category="category" />
        <!-- 搜索栏 -->
        <CommunitySearchBar class="searchbar" />
        <!--轮播图-->
        <CommunitySwiper :swiper="swiper" />
        <!--最近更新-->
        <view>
          <span class="zuijing">最近更新</span>
        </view>
        <CommunityTopicShow @toDateil="toDateil" :updated="updated" />
      </swiper-item>

      <!--关注-->
      <swiper-item class="swiperitem">
        <view>
          <CommunityPostShow :data="this.classification[0].data" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import Dividing from "components/content/dividing/Dividing";

import CommunityTopCategories from "./childcomps/CommunityTopCategories";
import CommunityHeadText from "./childcomps/CommunityHeadText.vue";
import CommunitySearchBar from "./childcomps/CommunitySearchBar";
import CommunityTopicShow from "./childcomps/CommunityTopicShow";
import CommunityPostShow from "./childcomps/CommunityPostShow";
import CommunitySwiper from "./childcomps/CommunitySwiper";

import { communityplate } from "@/utils/community";

export default {
  name: "Community",
  components: {
    CommunityTopCategories,
    CommunityTopicShow,
    CommunitySearchBar,
    CommunityPostShow,
    CommunityHeadText,
    CommunitySwiper,
    Dividing
  },
  data() {
    return {
      classification: [
        {
          name: "话题",
          plate: "topic",
          data: []
        },
        {
          name: "关注",
          data: []
        }
      ],
      height: 0,
      index: 0,
      swiper: [],
      updated: [],
      category: [
        { name: "关注" },
        { name: "推荐" },
        { name: "体育" },
        { name: "热点" },
        { name: "财经" },
        { name: "娱乐" }
      ]
    };
  },
  created() {
    this.communityplate();
  },
  mounted() {
    //获取视高
    this.systemMessage();
  },
  methods: {
    //获取视高
    systemMessage() {
      //获取系统信息
      uni.getSystemInfo({
        success: res => {
          //查询节点信息的对象
          const query = uni.createSelectorQuery().in(this);
          query
            .select(".HeadText")
            .boundingClientRect(data => {
              this.height = res.windowHeight - data.height + "px";
            })
            .exec();
        }
      });
    },
    //左右滑屏切换头部分类栏也一起切换
    change({ detail }) {
      this.$refs.CommunityHeadText.textindex = detail.current;
    },
    //头部分类栏切换滑屏也跟着切换
    onIndex(i) {
      this.index = i;
    },
    //跳转详情页
    toDateil(pid) {
      uni.navigateTo({
        url: `../dateil/Dateil?pid=${pid}`,
        animationType: "slide-in-bottom",
        animationDuration: 200
      });
    },
    communityplate(index = 0) {
      let { plate } = this.classification[index];
      let option = {
        option: "/community",
        data: {
          plate
        }
      };

      let swiper = {
        option: "/community",
        data: {
          plate: "swiper"
        }
      };

      communityplate(option, swiper)
        .then(([plate, swiper]) => {
          //轮播图数据
          let { swiperData } = swiper;
          this.swiper = swiperData;

          //话题
          let { list } = plate;

          this.updated = list;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.HeadText {
  background: #ffffff;
}
.swiperIs {
  margin: 0 20rpx;
}
.topcategories {
  box-shadow: -1rpx 0 1rpx $uni-bg-color-mask;
}
.searchbar {
  margin-top: 15rpx;
}
.zuijing {
  position: relative;
  top: 16rpx;
  font-size: 32rpx;
}
.swiperitem {
  overflow-y: scroll;
}
</style>
