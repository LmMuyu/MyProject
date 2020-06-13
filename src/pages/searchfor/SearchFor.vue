<template>
  <view>
    <!-- start 搜索框  -->
    <nav></nav>
    <!--end 搜索框 -->

    <template v-if="searchResults.length === 0">
      <!-- start 头部文字 header -->
      <header>
        <SearchForhHeadText />
      </header>
      <!-- end 头部文字 header -->

      <!--start 历史记录  -->
      <article>
        <SerchForRecording @deleteKeyword="deleteKeyword" class="margin-top" :recording="result" />
      </article>
      <!--end 历史记录  -->
    </template>

    <template v-else>
      <!--start 搜索结果  -->
      <scroll-view scroll-y :style="`height:${scrollH}`">
        <SearchForShow @openPostDateil="openPostDateil" :list="searchResults" />
        <ButtomText />
      </scroll-view>
      <!--end 搜索结果  -->
    </template>
  </view>
</template>

<script>
import SearchForhHeadText from "./childcomps/SearchForhHeadText";
import SerchForRecording from "./childcomps/SearchForRecording";
import SearchForShow from "./childcomps/SearchForShow";

import ButtomText from "components/content/buttomtext/ButtomText.vue";

import { postSearch } from "@/utils/searchfor";

export default {
  name: "searchfor",
  components: {
    SearchForhHeadText,
    SerchForRecording,
    SearchForShow,
    ButtomText
  },
  data() {
    return {
      result: [], //搜索关键字
      searchResults: [], //搜索数据
      scrollH: 0 //视高
    };
  },
  created() {
    //获取系统信息
    this.systemMessage();
    this.getKeyword();
  },
  beforeDestroy() {
    this.keyword();
  },
  methods: {
    //删除搜索关键字
    async deleteKeyword(i) {
      await this.result.splice(i, 1);
      //删除完后重新本地储存关键字
      this.keyword();
    },
    //搜索
    onSearch(text) {
      //收起软键盘
      uni.hideKeyboard();

      //开启加载中
      uni.showLoading({
        title: "加载中",
        mask: true
      });

      let option = {
        method: "POST",
        option: "/api/search",
        data: {
          text
        }
      };

      postSearch(option)
        .then(async ({ list }) => {
          //储存搜索关键字
          !this.result.includes(text) ? this.result.push(text) : false;

          let listData = await list.map(({ postData }) => postData);

          this.searchResults = listData;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          //关闭加载中
          uni.hideLoading();
        });
    },
    onSearchPrompt() {
      uni.showToast({
        icon: "none",
        title: "搜索关键字不能为空",
        duration: 2000
      });
    },
    //获取系统信息
    systemMessage() {
      uni.getSystemInfo({
        success: res => {
          this.scrollH = res.windowHeight + "px";
        }
      });
    },
    //打开帖子详细
    openPostDateil(postid) {
      uni.redirectTo({
        url: `../postdetail/PostDetail?pid=${postid}`
      });
    },
    //本地储存搜索关键字
    keyword() {
      uni.setStorageSync("keyword", this.result);
    },
    //获取本地储存的搜索关键字
    getKeyword() {
      uni.getStorage({
        key: "keyword",
        success: ({ data }) => {
          this.result = data;
        }
      });
    }
  },
  //点击搜索
  onNavigationBarSearchInputConfirmed(options) {
    if (options.text !== "") {
      //开启搜索
      this.onSearch(options.text);
    } else {
      //搜索框为为空时调用此函数
      this.onSearchPrompt();
    }
  }
};
</script>

<style lang="scss" scoped></style>
