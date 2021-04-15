<!-- 我的红包列表 -->
<template>
	<view>
		<view class="bb-youlai"><image :src="resource + 'redp_btn2.png'"></image></view>
		<view class="bb-tip">
			<van-icon name="info-o" size="30rpx" />
			<text>订单发货次日才可拆包！明细请进订单详情查看！</text>
		</view>
		<view class="bb-list">
			<view class="bb-item" v-for="item in 7" :key="item">
				<view>客户包</view>
				<view>夏木</view>
				<view><image src="../../static/image/find-click.png"></image></view>
				<image :src="resource + 'redp_ico_big.png'"></image>
			</view>
		</view>
		<image @click="pageTo('/pages/order/chaibao')" class="bb-wdbb-rk" :src="resource + 'redp_btn_1his.png'"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			resource: this.resource,
			show: false
		};
	},
	onLoad(Option) {
		uni.setNavigationBarTitle({
			title: Option.title
		});
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
.bb-youlai {
	height: 80rpx;
	margin-top: 20rpx;
	text-align: center;
}
.bb-youlai image {
	width: 50%;
	height: 100%;
}
.bb-tip {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20rpx;
	font-size: 24rpx;
	color: #999;
}
.bb-list {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 30rpx;
}

.bb-list::after{
	content: '';
	display: block;
	width: 30%;
}

.bb-item {
	position: relative;
	width: 30%;
	padding: 40rpx 0 20rpx;
	margin-bottom: 30rpx;
	border-radius: 10rpx;
	background: #d75648;
	text-align: center;
}
.bb-item > view:nth-child(1) {
	font-size: 36rpx;
	font-weight: bold;
	color: #ffedb8;
}
.bb-item > view:nth-child(2) {
	padding: 20rpx 0 20rpx;
	font-size: 26rpx;
	font-weight: bold;
	color: #ffedb8;
}
.bb-item > view:nth-child(3) > image {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
.bb-item > image {
	z-index: 10;
	position: absolute;
	top: 41%;
	left: 10%;
	width: 80%;
	height: 100rpx;
}
.bb-wdbb-rk{
	z-index: 100;
	position: fixed;
	right: 20rpx;
	bottom: 200rpx;
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	box-shadow: 0 0 10rpx #d3d3d3;
}
</style>
