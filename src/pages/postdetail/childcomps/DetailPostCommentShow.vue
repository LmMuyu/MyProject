<template>
  <view>
    <!--回复-->
    <DetailPostComment :reviewMsg="review" @openPopup="openPopup" />
    <!--全部回复-->
    <uni-popup ref="popup" type="bottom" class="uni_popup">
      <view :style="`height:${Height}`" class="bottomoPopup">
        <i class="iconfont" @click="closePopup">&#xe607;</i>
        <scroll-view scroll-y :style="`height:${scrollH}`">
          <DetailPostReply
            v-for="(item, index) in review.reply"
            :key="index"
            :reviewMsg="item"
          />
        </scroll-view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopupMessage from "components/content/popup/uni-popup/uni-popup-message.vue";
import uniPopupDialog from "components/content/popup/uni-popup/uni-popup-dialog.vue";
import uniPopup from "components/content/popup/uni-popup/uni-popup.vue";

import DetailPostComment from "./DetailPostComment";
import DetailPostReply from "./DetailPostReply";

export default {
  components: {
    DetailPostComment,
    uniPopupMessage,
    DetailPostReply,
    uniPopupDialog,
    uniPopup
  },
  props: {
    postData: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      Height: 0 + "px",
      scrollH: 0 + "px",
      review: this.postData
    };
  },
  created() {
    this.systemHeight();
  },
  methods: {
    //打开底部弹出框
    openPopup() {
      this.$refs.popup.open();
    },
    //关闭底部弹出框
    closePopup() {
      this.$refs.popup.close();
    },
    //获取系统视高
    systemHeight() {
      //系统视高
      uni.getSystemInfo({
        success: res => {
          this.Height = res.windowHeight - 200 + "px";
        }
      });
    },
    //节点信息
    selectorQuery() {
      //系统视高
      uni.getSystemInfo({
        success: res => {
          this.scrollH = res.windowHeight - res.statusBarHeight - 200 + "px";
        }
      });
    }
  },
  mounted() {
    this.selectorQuery();
  }
};
</script>

<style lang="scss" scoped>
.bottomoPopup {
  background: #ffffff;
  border-top-right-radius: 12rpx;
  border-top-left-radius: 12rpx;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 64rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
  display: block;
}
</style>
