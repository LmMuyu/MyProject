<script>
export default {
  onLaunch: function() {},
  onShow: function() {},
  onHide: function() {},
  onError(err) {
    err;
  }
};
</script>

<style>
/*每个页面公共css */
@import "./uni.scss";
@import "./common/css.css";
@import "./static/css/animate.css";
@import "./static/css/normalize.css";
/* 头条小程序需要把 iconfont 样式放到组件外 */
@import "components/content/m-input/m-icon/m-icon.css";
/*图标*/
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.eot");
  src: url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.woff2") format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_m23qzxptsm.svg#iconfont")
      format("svg");
}


</style>