<template>
	<view>
		<!-- start 内容  -->
		<nav></nav>
		<!--end 内容 
 -->
		<!-- start 头部文字 header -->
		<header><SearchForhHeadText /></header>
		<!-- end 头部文字 header -->

		<template v-if="!searchResults.length !== 0">
			<!--start 历史记录  -->
			<article><SerchForRecording class="margin-top" :recording="result" /></article>
			<!--end 历史记录  -->
		</template>

		<template v-else>
			<!--start 搜索结果  -->
			<PostModule />
			<!--end 搜索结果  -->
		</template>
	</view>
</template>

<script>
import PostModule from 'components/content/postmodule/PostModule';

import SearchForhHeadText from './childcomps/SearchForhHeadText';
import SerchForRecording from './childcomps/SearchForRecording';

export default {
	name: 'searchfor',
	components: {
		SearchForhHeadText,
		SerchForRecording,
		PostModule
	},
	data() {
		return {
			result: [],
			searchResults: []
		};
	},
	//点击搜索
	onNavigationBarSearchInputConfirmed(options) {
		this.result.push(options.text);

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
	}
};
</script>

<style scoped></style>
