<template>
  <view>
    <PostModule v-for="(item, index) in 10" :key="index" />
  </view>
</template>

<script>
import PostModule from "components/content/postmodule/PostModule";

export default {
  name: "HomePostShow",
  components: {
    PostModule
  }
};
</script>

<style scoped>
</style>