<template>
  <view>
    <CommunityTopic
      @click.native="toDateil(item.topicId)"
      v-for="(item, index) in updated"
      :key="index"
      :updatedShow="item"
    />
  </view>
</template>

<script>
import CommunityTopic from "./CommunityTopic";

export default {
  components: {
    CommunityTopic
  },
  props: {
    updated: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    toDateil(pid) {
      this.$emit("toDateil",pid);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>