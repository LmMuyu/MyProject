<template>
  <view>
    <!--用户信息-->
    <PersonalSpaceHeadInfo :basic="basicInfo" />
    <!--标签栏-->
    <PersonalSpaceTab @switchTab="switchTab" />
    <!--信息展示-->
    <PersonalSpaceHomePage :info="basicuserinfo" v-if="activeIndex === 0" />
    <!--帖子-->
    <PersonalSpacePostShow v-else-if="activeIndex === 1" />
  </view>
</template>

<script>
import PersonalSpaceHeadInfo from "./childcomps/PersonalSpaceHeadInfo";
import PersonalSpaceHomePage from "./childcomps/PersonalSpaceHomePage";
import PersonalSpacePostShow from "./childcomps/PersonalSpacePostShow";
import PersonalSpaceTab from "./childcomps/PersonalSpaceTab";

import { mapGetters } from "vuex";

export default {
  components: {
    PersonalSpaceHeadInfo,
    PersonalSpaceHomePage,
    PersonalSpacePostShow,
    PersonalSpaceTab
  },
  data() {
    return {
      activeIndex: 0, //切换展示区域
      uinfo: {} //用户信息
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
    basicInfo() {
      class basic {
        constructor({ avatar }) {
          this.avatar = avatar;
        }
      }
      return new basic(this.uinfo);
    },
    basicuserinfo() {
      class userinfo {
        constructor({ uid, birthday, address }) {
          this.uid = uid;
          this.birthday = birthday;
          this.address = address;
        }
      }

      return new userinfo(this.uinfo);
    }
  },
  mounted() {
    this.uinfo = this.getUserInfo;
  },
  methods: {
    switchTab(i) {
      this.activeIndex = i;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>