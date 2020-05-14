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
@import "./static/css/normalize.css";
@import "./static/css/animate.css";
@import "./common/css.css";
@import './uni.scss'
//图标
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.eot");
  src: url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.woff2") format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.ttf") format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_pgjvpvbvdob.svg#iconfont") format("svg");
}
</style>
