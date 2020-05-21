<template>
  <view>
    <PostModule
      v-for="(item, index) in list"
      :key="index"
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
    openPostDetail() {
      this.$emit("openDetail")
    }
  }
};
</script>

<style scoped>
</style>