<template>
	<view class="imageshow flex">
			<view v-for="(item, index) in imagelist" :key="index" class="flex">
				<image class="image" :src="item" mode="aspectFill" />
				<view class="iconfont position">&#xe6be;</view>
			</view>
	</view>
</template>

<script>
export default {
	name: 'ReleasePageImageShow',
	props: {
		imagelist: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
	
	},
	methods: {
	
	}
};
</script>

<style lang="scss" scoped>
.imageshow {
	display: flex;
	flex-wrap: wrap;
}
.image {
	max-width: 350rpx;
	padding: $uni-spacing-row-sm;
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 38rpx;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.4rpx;
	-moz-osx-font-smoothing: grayscale;
}
.position {
	position: absolute;
	right: 0;
	top: 0;
}
</style>
