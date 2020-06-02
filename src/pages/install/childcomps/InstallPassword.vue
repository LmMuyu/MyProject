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
export default {
  data() {
    return {
      account: {
        accountnum: "",
        password: "",
        qdingpassword: ""
      }
    };
  },
  methods: {
    examination() {
      let inspection = {
        accountnum(value) {
          if (value == "123456") {
            return true;
          }

          return "旧密码错误";
        },
        password(value) {
          if (value === "123456") {
            return "不能与旧密码相同";
          } else if (value.length < 6) {
            return "密码个数小于6位";
          } else {
            return true;
          }
        },
        qdingpassword(value) {
          let that = new Vue();
          if (value !== that.account.qdingpassword) {
            return "密码不等";
          }

          return true;
        }
      };

      class jiancha {
        constructor() {
          this.times = [];
        }

        addfun(methods, value) {
          this.times.push(() => {
            return inspection[methods](value);
          });
        }

        runfun() {
          for (let i = 0; i < times.length; i++) {
            let jieguo = this.times[i]();

            if (typeof jieguo !== "boolean") {
              uni.showToast({
                title: jieguo,
                duration: 1000
              });

              return;
            }
          }
        }
      }

      return new jiancha();
    },
    //点击完成
    test() {
      let obj = this.examination();

      for (const key in this.account) {
        this.obj.addfun(key, this.account[key]);
      }

      console.log(obj);
      obj.runfun();
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