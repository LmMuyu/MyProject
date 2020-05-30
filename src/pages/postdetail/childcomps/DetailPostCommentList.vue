<template>
  <view>
    <DetailPostCommentShow
      class="comment"
      v-for="(item, index) in comment"
      :key="index"
      :postData="item"
    />
  </view>
</template>

<script>
import DetailPostCommentShow from "./DetailPostCommentShow";

export default {
  components: {
    DetailPostCommentShow
  },
  props: {
    comment: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 37px;
}
</style>