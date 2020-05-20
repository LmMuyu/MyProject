<template>
  <view>
    <view class="flex">
      <view>
        <image
          mode="aspectFill"
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=394058404,2733414982&fm=26&gp=0.jpg"
        />
      </view>
      <view class="font">
        <view class="bett">
          <text>名称</text>
          <text class="size">2002-4-4</text>
        </view>
        <view class="textl">
          <text
            class="text-ellipsis size"
            style="max-width:500rpx"
          >多久啊就到家啊我觉得经济稳定jjdwjadawdawdawdadjd</text>
          <span class="size">
            <uniBadge text="1" size="small" type="success"></uniBadge>
          </span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import uniBadge from "components/content/uni-badge/uni-badge";

export default {
  components: { uniBadge }
};
</script>

<style scoped lang="scss">
image {
  width: 100rpx;
  height: 100rpx;
  border-radius: $uni-border-radius-circle;
}
.flex {
  display: flex;
  padding: 20rpx;
}
.font {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}
.bett {
  display: flex;
  justify-content: space-between;
}
.textl {
  display: flex;
  justify-content: space-between;
}
view:nth-child(1){
  margin-top: 20rpx;;
}
</style>