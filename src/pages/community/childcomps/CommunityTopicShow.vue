<template>
  <view>
    <CommunityTopic @click.native="toDateil" v-for="(item, index) in 10" :key="index" />
  </view>
</template>

<script>
import CommunityTopic from "./CommunityTopic";

export default {
  components: {
    CommunityTopic
  },
  methods:{
    toDateil(){
      this.$emit("toDateil")
    }
  }
};
</script>

<style lang="scss" scoped>
</style>