<template>
	<view id="home">
		<!-- start 导航栏 header -->
		<header>
			<scroll-view scroll-x class="scroll-X">
				<WucTab :tab-list="tabList" tab-class="text-class" :tabCur.sync="TabCur" @change="tabChange" class="scroll-con" ref="wuctab" />
			</scroll-view>
		</header>
		<!-- end 导航栏 header -->

		<!--start 滑屏 article-->
		<article>
			<span>{{ height }}</span>
			<swiper :current="TabCur" :style="`height:${height}`" @change="change" class="swiper-ml">
				<swiper-item v-for="(item, index) in tabList" :key="index">
					<scroll-view scroll-y :style="`height:${height}`" @scrolltolower="scrolltolower(index)">
						<HomePostShow :list="tabList" :datanum="datanum" />
						<HomeUpLoading :text="text" />
					</scroll-view>
				</swiper-item>
			</swiper>
		</article>
		<!--start 滑屏 article-->
	</view>
</template>

<script>
/**
 * 公共组件
 * */
import WucTab from 'components/wuc-tab/wuc-tab.vue';

/**
 * 子组件
 * **/
import HomeUpLoading from './childcomps/HomeUpLoading';
import HomePostShow from './childcomps/HomePostShow';

/**
 * 方法
 * **/
import { homePlateData } from 'api/home';

export default {
	name: 'home',
	components: {
		HomeUpLoading,
		HomePostShow,
		WucTab
	},
	data() {
		return {
			TabCur: 0,
			datanum: 20,
			height: 0,
			text: '上拉加载更多',
			tabList: [{ name: '精选' }, { name: '订阅' }, { name: '活动' }, { name: '信息' }, { name: '排行' }, { name: '世界' }, { name: '百科' }]
		};
	},
	created() {
		this.homePlateData();
	},
	mounted() {},
	methods: {
		//获取屏幕视高
		screenHeight() {
			let that = this;

			uni.getSystemInfo({
				success: function(res) {
					that.height = res.windowHeight - that.$refs.wuctab.$el.offsetHeight + 'px';
				}
			});
		},
		//板块数据请求
		homePlateData() {
			homePlateData('featured')
				.then(vlaue => {
					console.log(vlaue);
				})
				.catch(err => {
					err;
				});
		},
		//点击跳到指定滑动屏
		tabChange(index) {
			this.TabCur = index;
		},
		//屏幕左右滑动，导航栏也滑动
		change({ detail }) {
			this.tabChange(detail.current);
		},
		//上拉加载
		scrolltolower(i) {
			if (this.text !== '上拉加载更多') return;

			this.text = '正在加载中...';

			setTimeout(() => {
				this.text = '上拉加载更多';
				this.datanum += 10;
			}, 4000);
		}
	},
	//停止下拉刷新
	onPullDownRefresh() {
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 5000);
	},
	//点击搜索框跳转
	onNavigationBarSearchInputClicked() {
		//在起始页面跳转到SearchFor页面
		uni.navigateTo({
			url: '../searchfor/SearchFor',
			animationType: 'slide-in-right',
			animationDuration: 300
		});
	},
	onReady() {
		this.screenHeight();
	}
};
</script>

<style scoped>
.text-class {
	background: #f1f2f6;
}
.scroll-X {
	width: 100%;
	white-space: nowrap;
}
.scroll-con {
	display: inline-block;
	padding: 6px;
}
.swiper-ml {
	margin: 0 8rpx;
}
</style>
