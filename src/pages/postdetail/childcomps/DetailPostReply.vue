<template>
  <view class="flex">
    <view class="cenHeadImgContent">
      <image class="headImg" :src="reviewMsg.headImgSrc" />
    </view>
    <view class="cenHostMsgContent">
      <view class="viewMb viewMb-space-between">
        <view>
          <text class="textSize">{{reviewMsg.userName}}</text>
          <text class="textCenMsg cenHostMsg2">LV{{reviewMsg.userLevel}}</text>
        </view>
        <view>
          <text class="followText">+ 关注</text>
        </view>
      </view>
      <view class="viewMb">
        <text class="cenHostMsg3 textCenMsg">#{{reviewMsg.cenId}}</text>
        <text class="cenHostMsg4 textCenMsg">{{reviewMsg.sendTime}}</text>
      </view>
      <view class="cenHostReview viewMb">
        <text class="textSendMsg">{{reviewMsg.sendMsg}}</text>
      </view>
      <view class="iconRow">
        <view>
          <dnIcon type="haoping" color="#C0C0C0"></dnIcon>
          <text style="padding-left: 5px;">{{reviewMsg.likeNum}}</text>
        </view>
        <view>
          <dnIcon type="zan" color="#C0C0C0"></dnIcon>
          <text style="padding-left: 5px;">{{reviewMsg.dislikeNum}}</text>
        </view>
        <view>
          <uniicon type="redo" size="20" color="#C0C0C0"></uniicon>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import uniicon from "components/content/comment/uni-icons/uni-icons";
import dnIcon from "components/content/comment/dn-icon/dn-icon";

export default {
  components: {
    uniicon,
    dnIcon
  },
  props: {
    reviewMsg: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  border-bottom: 1rpx solid $uni-border-color;
}
.headImg {
  width: 75rpx;
  height: 75rpx;
  border-radius: 50%;
}

.textSendMsg {
  font-size: 14px;
}

.textSize {
  font-size: 13px;
  color: #808080;
  margin-right: 10px;
}

.textCenMsg {
  color: #999999;
  font-size: 12px;
}

.viewMb-space-between {
  display: flex;
  justify-content: space-between;
}

.viewMb {
  margin-bottom: 5px;
}

.followText {
  font-size: 14px;
  color: #fa7298;
  margin-right: 8px;
}

.cenHostMsgContent {
  width: calc(100% - 30px);
  padding: 20rpx;
}

.cenHeadImgContent {
  height: 100%;
  margin: 10px;
}
.cenHostMsg2 {
  background-color: #ff6d00;
  color: #ffffff;
  font-size: 10px;
}

.cenHostMsg3 {
  color: #999999;
  margin-right: 10px;
}

.cenHostMsg4 {
  color: #999999;
}

.iconRow {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  color: #999999;
  font-size: 12px;
}
</style>