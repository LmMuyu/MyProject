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
      <!--关注-->
      <swiper-item>
        <view>
          <CommunityPostShow :data="this.classification[0].data" />
        </view>
      </swiper-item>
      <!--社区-->
      <swiper-item>
        <!--热门分类-->
        <CommunityTopCategories class="topcategories" :category="category" />
        <!-- 搜索栏 -->
        <CommunitySearchBar class="searchbar" />
        <Dividing />
        <!--轮播图-->
        <swiper indicator-dots autoplay :interval="2500" :duration="300" style="height:350rpx">
          <swiper-item v-for="(item, index) in swiper" :key="index">
            <image style="width:100%" mode="aspectFill" :src="item" />
          </swiper-item>
        </swiper>
        <!--最近更新-->
        <veiw>
          <span class="zuijing">最近更新</span>
        </veiw>
        <CommunityTopicShow @toDateil="toDateil" />
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

export default {
  name: "Community",
  components: {
    CommunityTopCategories,
    CommunitySearchBar,
    CommunityPostShow,
    CommunityHeadText,
    CommunityTopicShow,
    Dividing
  },
  data() {
    return {
      classification: [
        {
          name: "关注",
          data: []
        },
        {
          name: "话题"
        }
      ],
      height: 0,
      index: 0,
      swiper: [
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1065785711,3125771441&fm=26&gp=0.jpg",
        "http://img2.imgtn.bdimg.com/it/u=1344996754,553300684&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=1294564799,617882576&fm=26&gp=0.jpg"
      ],
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
  mounted() {
    //获取视高
    this.systemMessage();

    this.classification[0].data = [
      {
        uid: "88031114",
        id: "28878862",
        name: "金艳",
        date: Date.now(),
        avatar: "http://dummyimage.com/70X70/f079f2/79f2cd&text=hebj",
        content: "做机青以度利管性六使日花共利效。"
      },
      {
        uid: "23734",
        id: "16633417",
        name: "杨秀兰",
        date: Date.now(),
        avatar: "http://dummyimage.com/70X70/f2a979/8679f2&text=frnv",
        content: "一交来第受习同代很质第支究当明。"
      },
      {
        uid: "93614816",
        id: "54618178",
        name: "邹敏",
        date: Date.now(),
        avatar: "http://dummyimage.com/70X70/8ff279/f279b2&text=mywh",
        content: "或不按县它队资说总无风式第置式细。"
      },
      {
        uid: "1688380",
        id: "44888132",
        name: "戴杰",
        date: Date.now(),
        avatar: "http://dummyimage.com/70X70/79d5f2/f2eb79&text=hqso",
        content: "但下报众应风她展证完变复低处里算过。"
      },
      {
        uid: "24700833",
        id: "03954868",
        name: "文磊",
        date: Date.now(),
        avatar: "http://dummyimage.com/70X70/c779f2/79f2a4&text=poev",
        content: "各但当至委然后带太手山应图教书分水。"
      }
    ];
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
              this.height =
                res.windowHeight - res.statusBarHeight - data.height + "px";
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
    toDateil() {
      uni.navigateTo({
        url: "../dateil/Dateil",
        animationType: "slide-in-bottom",
        animationDuration: 200
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.HeadText {
  position: relative;
  z-index: 99;
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
</style>
