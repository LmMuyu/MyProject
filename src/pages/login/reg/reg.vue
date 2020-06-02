<template>
  <view class="content">
    <view class="input-group">
      <view class="input-row border">
        <text class="title">账号：</text>
        <m-input type="text" class="size" focus clearable v-model="account" placeholder="请输入账号"></m-input>
      </view>
      <view class="input-row border">
        <text class="title">密码：</text>
        <m-input type="password" class="size" displayable v-model="password" placeholder="请输入密码"></m-input>
      </view>
      <view class="input-row border">
        <text class="title">手机号</text>
        <m-input type="text" class="size" clearable v-model="phonenumber" placeholder="手机号"></m-input>
      </view>
    </view>
    <view class="flex">
      <input type="text" v-model="captcha" placeholder="输入验证码" />
      <view>获取验证码</view>
    </view>
    <view class="btn-row">
      <button type="primary" class="primary" @tap="register">注册</button>
    </view>
  </view>
</template>

<script>
import service from "../service.js";
import mInput from "components/content/m-input/m-input";

export default {
  components: {
    mInput
  },
  data() {
    return {
      account: "",
      password: "",
      phonenumber: "",
      captcha: ""
    };
  },
  methods: {
    register() {
      /**
       * 客户端对账号信息进行一些必要的校验。
       * 实际开发中，根据业务需要进行处理，这里仅做示例。
       */
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
        account: this.account,
        password: this.password,
        email: this.email
      };
      service.addUser(data);
      uni.showToast({
        title: "注册成功"
      });
      uni.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../common/login.css";
.flex {
  display: flex;
  align-items: center;
  margin-top: 16rpx;
}
.flex > input {
  width: 200rpx;
  border: 1rpx solid #cacaca;
  height: 64rpx;
  font-size: $uni-font-size-lg;
}
.flex > view {
  margin-left: 20rpx;
  border: 1rpx solid #3498db;
  padding: 14rpx;
  color: $uni-text-color;
}
.primary {
  padding: 16rpx;
}
</style>
