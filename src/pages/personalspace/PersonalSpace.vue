<template>
  <view>
    <!--用户信息-->
    <PersonalSpaceHeadInfo :basic="basicInfo" />
    <!--标签栏-->
    <PersonalSpaceTab @switchTab="switchTab" />
    <!--信息展示-->
    <PersonalSpaceHomePage :info="basicuserinfo" v-if="activeIndex === 0" />
    <!--帖子-->
    <PersonalSpacePostShow v-else-if="activeIndex === 1" :postData="upost" />
  </view>
</template>

<script>
import PersonalSpaceHeadInfo from "./childcomps/PersonalSpaceHeadInfo";
import PersonalSpaceHomePage from "./childcomps/PersonalSpaceHomePage";
import PersonalSpacePostShow from "./childcomps/PersonalSpacePostShow";
import PersonalSpaceTab from "./childcomps/PersonalSpaceTab";

import { postUserPost } from "@/utils/personalspace";
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
      uinfo: {}, //用户信息
      upost: []
    };
  },
  computed: {
    ...mapGetters(["getUserInfo"]),
    //用户基本信息
    basicInfo() {
      class basic {
        constructor({ avatar }) {
          this.avatar = avatar;
        }
      }
      return new basic(this.uinfo);
    },
    //用户详细信息
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
    switchTab({ i, spacetab }) {
      this.activeIndex = i;

      let option = {
        option: "/personalspace",
        data: {
          uid: this.uinfo.uid,
          spacetab
        }
      };

      //请求信息
      postUserPost(option)
        .then(value => {
          switch (spacetab) {
            //帖子
            case "post":
              this.upost = value.posts.map(({ postData }) => postData);
              
              break;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>