<template>
	<view v-for="(item, index) in recording" :key="index"></view>
</template>

<script>
export default {
	name: 'SerchForRecording',
	props: {
		recording: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style></style>
