<template>
  <view>
    <view class="flex-a-c p-tb-16">
      <text>头像</text>
      <view class="ma-left-au flex-a-c vimagee">
        <image :src="avatar" style="width:100rpx;height:100rpx" class="image" mode="aspectFill" />
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
          <text>{{region}}</text>
          <i class="iconfont icon">&#xe690;</i>
        </pick-regions>
      </view>
    </view>
    <view class="flex-1 flex-ja-c margin-top wanc" @click="okPut">
      <text>完成</text>
    </view>

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

import { installUserEdit } from "@/utils/install";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    pickRegions,
    KXDateTime,
    neilModal
  },
  props: {},
  data() {
    return {
      uid: "",
      avatar: "", //头像
      show: false,
      name: "", //修改名称时临时保存的名称
      names: "", //名称
      date: "", //生日
      region: "", //地址
      defaultRegion: ["广东省", "广州市", "番禺区"], //打开地址选择栏时默认选择的地址
      defaultRegionCode: "441602" //邮箱地址
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  created() {
    this.userInfo();
  },
  methods: {
    ...mapMutations(["logininfo"]),
    //用户信息
    userInfo() {
      let { uid, address, gender, name, avatar, birthday } = this.getUserInfo;
      this.uid = uid; //用户id
      this.region = address; //地址
      this.names = name; //名称
      this.date = birthday; //生日
      this.avatar = avatar; //头像
      this.defaultRegion = address.split(" ");
    },
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
    //修改生日
    kxdatetime(e) {
      this.date = e;
    },
    //修改生日
    putDirthday() {
      this.$refs.kxdateTime.open();
    },
    // 获取选择的地区
    getRegion(region) {
      //将地址转为字符串
      this.region = region.map(item => item.name).join(" ");
    },
    //本地缓存
    localCache(userinfo, token) {
      //将信息写入vuex
      this.logininfo({
        userinfo,
        token
      });

      //跳转页面
      uni.reLaunch({
        url: "../../file/File"
      });
    },
    //完成发送数据给后台
    okPut() {
      //收集数据
      let option = {
        method: "POST",
        option: "/modify/userinfo",
        data: {
          uid: this.uid,
          birthday: this.date,
          name: this.names,
          avatar: this.avatar,
          address: this.region
        }
      };

      //显示模态弹窗
      uni.showModal({
        title: "提示",
        content: "确定提交数据?",
        success: async res => {
          if (res.confirm) {
            //提示加载中
            uni.showLoading({
              title: "加载中"
            });

            await installUserEdit(option)
              .then(({ userinfo }) => {
                //请求完毕关闭加载中
                uni.hideLoading();
                let { token } = userinfo;
                delete userinfo.token;

                //重新缓存登录用户信息
                this.localCache(userinfo, token);
              })
              .catch(err => {
                //请求完毕关闭加载中
                uni.hideLoading();
                throw "提交失败";
              });
          }
        }
      });
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