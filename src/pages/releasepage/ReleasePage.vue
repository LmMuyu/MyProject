<template>
  <view class="releasepage">
    <scroll-view scroll-y :style="`height:${height}`">
      <!--导航栏-->
      <UniNavBar
        class="nuvbar scroll-height"
        left-icon="back"
        left-text="返回"
        right-text="发布"
        @clickLeft="onBack"
        title="发布页"
      />
      <!--内容输入区-->
      <view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
        <textarea
          v-model="content"
          placeholder-class="textarea-placeholder"
          class="text"
          placeholder="说说一句话吧~~~"
          auto-height
          focus
        ></textarea>
      </view>
      <!-- 图片展示 -->
      <view>
        <ReleasePageImageShow class="imageshow" :imagelist="image" />
      </view>
      <!--底部功能栏-->
      <view class="bottomfunction">
        <ReleasePageFunction
          class="functionbar scroll-height"
          @release="dianRelease"
          @onUploadImage="onUpimg"
        />
      </view>
    </scroll-view>
  </view>
</template>

<script>
import UniNavBar from "components/content/navbar/uni-nav-bar/uni-nav-bar";

import ReleasePageImageShow from "./childcomps/ReleasePageImageShow.vue";
import ReleasePageFunction from "./childcomps/ReleasePageFunction.vue";

import { selectorquery } from "common/selectorquery.js";
import { releasePost } from "../../utils/releasepage";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ReleasePage",
  components: {
    ReleasePageImageShow,
    ReleasePageFunction,
    UniNavBar
  },
  data() {
    return {
      content: "",
      image: [],
      height: 0,
      uinfo: {} //用户信息
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"])
  },
  mounted() {
    this.uinfo = this.getUserInfo;

    //获取视高
    this.xiTong();

    //删除照片
    this.$bus.$on("deleteImage", i => {
      this.image.splice(i, 1);
    });
  },
  methods: {
    ...mapMutations(["setReleasePost", "setUserinfo"]),
    //发布
    dianRelease() {
      //判断
      if (this.content !== "" || this.image.length !== 0) {
        let { name, uid, avatar } = this.uinfo;

        let optiondara = {
          name,
          uid,
          avatar,
          content: this.content,
          image: this.image,
          date: Date.now()
        };

        let option = {
          method: "POST",
          option: "/releasepost",
          data: optiondara
        };

        //显示加载中
        uni.showLoading({
          title: "加载中"
        });

        //向后台提交发布帖子数据
        releasePost(option)
          .then(({ postData, success, userinfo }) => {
            //更新vuex里的用户信息
            this.setUserinfo(userinfo);

            //更新本地缓存信息
            uni.setStorage({
              key: "userInfo",
              data: userinfo
            });

            //后台数据添加成功，关闭加载中
            uni.hideLoading();

            //弹出发布成功框
            uni.showToast({
              title: success,
              icon: "none",
              duration: 2000
            });

            //数据传入vuex
            this.setReleasePost(postData);
            //跳转页面
            uni.reLaunch({
              url: "../home/Home"
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        uni.showToast({
          title: "内容或图片不能为空!",
          icon: "none",
          duration: 2000
        });

        return;
      }
    },
    onBack() {
      let that = this;

      //判断有没有输入内容或上传图片
      if (this.content !== "" || this.image.length !== 0) {
        //是否保存本次编辑
        uni.showModal({
          title: "提示",
          content: "是否保存本次编辑?",
          success: res => {
            //是，就保存并返回上一级页面
            if (res.confirm) {
              that.saveEdit();
              that.backPage();
            } else {
              //不是,返回上一级页面并清除编辑缓存
              that.backPage();
              that.deleteStorage();
            }
          }
        });
      } else {
        this.backPage();
      }
    },
    saveEdit() {
      uni.setStorage({
        key: "contentimag",
        data: {
          content: this.content,
          image: this.image
        }
      });
    },
    backPage() {
      uni.navigateBack({
        delta: 1,
        animationType: "slide-out-bottom",
        animationDuration: 150
      });
    },
    //上传图片
    onUpimg() {
      //打开手机相册选取图片
      uni.chooseImage({
        count: 4,
        sizeType: "compressed",
        success: res => {
          let imglen = res.tempFilePaths.length;
          for (let i = 0; i < imglen; i++) {
            this.image.push(res.tempFilePaths[i]);
          }
        }
      });
    },
    //获取视高
    xiTong() {
      uni.getSystemInfo({
        success: res => {
          //查询节点信息的对象的高度
          let view = this.eleminfo(".nuvbar");
          view
            .boundingClientRect(data => {
              this.height = res.windowHeight - data.height + "px";
            })
            .exec();
        }
      });
    },
    eleminfo(element) {
      return uni
        .createSelectorQuery()
        .in(this)
        .select(element);
    },
    //初次渲染页面获取上次保存的编辑文本
    getText() {
      uni.getStorage({
        key: "contentimag",
        success: res => {
          let { content, image } = res.data;
          this.content = content;
          this.image = image;
        }
      });
    },
    //清除编辑缓存
    deleteStorage() {
      uni.removeStorage({
        key: "contentimag",
        success: res => {
          res;
        }
      });
    }
  },
  onReady() {
    //初次渲染页面获取上次保存的编辑文本
    this.getText();
  }
};
</script>

<style lang="scss" scoped>
.imageshow {
  margin-top: 40rpx;
}
.text {
  color: $uni-text-color;
  font-size: $uni-font-size-base;
  width: 100%;
}
.functionbar {
  z-index: 99;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 1rpx 0 1rpx $uni-bg-color-mask;
}
.textarea-placeholder {
  height: 100%;
}
.scroll-height {
  height: 80rpx;
}
.nuvbar {
  position: sticky;
  background: #ffffff;
  z-index: 10;
  padding: 28rpx 0;
}
.uni-common-mt {
  margin-top: 28rpx;
  height: 200rpx;
}
</style>
