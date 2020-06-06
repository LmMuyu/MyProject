<template>
  <view>
    <PostModule
      v-for="item in list"
      :key="item.postId"
      :dataInfo="item"
      @openPostDetail="openPostDetail"
      @point="dianPoint"
    />
  </view>
</template>

<script>
import PostModule from "components/content/postmodule/PostModule";

export default {
  name: "HomePostShow",
  components: {
    PostModule
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    datanum: {
      type: Number,
      default: 0
    }
  },
  methods: {
    openPostDetail(Pid) {
      this.$emit("openDetail", Pid);
    },
    dianPoint(features) {
      this.$emit("dianPoint", features);
    }
  }
};
</script>

<style scoped>
</style>