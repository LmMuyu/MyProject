<template>
  <view>
    <ChatRecording class="ChatRecording" v-for="(item, index) in recordingList" :key="index" :recording="item" />
  </view>
</template>

<script>
import ChatRecording from "./ChatRecording";

export default {
  components: {
    ChatRecording
  },
  props: {
    recordingList: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>