<template>
	<view class="function flex flex-a-c">
		<view class="iconfont iamge">&#xe61d;</view>
		<view class="iconfont image" @click="onUploadImage">&#xe653;</view>
		<view class="rigth">发送</view>
	</view>
</template>

<script>
export default {
	name: 'ReleasePageFunction',
	methods:{
		//上传图片
		onUploadImage(){
			this.$emit("onUploadImage")
		}
	}
};
</script>

<style lang="scss" scoped>
.function {
	height: 82rpx;
	width: 100%;
}

.iconfont {
	font-family: 'iconfont' !important;
	font-size: $uni-img-size-base;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.4rpx;
	-moz-osx-font-smoothing: grayscale;
}
.image {
	margin: 0 $uni-spacing-row-lg;
}
.rigth {
	margin-left: auto;
	margin-right: $uni-spacing-row-sm;
	background: #74b9ff;
	border-radius: $uni-border-radius-sm;
	padding: $uni-border-radius-sm;
}
</style>
