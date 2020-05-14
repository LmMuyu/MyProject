<template>
	<view>
		<!-- start 搜索框  -->
		<nav></nav>
		<!--end 搜索框 -->

		<template v-if="searchResults.length === 0">
			<!-- start 头部文字 header -->
			<header><SearchForhHeadText /></header>
			<!-- end 头部文字 header -->

			<!--start 历史记录  -->
			<article><SerchForRecording class="margin-top" :recording="result" /></article>
			<!--end 历史记录  -->
		</template>

		<template v-else>
			<!--start 搜索结果  -->
			<scroll-view scroll-y :style="`height:${scrollH}`">
				<SearchForShow :list="searchResults" />
				<ButtomText />
			</scroll-view>
			<!--end 搜索结果  -->
		</template>
	</view>
</template>

<script>
import SearchForhHeadText from './childcomps/SearchForhHeadText';
import SerchForRecording from './childcomps/SearchForRecording';
import SearchForShow from './childcomps/SearchForShow';

import ButtomText from 'components/content/buttomtext/ButtomText.vue';

export default {
	name: 'searchfor',
	components: {
		SearchForhHeadText,
		SerchForRecording,
		SearchForShow,
		ButtomText
	},
	data() {
		return {
			result: [],
			searchResults: [],
			scrollH: 0
		};
	},
	created() {
		//获取系统信息
		this.systemMessage();
	},
	methods: {
		//搜索事件
		onSearch() {
			//收起软键盘
			uni.hideKeyboard();

			//开启加载中
			uni.showLoading({
				title: '加载中',
				mask: true
			});

			setTimeout(() => {
				//关闭加载中
				uni.hideLoading();
				this.searchResults.push(
					{
						uid: '88031114',
						id: '28878862',
						name: '金艳',
						date: Date.now(),
						avatar: 'http://dummyimage.com/70X70/f079f2/79f2cd&text=hebj',
						content: '做机青以度利管性六使日花共利效。'
					},
					{
						uid: '23734',
						id: '16633417',
						name: '杨秀兰',
						date: Date.now(),
						avatar: 'http://dummyimage.com/70X70/f2a979/8679f2&text=frnv',
						content: '一交来第受习同代很质第支究当明。'
					},
					{
						uid: '93614816',
						id: '54618178',
						name: '邹敏',
						date: Date.now(),
						avatar: 'http://dummyimage.com/70X70/8ff279/f279b2&text=mywh',
						content: '或不按县它队资说总无风式第置式细。'
					},
					{
						uid: '1688380',
						id: '44888132',
						name: '戴杰',
						date: Date.now(),
						avatar: 'http://dummyimage.com/70X70/79d5f2/f2eb79&text=hqso',
						content: '但下报众应风她展证完变复低处里算过。'
					},
					{
						uid: '24700833',
						id: '03954868',
						name: '文磊',
						date: Date.now(),
						avatar: 'http://dummyimage.com/70X70/c779f2/79f2a4&text=poev',
						content: '各但当至委然后带太手山应图教书分水。'
					}
				);
			}, 4000);
		},
		onSearchPrompt() {
			uni.showLoading({
				title: '搜索关键字不能为空！'
			});

			setTimeout(() => {
				uni.hideLoading();
			}, 2000);
		},
		//获取系统信息
		systemMessage() {
			uni.getSystemInfo({
				success: res => {
					this.scrollH = res.windowHeight + 'px';
				}
			});
		}
	},
	//点击搜索
	onNavigationBarSearchInputConfirmed(options) {
		if (options.text !== '') {
			this.result.push(options.text);
			//开启搜索
			this.onSearch();
		} else {
			//搜索框为为空时调用此函数
			this.onSearchPrompt();
		}
	}
};
</script>

<style scoped></style>
