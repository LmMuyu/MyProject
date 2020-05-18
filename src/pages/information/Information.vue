<template>
  <view id="info">
    <!--信息-->
    <InformationBuddyInfo v-for="(item, index) in 5" :key="index" />
    <!--顶部弹出层-->
    <uni-popup ref="popup" type="top">
      <view class="flex-ja-c fl-dr size">
        <text v-for="(item, index) in popupText" :key="index" @click="close">{{item.name}}</text>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniPopup from "components/content/popup/uni-popup/uni-popup.vue";

import InformationBuddyInfo from "./childcomps/InformationBuddyInfo";

export default {
  components: {
    InformationBuddyInfo,
    uniPopup
  },
  data() {
    return {
      opcl: true,
      popupText: [
        {
          name: "清除信息"
        },
        {
          name: "全部已看"
        }
      ]
    };
  },
  methods: {
    //打开弹出层
    openPopup() {
      this.opcl ? this.$refs.popup.open() : this.$refs.popup.close();
      this.opcl = this.opcl ? false : true;
    },
    //点击弹出框内的文字来关闭弹出框
    close() {
      this.$refs.popup.close();
    }
  },
  onNavigationBarButtonTap({ index }) {
    index == 0 ? this.openPopup() : false;
  }
};
</script>

<style lang="scss" scoped>
#info {
  width: 100%;
}
.fl-dr {
  flex-direction: column;
  background: #ffffff;
  opacity: 0.8;
  color: #3498db;
}
.fl-dr > text {
  padding: 20rpx 0;
}
</style>