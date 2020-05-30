<template>
  <view>
    <CommunityTopic @click.native="toDateil" v-for="(item, index) in updated" :key="index" :updatedShow="item" />
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
    toDateil() {
      this.$emit("toDateil");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>