<template>
  <view>
    <template v-if="loadData === 0">
      <van-loading type="spinner" color="#1989fa" />
    </template>
    <template v-else-if="loadData === 1">
      <!--头部作者信息-->
      <DetailPostInfo class="headinfo" :dataInfo="review.postData" />
      <!--分割线-->
      <Dividing />
      <!--最新评论-->
      <DetailPostCommentList :comment="review.comment" />
      <!--发评论-->
      <DetailPostBottomInput class="input" />
    </template>
    <template v-else>
      <div></div>
    </template>
  </view>
</template>

<script>
import Dividing from "components/content/dividing/Dividing";

import DetailPostCommentList from "./childcomps/DetailPostCommentList";
import DetailPostBottomInput from "./childcomps/DetailPostBottomInput";
import DetailPostInfo from "./childcomps/DetailPostInfo";

import { postReqData } from "@/utils/postdateil";

export default {
  components: {
    DetailPostBottomInput,
    DetailPostCommentList,
    DetailPostInfo,
    Dividing
  },
  data() {
    return {
      pid: "",
      loadData: null,
      review: {} //数据
    };
  },
  created() {},
  methods: {
    postReqData() {
      let option = {
        option: "/post/data",
        data: {
          pid: this.pid
        }
      };

      this.loadData = 0

      postReqData(option)
        .then(({ post }) => {
          this.review = post;
        })
        .catch(err => {
          this.loadData = 3
          console.log(err);
        }).finally(()=>{
          this.loadData = 1
        });
    }
  },
  onLoad(option) {
    //获取帖子id
    this.pid = option.pid;

    //帖子数据
    this.postReqData();
  }
};
</script>

<style lang="scss" scoped>
.input {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 1rpx 0 1rpx $uni-border-color;
}
.headinfo {
  background: #ffffff;
}
</style>