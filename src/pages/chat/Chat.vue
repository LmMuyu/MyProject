<template>
  <view>
    <!--聊天记录列表-->
    <ChatREcordingLsit :recordingList="chat" />
    <!--发送消息-->
    <ChatButtomSend class="chat" />
  </view>
</template>

<script>
import ChatREcordingLsit from "./childcomps/ChatREcordingLsit";
import ChatButtomSend from "./childcomps/ChatButtomSend";

export default {
  components: {
    ChatREcordingLsit,
    ChatButtomSend
  },
  data() {
    return {
      chat: [
        {
          release: 1,
          uid: "88031114",
          id: "28878862",
          name: "金艳",
          date: Date.now(),
          avatar:
            "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4018557288,1217151095&fm=26&gp=0.jpg",
          content: "做机青以度利管性六使日花共利效。"
        },
        {
          release: 2,
          uid: "23734",
          id: "16633417",
          name: "杨秀兰",
          date: Date.now(),
          avatar:
            "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1713396441,1487163637&fm=26&gp=0.jpg",
          content:
            "一交来第受习同代很质第支究当明很可能南康家具济南济南就看见和v皇家海军北海北京保护基金会。"
        }
      ]
    };
  },
  mounted() {
    this.$bus.$on("Send", val => {
      let arr = {
        release: 2,
        uid: "23734",
        id: "16633417",
        name: "酷酷酷",
        date: Date.now(),
        avatar:
          "http://img5.imgtn.bdimg.com/it/u=4256979178,4254105557&fm=26&gp=0.jpg",
        content: val
      };

      this.chat.push(arr);
    });
  }
};
</script>

<style lang="scss" scoped>
.chat {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>