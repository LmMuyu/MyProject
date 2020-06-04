<template>
  <view class="content">
    <view class="input-group">
      <view class="input-row border">
        <text class="title">账号：</text>
        <m-input
          class="m-input size"
          type="text"
          clearable
          focus
          v-model.trim="account"
          placeholder="请输入账号"
        ></m-input>
      </view>
      <view class="input-row">
        <text class="title">密码：</text>
        <m-input
          type="password"
          class="size"
          displayable
          v-model.trim="password"
          placeholder="请输入密码"
        ></m-input>
      </view>
    </view>
    <view class="btn-row">
      <button type="primary" class="primary classlogin" @tap="bindLogin">登录</button>
    </view>
    <view class="action-row">
      <navigator url="../reg/reg" class="size">注册账号</navigator>
      <text>|</text>
      <navigator url="../pwd/pwd" class="size">忘记密码</navigator>
    </view>

    <!--第三方登录-->
    <view class="oauth-row flex" v-if="hasProvider" :style="{top: positionTop + 'px'}">
      <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
        <image :src="provider.image" @tap="oauth(provider.value)" />
        <!-- #ifdef MP-WEIXIN -->
        <button v-if="!isDevtools" open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
        <!-- #endif -->
      </view>
    </view>
  </view>
</template>

<script>
import mInput from "components/content/m-input/m-input";

import { mapState, mapMutations } from "vuex";
import { loginInfoPost, loginThirdParty } from "@/utils/login";

import service from "../service";

export default {
  components: {
    mInput
  },
  data() {
    return {
      providerList: [],
      hasProvider: false,
      account: "1538993458",
      password: "200216",
      positionTop: 0,
      isDevtools: false
    };
  },
  computed: mapState(["forcedLogin"]),
  methods: {
    ...mapMutations(["login", "logininfo"]),
    initProvider() {
      const filters = ["weixin", "qq", "sinaweibo"];
      uni.getProvider({
        service: "oauth",
        success: res => {
          if (res.provider && res.provider.length) {
            for (let i = 0; i < res.provider.length; i++) {
              if (~filters.indexOf(res.provider[i])) {
                this.providerList.push({
                  value: res.provider[i],
                  image: require("static/img/login/" + res.provider[i] + ".png")
                });
              }
            }
            this.hasProvider = true;
          }
        },
        fail: err => {
          console.error("获取服务供应商失败：" + JSON.stringify(err));
        }
      });
    },
    initPosition() {
      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
    },
    //本地缓存
    localCache(userinfo, token) {
      //本地缓存token
      uni.setStorage({
        key: "token",
        data: token
      });

      //本地缓存用户信息
      uni.setStorage({
        key: "userInfo",
        data: userinfo
      });

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

    //登录
    bindLogin() {
      if (this.account.length < 5) {
        uni.showToast({
          icon: "none",
          title: "账号最短为 5 个字符"
        });
        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: "none",
          title: "密码最短为 6 个字符"
        });
        return;
      }
      const data = {
        method: "POST",
        option: "/login",
        data: {
          account: this.account,
          password: this.password
        }
      };

      //向后台发送登录信息
      loginInfoPost(data)
        .then(({ userinfo }) => {
          let { token } = userinfo;
          delete userinfo.token;

          this.localCache(userinfo, token);
        })
        .catch(({ data }) => {
          let { message } = data;

          //登录失败弹出信息框
          uni.showToast({
            title: message,
            icon: "none",
            duration: 2000
          });
        });
    },
    //第三方登录
    oauth(value) {
      //登录
      uni.login({
        provider: value,
        scopes: "auth_user",
        success: res => {
          //获取用户信息
          uni.getUserInfo({
            provider: value,
            success: async ({ userInfo }) => {
              //微信登录
              if (value === "weixin") {
                //向后台传参数
                let option = {
                  option: "/login/thirdparty",
                  method: "POST",
                  data: {
                    uid: userInfo.openId,
                    name: userInfo.nickName,
                    avatar: userInfo.avatarUrl
                  }
                };
                //请求后台等待返回信息
                await loginThirdParty(option)
                  .then(({ uinfo }) => {
                    let { token } = uinfo;
                    delete uinfo.token;

                    //本地缓存
                    this.localCache(uinfo, token);
                  })
                  .catch(err => {
                    throw err;
                  });
              }

              /**
               * 实际开发中，获取用户信息后，需要将信息上报至服务端。
               * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
               */
              this.toMain(infoRes.userInfo.nickName);
            },
            fail() {
              uni.showToast({
                icon: "none",
                title: "登陆失败"
              });
            }
          });
        },
        fail: err => {
          console.error("授权登录失败：" + JSON.stringify(err));
        }
      });
    },
    getUserInfo({ detail }) {
      if (detail.userInfo) {
        this.toMain(detail.userInfo.nickName);
      } else {
        uni.showToast({
          icon: "none",
          title: "登陆失败"
        });
      }
    },
    toMain(userName) {
      console.log(userName);

      this.login(userName);
      /**
       * 强制登录时使用reLaunch方式跳转过来
       * 返回首页也使用reLaunch方式
       */
      if (this.forcedLogin) {
        uni.reLaunch({
          url: "../../file/File"
        });
      } else {
        uni.navigateBack();
      }
    }
  },
  onReady() {
    this.initPosition();
    this.initProvider();
    // #ifdef MP-WEIXIN
    this.isDevtools = uni.getSystemInfoSync().platform === "devtools";
    // #endif
  }
};
</script>

<style less="scss" scoped>
@import "../../../common/login.css";

.flex {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(0, -50%);
}
.classlogin {
  padding: 20rpx 0;
}
.action-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.action-row navigator {
  color: #007aff;
  padding: 0 10px;
}

.oauth-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.oauth-image {
  position: relative;
  width: 50px;
  height: 50px;
  border: 1px solid #dddddd;
  border-radius: 50px;
  margin: 0 20px;
  background-color: #ffffff;
}

.oauth-image image {
  width: 30px;
  height: 30px;
  margin: 10px;
}

.oauth-image button {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
