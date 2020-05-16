<template>
  <view class="CommunityPostShow">
    <view v-for="item in data" :key="item.id">
      <PostModule :dataInfo="item"/>
    </view>
  </view>
</template>

<script>
import PostModule from "components/content/postmodule/PostModule";

export default {
  name: "CommunityPostShow",
  components: {
    PostModule
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style  scoped>
</style>