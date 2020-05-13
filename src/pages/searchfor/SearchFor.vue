<template>
	<view>
		<!-- start 头部文字 header -->
		<header><SearchForhHeadText /></header>
		<!-- end 头部文字 header -->
	</view>
</template>

<script>
import SearchForhHeadText from './childcomps/SearchForhHeadText';
import SerchForRecording from './childcomps/SearchForRecording';

export default {
	name: 'searchfor',
	components: {
		SearchForhHeadText,
		SerchForRecording
	},
	data() {
		return {};
	}
};
</script>

<style scoped></style>
