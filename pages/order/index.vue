<template>
	<view>
		<view class="order-top-back"></view>
		<view class="order-menu-btn">
			<view class="menu-item" @click="pageTo('/pages/order/orderList?title=待发货')">
				<image :src="resource + 'order-dfh.png'"></image>
				<view><text>待发货</text></view>
			</view>
			<view class="menu-item" @click="pageTo('/pages/order/orderList?title=已发货')">
				<image :src="resource + 'order-yfh.png'"></image>
				<view><text>已发货</text></view>
			</view>
			<view class="menu-item" @click="pageTo('/pages/order/orderList?title=退款/售后')">
				<image :src="resource + 'btl-redp-s.png'"></image>
				<view><text>退款/售后</text></view>
			</view>
			<view class="menu-item" @click="pageTo('/pages/order/orderList?title=查单')">
				<image :src="resource + 'order-chad.png'"></image>
				<view><text>查单</text></view>
			</view>
			<view class="menu-item"  @click="pageTo('/pages/order/orderList?title=评价')">
				<image :src="resource + 'order-pj.png'"></image>
				<view><text>评价</text></view>
			</view>
		</view>
		<!-- 我的提成红包入口 -->
		<view class="order-tc-hb" @click="pageTo('/pages/order/baobao')">
			<view>
				<image :src="resource + 'banghui_redpack.png'"></image>
				<text>我的包包</text>
			</view>
			<view class="jiantou">
				<text>1个</text>
				<image :src="resource + 'right-jt.png'"></image>
			</view>
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
			show: false
		};
	},
	methods: {
		pageTo(url){
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style>
.order-top-back {
	width: 100%;
	height: 275upx;
	background: url(http://zzsc.com/static/xcx/order__bg.png) no-repeat;
	background-size: cover;
}
.order-menu-btn {
	width: 84%;
	margin: -100upx auto 0;
	border-radius: 20upx;
	box-shadow: 0 0 50upx #eeeeee;
	padding: 40upx 30upx 0;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	background: #ffffff;
}
.order-menu-btn .menu-item {
	width: 30%;
	margin-bottom: 40upx;
	text-align: center;
}
.order-menu-btn::after {
	content: '';
	width: 30%;
	display: block;
}
.order-menu-btn .menu-item image {
	width: 70upx;
	height: 70upx;
}
.order-menu-btn .menu-item text {
	color: #666666;
	font-size: 28upx;
}

.order-tc-hb {
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
.order-tc-hb view > image {
	width: 50upx;
	height: 50upx;
	vertical-align: middle;
}
.order-tc-hb view > text {
	vertical-align: middle;
	padding-left: 25upx;
	font-size: 34upx;
	color: #333333;
}

.order-tc-hb > .jiantou > text {
	font-size: 30rpx;
	color: #666666;
}
.order-tc-hb > .jiantou > image {
	width: 30upx;
	height: 30upx;
}
</style>
