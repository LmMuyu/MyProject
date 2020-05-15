<template>
	<view class="community">
		<!--头部分类栏-->
		<CommunityHeadText class="HeadText" :classification="classification" @onIndex="onIndex" ref="CommunityHeadText" />
		<swiper :style="`height:${height}`" :current="index" @change="change">
			<!--话题-->
			<swiper-item>sdawdaw</swiper-item>
			<!--社区-->
			<swiper-item>dawda</swiper-item>
		</swiper>
	</view>
</template>

<script>
import CommunityHeadText from './childcomps/CommunityHeadText.vue';

export default {
	name: 'Community',
	components: {
		CommunityHeadText
	},
	data() {
		return {
			classification: [
				{
					name: '话题'
				},
				{
					name: '社区'
				}
			],
			height: 0,
			index:0
		};
	},
	mounted() {
		//获取视高
		this.systemMessage();
	},
	methods: {
		//获取视高
		systemMessage() {
			//获取系统信息
			uni.getSystemInfo({
				success: res => {
					//查询节点信息的对象
					const query = uni.createSelectorQuery().in(this);
					query
						.select('.HeadText')
						.boundingClientRect(data => {
							this.height = res.windowHeight - res.statusBarHeight - data.height + 'px';
						})
						.exec();
				}
			});
		},
		//左右滑屏切换头部分类栏也一起切换
		change({ detail }) {
			this.$refs.CommunityHeadText.textindex = detail.current;
		},
		onIndex(i){
			this.index = i
		}
	}
};
</script>

<style lang="scss" scoped></style>
