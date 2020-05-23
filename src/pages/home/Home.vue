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
        <swiper-item v-for="(item, index) in tabList" :key="index" class="scrollY">
          <scroll-view scroll-y :style="`height:${height}`" @scrolltolower="scrolltolower(index)">
            <!-- 有数据显示 -->
            <template v-if="!item.data.length == 0">
              <view>
                <HomePostShow :list="item.data" :datanum="datanum" @openDetail="openDetail" />
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
        { name: "精选", times: 1, plate: "choice", data: [] },
        { name: "订阅", times: 1, plate: "subscribe", data: [] },
        { name: "活动", times: 1, plate: "active", data: [] },
        { name: "信息", times: 1, plate: "info", data: [] },
        { name: "排行", times: 1, plate: "ranking", data: [] },
        { name: "世界", times: 1, plate: "world", data: [] },
        { name: "百科", times: 1, plate: "Encyclopedia", data: [] }
      ]
    };
  },
  created() {
    this.homePlateData();
  },
  mounted() {},
  methods: {
    //计算滑动高度
    screenHeight() {
      let that = this;

      //获取整个屏幕的视高
      uni.getSystemInfo({
        success: res => {
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
    homePlateData(index = 0) {
      let { plate, times } = this.tabList[index];
      //请求完成数据加一
      this.tabList[index].times++;

      let obj = {
        plate,
        times
      };

      homePlateData(obj)
        .then(vlaue => {
          console.log(value);
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
    },
    //打开帖子详情页
    openDetail() {
      uni.navigateTo({
        url: "../postdetail/PostDetail",
        animationType: "pop-in",
        animationDuration: 200
      });
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
    //在起始页面跳转到搜索页面
    uni.navigateTo({
      url: "../searchfor/SearchFor",
      animationType: "slide-in-right",
      animationDuration: 300
    });
  },
  onReady() {
    //进入首页计算第一次滑动高度
    this.screenHeight();
  },
  onNavigationBarButtonTap(option) {
    if (option.index === 0) {
      //跳转到发布页
      uni.navigateTo({
        url: "../releasepage/ReleasePage",
        animationType: "slide-in-bottom",
        animationDuration: 150
      });
    }
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
