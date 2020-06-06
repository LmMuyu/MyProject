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
                <HomePostShow :list="item.data" @openDetail="openDetail" @dianPoint="dianPoint" />
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
import { homePlateData, homeLike } from "@/utils/home";
import { mapGetters, mapMutations } from "vuex";

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
      list: [],
      TabCur: 0,
      datanum: 20,
      height: 0 + "px",
      text: "上拉加载更多",
      token: "",
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
  computed: {
    ...mapGetters(["getPostData"])
  },
  created() {
    this.homePlate();
    this.getToken();
  },
  methods: {
    ...mapMutations(["setReleasePost"]),
    //获取vuex里的发布帖子数据
    getPsotDatais() {
      if (Object.keys(this.getPostData).length === 0) return;

      this.tabList[0].data.unshift(this.getPostData);

      //清除vuex里的数据
      this.setReleasePost({});
    },
    //获取token
    getToken() {
      uni.getStorage({
        key: "token",
        success: res => {
          this.token = res.data;
        }
      });
    },
    //点赞模块
    async dianPoint({ info, dinaz }) {
      let { postId } = info;

      let post = await this.tabList[this.TabCur].data.find(
        item => item.postId === postId
      );

      //false为++ true为--
      !dinaz ? post.like-- : post.like++;

      //向后台发送数据
      let option = {
        method: "POST",
        option: "/like",
        data: {
          pid: post.postId,
          uid: post.uid
        }
      };

      homeLike(option)
        .then(value => {
          console.log(value);
        })
        .catch(err => {
          console.log(err);
        });
    },
    //计算滑动高度
    screenHeight() {
      //获取整个屏幕的视高
      uni.getSystemInfo({
        success: res => {
          this.height = res.windowHeight + "px";
        }
      });
    },
    //板块数据请求
    homePlate(index = 0) {
      this.plateReq(index);
    },
    //板块数据请求逻辑抽离
    plateReq(index) {
      let { times, plate } = this.tabList[index];

      let request = {
        option: "/home",
        data: {
          plate,
          times
        }
      };

      //请求完成数据加一
      this.tabList[index].times++;

      homePlateData(request)
        .then(({ dataList, success }) => {
          //每一个板块帖子数据
          this.tabList[index].data.push(...dataList);
        })
        .catch(err => {
          console.log(err);
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
    async scrolltolower(i) {
      if (this.text !== "上拉加载更多") return;
      this.text = "正在加载中...";
      await this.plateReq(i);

      this.text = "上拉加载更多";
    },
    //打开帖子详情页
    openDetail(postid) {
      if (postid) {
        uni.navigateTo({
          url: `../postdetail/PostDetail?pid=${postid}`,
          animationType: "pop-in",
          animationDuration: 200
        });
      }
    }
  },
  onShow() {
    this.getPsotDatais();
  },
  onReady() {
    //进入首页计算第一次滑动高度
    this.screenHeight();
  },
  //停止下拉刷新
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 3000);
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
  onNavigationBarButtonTap(option) {
    if (this.token !== "") {
      if (option.index === 0) {
        //跳转到发布页
        uni.navigateTo({
          url: "../releasepage/ReleasePage",
          animationType: "slide-in-bottom",
          animationDuration: 150
        });
      }
    } else {
      //显示未登录的消息框
      uni.showToast({
        title: "未登录不可发帖",
        icon: "none",
        duration: 2000
      });
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
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
  background: #ffffff;
}
.swiper-ml {
  margin: 0 8rpx;
}
</style>
