<template>
  <view>
    <PostModule v-for="item in list" :key="item.uid" :dataInfo="item" />
  </view>
</template>

<script>
import PostModule from "components/content/postmodule/PostModule";

export default {
  components: {
    PostModule
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>