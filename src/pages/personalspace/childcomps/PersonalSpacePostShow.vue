<template>
  <view>
    <PersonalSpacePost v-for="(item, index) in postData" :key="index" :dataInfo="item" />
  </view>
</template>

<script>
import PersonalSpacePost from "./PersonalSpacePost";

export default {
  components: {
    PersonalSpacePost
  },
  props: {
    postData: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>