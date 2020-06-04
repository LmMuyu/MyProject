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
    //判断规则
    loginRule() {
      let that = this;
      let rule = {
        //检验旧密码
        accountnum() {
          if (that.account.accountnum === "") {
            return "旧密码不能为空";
          } else if (that.account.accountnum !== that.userinfo.account) {
            return "旧密码不正确";
          }
          return true;
        },
        //检查新密码
        password() {
          if (that.account.password === "") {
            return "新密码不能为空";
          } else if (that.account.password === that.userinfo.account) {
            return "新密码不能和旧密码相同";
          } else if (that.password.length < 6) {
            return "新密码不能小于6位";
          }

          return true;
        },
        //检查确定密码
        qdingpassword() {
          if (that.account.qdingpassword === "") {
            return "确定密码不能为空";
          } else if (that.account.qdingpassword !== that.account.password) {
            return "两次密码输入不一致";
          }

          return true;
        }
      };

      return rule;
    },
    //点击完成
    async test() {
      let rule = await this.loginRule();

      //运行登录判定
      class inspection {
        constructor() {
          this.times = [];
        }

        //插入规则
        insertRule() {
          for (const key in rule) {
            this.times.push(() => {
              return rule[key]();
            });
          }
        }

        //运行规则
        runRule() {
          for (const itme of this.times) {
            let info = itme();
            console.log(info);

            if (typeof info !== "boolean") {
              //显示错误信息框
              uni.showToast({
                title: info,
                icon: "none",
                duration: 2000
              });

              return false;
            }
          }
        }
      }

      let newRule = new inspection();

      //插入规则
      await newRule.insertRule();
      //运行规则
      let boll = await newRule.runRule();
      if (boll == false) return;

      //发起网络请求
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