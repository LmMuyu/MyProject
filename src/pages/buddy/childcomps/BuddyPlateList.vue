<template>
  <view>
    <BuddyPlate v-for="(item, index) in 1" :key="index" />
  </view>
</template>

<script>
import BuddyPlate from "./BuddyPlate";
export default {
  components: {
    BuddyPlate
  }
};
</script>

<style lang="scss" scoped>
</style>