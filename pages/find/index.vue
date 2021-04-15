<template>
	<view class="findindex-app">
		<view class="findindex-banghui">
			<view class="title">
				<van-icon size="50rpx" :name="resource + 'quanzi.png'"></van-icon>
				<text>帮会圈</text>
			</view>
			<!-- 商品的滚动 -->
			<swiper class="findindex-swapper" autoplay="true" interval="5000" circular="true" vertical="true">
				<swiper-item @click="toPage('/pages/find/banghuilist')" class="findindex-swapperitem" v-for="item in 4" :key="item">
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<view class="date-time">
						<view>
							<text>帮会圈</text>
							<text>5天前</text>
						</view>
						<view>
							<text>25</text>
							<text>/3月新品</text>
						</view>
					</view>
					<view class="goods-name">鸡肉开始麦了</view>
				</swiper-item>
			</swiper>
			<swiper @click="toPage('/pages/find/readLog')" class="findindex-swapper-read" autoplay="true" interval="3000" circular="true" vertical="true">
				<swiper-item class="ffindindex-swapper-read-item" v-for="item in 4" :key="item">
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<view class="read-info">
						<view>
							<text>差不多先生</text>
							<text>本周</text>
						</view>
						<text>看了：新疆什么什么产品</text>
					</view>
					<image class="jiantou" :src="resource + 'right-jt.png'"></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 我的提成红包入口 -->
		<view class="findindex-into" @click="toPage('/pages/find/mycreatevoucher')">
			<view >
				<image :src="resource + 'youhuiquan.png'"></image>
				<text>优惠券</text>
			</view>
			<image :src="resource + 'right-jt.png'"></image>
		</view>	
		<!-- 底部菜单 -->
		<pubFooter></pubFooter>
	</view>
</template>

<script>
	import pubFooter from '../../components/public/footer.vue';
	
export default {
	components: {
		pubFooter
	},
	data() {
		return {
			resource: this.resource,
			
		};
	},
	onLoad() {},
	methods: {
		toPage(url){
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style>
page {
	background-image: linear-gradient(#ffcf50, #ffdb84, #ffdb84, #ffffff, #ffffff);
}
findindex-app {
	padding: 30upx;
}
.findindex-banghui {
	width: 87%;
	margin: 140upx auto 0;
	padding: 30upx 20rpx;
	background: #ffffff;
	border-radius: 20rpx;
}
.findindex-banghui .title {
	display: flex;
	align-items: center;
	margin-bottom: 40upx;
}
.findindex-banghui .title > text {
	padding-left: 24rpx;
	color: #000000;
	font-size: 33rpx;
}
.findindex-swapper {
	height: 500upx;
}
.findindex-swapperitem > image {
	width: 100%;
	height: 350upx;
	border-radius: 20upx;
}
.findindex-swapperitem > .date-time {
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
}
.findindex-swapperitem > .date-time > view:nth-child(1) text:nth-child(1) {
	color: #999999;
	font-size: 30rpx;
	padding-right: 20rpx;
}
.findindex-swapperitem > .date-time > view:nth-child(1) text:nth-child(2) {
	color: #cccccc;
	font-size: 26rpx;
}
.findindex-swapperitem > .date-time > view:nth-child(2) text:nth-child(1) {
	color: #999999;
	font-size: 60rpx;
	font-weight: bold;
}
.findindex-swapperitem > .date-time > view:nth-child(2) text:nth-child(2) {
	color: #999999;
	font-size: 30rpx;
	font-weight: bold;
}

.findindex-swapperitem > .goods-name {
	color: #333333;
	font-size: 40rpx;
	font-weight: bold;
}
.findindex-swapper-read {
	height: 140rpx;
	padding-left: 20rpx;
	margin-top: 40rpx;
	border-radius: 20rpx;
	position: relative;
	background-color: #f7f7f7;
}

.ffindindex-swapper-read-item {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.ffindindex-swapper-read-item .jiantou {
	width: 30rpx;
	height: 30rpx;
	position: absolute;
	right: 20rpx;
	top: 56rpx;
}
.ffindindex-swapper-read-item > image {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
.ffindindex-swapper-read-item .read-info > view:nth-child(1) > text:nth-child(1) {
	color: #333333;
	font-size: 30rpx;
	padding-left: 20rpx;
}

.ffindindex-swapper-read-item .read-info > view:nth-child(1) > text:nth-child(2) {
	color: #999999;
	font-size: 22rpx;
	padding-left: 22rpx;
}

.ffindindex-swapper-read-item .read-info > text {
	color: #999999;
	font-size: 22rpx;
	padding-left: 22rpx;
}


.findindex-into {
	width: 82%;
	margin: 40upx auto 0;
	padding: 36upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 20upx;
	box-shadow: 0 0 50upx #eeeeee;
	background: #ffffff;
}
.findindex-into view > image {
	width: 50upx;
	height: 50upx;
	vertical-align: middle;
}
.findindex-into view > text {
	vertical-align: middle;
	padding-left: 25upx;
	font-size: 34upx;
	color: #333333;
}

.findindex-into image {
	width: 30upx;
	height: 30upx;
}
</style>
