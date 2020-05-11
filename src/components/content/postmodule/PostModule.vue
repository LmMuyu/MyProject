<template>
	<view class="postmodule">
		<view>
			<image src="static/img/tabbar/home.png" mode="" class="img-to"></image>
		</view>
		<view class="xinxi">
			<view>名称</view>
			<view>2002-1.-4555</view>
		</view>
		<view class="guanzhu">
			<span>关注</span>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style scoped>
.img-to{
	width: 70rpx;
	height: 70rpx;
	background: red;
}
.postmodule{
	display: flex;

}
.xinxi{
	flex: 1;
	display: flex;
	flex-direction: column;
	margin-left: 10rpx;
}
.xinxi > view:nth-child(1){
	font-weight: bold;
	font-size: 16px;
}

.xinxi > view:nth-child(2){
	font-size: 14rpx;
}
.guanzhu{
		flex: 1;

	display: flex;
	justify-content: flex-end;
	align-items: center;
}
</style>
