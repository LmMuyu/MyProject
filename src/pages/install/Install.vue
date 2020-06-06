<template>
  <view class="install">
    <uni-list>
      <uni-list-item
        v-for="(item, index) in liisttext"
        :key="index"
        :title="item.name"
        @click="open(index)"
      />
      <!--退出登录-->
      <InstaillDeleteLogin @click.native="deleteLogin" v-if="token" />
    </uni-list>
  </view>
</template>

<script>
import uniListItem from "components/content/list/uni-list-item/uni-list-item";
import uniList from "components/content/list/uni-list/uni-list";

import InstaillDeleteLogin from "./childcomps/InstaillDeleteLogin";

import { mapActions } from "vuex";

export default {
  components: { uniList, uniListItem, InstaillDeleteLogin },
  data() {
    return {
      token: "",
      liisttext: [
        { name: "账户与安全" },
        { name: "资料编辑" },
        { name: "绑定邮箱" },
        { name: "清除缓存" },
        { name: "意见反馈" },
        { name: "关于社区" }
      ]
    };
  },
  created() {
    this.getToken();
  },
  methods: {
    ...mapActions(["delLog"]),
    //获取token
    getToken() {
      uni.getStorage({
        key: "token",
        success: res => {
          this.token = res.data;
        }
      });
    },
    //退出登录
    deleteLogin() {
      //弹出模拟框
      uni.showModal({
        title: "提示",
        content: "是否退出登录?",
        success: res => {
          //点击了确定
          if (res.confirm) {
            //删除vuex里的用户数据
            this.delLog()
              .then(value => {
                //删除token
                uni.removeStorage({
                  key: "token",
                  success: res => {
                    //清除本地用户信息
                    uni.removeStorageSync("userInfo");
                    //退出成功跳转到我的页面
                    uni.reLaunch({
                      url: "../file/File"
                    });
                    //弹出退出成功
                    uni.showToast({
                      title: "已成功退出登录",
                      icon: "none",
                      duration: 2000
                    });
                  }
                });
              })
              .catch(err => {
                console.log(err);
              });
          }
        }
      });
    },
    //封装页面跳转
    pageto(path) {
      uni.navigateTo({
        url: path,
        animationType: "none"
      });
    },
    //打开对应的修改区
    open(i) {
      switch (i) {
        case 0:
          this.pageto("./childcomps/InstallPassword");
          break;
        case 1:
          this.pageto("./childcomps/InstaillUserInfo");
          break;
        case 2:
          this.pageto("./childcomps/InstaillMailbox");
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>