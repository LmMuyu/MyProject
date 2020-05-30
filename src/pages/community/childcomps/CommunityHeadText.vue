<template>
	<view class="CommunityHeadText flex-ja-c text">
		<view :class="{ active: index == textindex }" v-for="(item, index) in classification" :key="index" @click="onIndex(index)">{{ item.name }}</view>
	</view>
</template>

<script>
export default {
	name: 'CommunityHeadText',
	props: {
		//标签
		classification: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			textindex: 0
		};
	},
	methods: {
		//点击分类切换指定分类与滑屏
		onIndex(i) {
			this.textindex = i;
			this.$emit('onIndex', i);
		}
	}
};
</script>

<style lang="scss" scoped>
.active {
	color: #3498db;
	font-size: 38rpx;
}
.text {
	color: $uni-text-color;
	font-size: $uni-font-size-base;
}
.text > view {
	margin: 0 $uni-spacing-row-sm;
}
.CommunityHeadText {
	box-shadow: 0 -1rpx 1rpx $uni-bg-color-mask;
	padding: 48rpx 0 8rpx 0;
	background: #ffffff;
}
</style>
