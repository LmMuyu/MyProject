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
/*图标*/
@font-face {
  font-family: "iconfont"; /* project id 1810160 */
  src: url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.eot");
  src: url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.eot?#iefix")
      format("embedded-opentype"),
    url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.woff2")
      format("woff2"),
    url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.woff") format("woff"),
    url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.ttf")
      format("truetype"),
    url("https://at.alicdn.com/t/font_1810160_ll4sy68yd1r.svg#iconfont")
      format("svg");
}
</style>
