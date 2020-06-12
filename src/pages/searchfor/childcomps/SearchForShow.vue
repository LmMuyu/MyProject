<template>
  <view class="show">
    <view v-for="(item, index) in list" :key="index">
      <Card class="bakc" :postData="item" @openPostDateil="openPostDateil" />
    </view>
  </view>
</template>

<script>
import Card from "components/content/card/Card";

export default {
  name: "SearchForShow",
  components: {
    Card
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    openPostDateil(postid) {
      this.$emit("openPostDateil", postid);
    }
  }
};
</script>

<style scoped>
.bakc {
  background: #ffffff;
}
</style>
