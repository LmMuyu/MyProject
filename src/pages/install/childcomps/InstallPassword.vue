<template>
  <view>
    <input v-model="account.accountnum" type="text" class="margin-top input" placeholder="旧密码" />
    <input v-model="account.password" type="text" class="margin-top input" placeholder="新密码" />
    <input v-model="account.qdingpassword" type="text" class="margin-top input" placeholder="确定新密码" />

    <view>
      <text
        class="flex-1 flex-ja-c margin-top size"
        style="background:#2980b9;padding:16rpx;color:#ff7979"
        @click="test"
      >完成</text>
    </view>
  </view>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userinfo: this.getUserInfo, //用户信息
      account: {
        accountnum: "",
        password: "",
        qdingpassword: ""
      }
    };
  },
  methods: {
    //获取用户信息
    ...mapGetters(["getUserInfo"]),

    //提示信息
    tixInfo(text) {
      uni.showToast({
        icon: "none",
        title: text,
        duration: 2000
      });
    },

    //点击完成
    test() {
      let { accountnum, password, qdingpassword } = this.account;

      if (!(accountnum || password || qdingpassword)) {
        this.tixInfo("不能为空");
        return;
      }
      
      console.log(JSON.stringify(this.userinfo));
      
    
    }
  }
};
</script>

<style lang="scss" scoped>
input {
  height: 64rpx;
  border: 1rpx solid $uni-border-color;
}
.input {
  border-radius: $uni-border-radius-sm;
  font-size: $uni-spacing-row-lg;
}
</style>