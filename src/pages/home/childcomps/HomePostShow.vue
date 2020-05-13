<template>
  <view>
    <PostModule v-for="(item, index) in datanum" :key="index"  />
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
  }
};
</script>

<style scoped>
</style>