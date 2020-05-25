<template>
  <view>
    <view class="flex-a-c p-tb-16">
      <text>头像</text>
      <view class="ma-left-au flex-a-c vimagee">
        <image :src="image" style="width:100rpx;height:100rpx" class="image" mode="aspectFill" />
        <i class="iconfont icon" @click="modifyT">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>名称</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>{{names}}</text>
        <i class="iconfont icon" @click="modifyName">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>性别</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>男</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>生日</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>{{date}}</text>
        <i class="iconfont icon" @click="putDirthday">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>职业</text>
      <view class="ma-left-au flex-a-c vimagee">
        <text>IT</text>
        <i class="iconfont icon">&#xe690;</i>
      </view>
    </view>
    <view class="flex-a-c p-tb-16">
      <text>地址</text>
      <view class="ma-left-au flex-a-c vimagee">
        <pick-regions :defaultRegion="defaultRegionCode" @getRegion="getRegion">
          <text>{{regionName}}</text>
          <i class="iconfont icon">&#xe690;</i>
        </pick-regions>
      </view>
    </view>
    <veiw class="flex-1 flex-ja-c margin-top wanc">
      <text>完成</text>
    </veiw>

    <!--名称修改-->
    <neil-modal
      :show="show"
      @cancel="cancel"
      :name="name"
      @close="close"
      @confirm="confirm"
      title="修改名称"
    >
      <view style="border:1rpx;solid;#red">
        <input type="text" v-model="name" class="input" placeholder="1~6个字符" maxlength="6" />
      </view>
    </neil-modal>

    <!--修改生日-->
    <KXDateTime @rundata="kxdatetime" default="start" ref="kxdateTime" />
    <!--修改地址-->
  </view>
</template>

<script>
import KXDateTime from "components/content/deta/kx-datetime/kx-datetime";
import pickRegions from "components/content/pick-regions/pick-regions";
import neilModal from "components/content/neil-modal/neil-modal";

export default {
  components: {
    pickRegions,
    KXDateTime,
    neilModal
  },
  data() {
    return {
      image:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4051190685,3300949277&fm=11&gp=0.jpg",
      show: false,
      name: "",
      names: "哈哈哈哈",
      date: "",
      region: [],
      defaultRegion: ["广东省", "广州市", "番禺区"],
      defaultRegionCode: "440113"
    };
  },
  computed: {
    regionName() {
      // 转为字符串
      return this.region.map(item => item.name).join(" ");
    }
  },
  methods: {
    //修改头像
    modifyT() {
      //选取照片
      uni.chooseImage({
        count: 1,
        sizeType: ["compressed"], //可以指定是原图还是压缩图，默认二者都有
        success: res => {
          this.image = res.tempFilePaths[0];
        }
      });
    },
    //修改名称
    modifyName() {
      this.show = this.show ? false : true;
    },
    //修改名称组件关闭时触发事件
    close() {
      this.show = false;
    },
    //点击确定触发事件
    confirm() {
      this.names = this.name;
    },
    //点击取消时触发
    cancel() {
      this.name = "";
    },
    //修改生日的参数
    kxdatetime(e) {
      console.log(e);

      this.date = e;
    },
    //修改生日
    putDirthday() {
      this.$refs.kxdateTime.open();
    },
    // 获取选择的地区
    getRegion(region) {
      this.region = region;
    }
  }
};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 48rpx;
  font-style: normal;
  color: #dbdbdb;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.flexbox {
  display: flex;
}
.image {
  border-radius: $uni-border-radius-circle;
}
.icon {
  padding: 0 32rpx;
}
text {
  color: $uni-text-color-grey;
  font-size: $uni-font-size-lg;
}
.wanc {
  padding: 20rpx;
  background: #3498db;
  margin: 0 32rpx;
  border-radius: $uni-border-radius-lg;
}
.wanc > text {
  color: #34495e !important;
}
.name {
  border: 1rpx solid #3498db;
}
.input {
  padding: 16rpx 0;
}
</style>