<template>
  <view id="home">
    <!-- start 导航栏 header -->
    <header>
      <scroll-view scroll-x class="scroll-X">
        <WucTab
          :tab-list="tabList"
          tab-class="text-class"
          :tabCur.sync="TabCur"
          @change="tabChange"
          class="scroll-con"
          ref="wuctab"
        />
      </scroll-view>
    </header>
    <!-- end 导航栏 header -->

    <!--start 滑屏 article-->
    <article>
      <swiper :current="TabCur" :style="`height:${height}`" @change="change" class="swiper-ml">
        <swiper-item v-for="(item, index) in tabList" :key="index">
          <scroll-view scroll-y :style="`height:${height}`" @scrolltolower="scrolltolower(index)">
            <!-- 有数据显示 -->
            <template v-if="!item.data.length == 0">
              <view>
                <HomePostShow :list="item.data" :datanum="datanum" />
                <HomeUpLoading :text="text" />
              </view>
            </template>
            <!-- 有数据显示 -->

            <!-- 没数据显示 -->
            <template v-else>
              <view>
                <HomeNullData />
              </view>
            </template>
            <!-- 没数据显示 -->
          </scroll-view>
        </swiper-item>
      </swiper>
    </article>
    <!--start 滑屏 article-->
  </view>
</template>

<script>
/**
 * 公共组件
 * */
import WucTab from "components/content/wuc-tab/wuc-tab";

/**
 * 子组件
 * */
import HomeNullData from "./childcomps/HomeNullData";
import HomeUpLoading from "./childcomps/HomeUpLoading";
import HomePostShow from "./childcomps/HomePostShow";

/*
 * 方法
 * */
import { homePlateData } from "api/home";

export default {
  name: "home",
  components: {
    HomeUpLoading,
    HomePostShow,
    HomeNullData,
    WucTab
  },
  data() {
    return {
      infodata: [],
      TabCur: 0,
      datanum: 20,
      height: 0,
      text: "上拉加载更多",
      tabList: [
        { name: "精选", data: [] },
        { name: "订阅", data: [] },
        { name: "活动", data: [] },
        { name: "信息", data: [] },
        { name: "排行", data: [] },
        { name: "世界", data: [] },
        { name: "百科", data: [] }
      ]
    };
  },
  created() {
    this.homePlateData();
  },
  mounted() {
    this.tabList[0].data = [
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
    //计算滑动高度
    screenHeight() {
      let that = this;

      //获取整个屏幕的视高
      uni.getSystemInfo({
        success: function(res) {
          //获取类标签为scroll-con组件的高度
          const query = uni.createSelectorQuery().in(this);
          query
            .select(".scroll-con")
            .boundingClientRect(data => {
              //屏幕的视高和组件的高度相减
              that.height = res.windowHeight - data.height + "px";
            })
            .exec();
        }
      });
    },
    //板块数据请求
    homePlateData() {
      homePlateData("featured")
        .then(vlaue => {
          vlaue
        })
        .catch(err => {
          err;
        });
    },
    //点击跳到指定滑动屏
    tabChange(index) {
      this.TabCur = index;
    },
    //屏幕左右滑动，导航栏也滑动
    change({ detail }) {
      this.tabChange(detail.current);
    },
    //上拉加载
    scrolltolower(i) {
      if (this.text !== "上拉加载更多") return;
      this.text = "正在加载中...";

      setTimeout(() => {
        this.text = "上拉加载更多";
        this.datanum += 10;
      }, 4000);
    }
  },
  //停止下拉刷新
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 5000);
  },
  //点击搜索框跳转
  onNavigationBarSearchInputClicked() {
    //在起始页面跳转到SearchFor页面
    uni.navigateTo({
      url: "../searchfor/SearchFor",
      animationType: "slide-in-right",
      animationDuration: 300
    });
  },
  onReady() {
    //进入首页计算第一次滑动高度
    this.screenHeight();
  }
};
</script>

<style scoped>
.text-class {
  background: #f1f2f6;
}
.scroll-X {
  width: 100%;
  white-space: nowrap;
}
.scroll-con {
  display: inline-block;
  padding: 6px;
}
.swiper-ml {
  margin: 0 8rpx;
}
</style>
