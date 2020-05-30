<template>
  <view>
    <PostModule
      v-for="item in list"
      :key="item.uid"
      :dataInfo="item"
      @openPostDetail="openPostDetail"
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
      this.$emit("openDetail",Pid);
    }
  }
};
</script>

<style scoped>
</style>