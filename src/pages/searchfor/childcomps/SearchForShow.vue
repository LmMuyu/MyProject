<template>
  <view class="show">
    <view v-for="(item, index) in list" :key="index">
      <PostModule :dataInfo="item" />
    </view>
  </view>
</template>

<script>
import PostModule from "components/content/postmodule/PostModule.vue"

export default {
  name: "SearchForShow",
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

<style scoped>
</style>
