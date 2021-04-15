<!-- 拆包记录 -->
<template>
	<view>
		<view class="cb-tip">当前只显示最近100条记录</view>
		<view class="cb-item" v-for="item in 10" :key="item">
			<view class="left">
				<image src="../../static/image/find-click.png"></image>
				<view class="center">
					<view>客户包</view>
					<view>
						<text>拆包时间：</text>
						<text>2021-04-12 13:50:59</text>
					</view>
				</view>
			</view>
			<view class="cb-right">
				<text>15.00</text>
				<van-icon name="arrow"></van-icon>
			</view>
		</view>
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
	methods: {}
};
</script>

<style>
.cb-tip {
	padding: 20rpx 0;
	font-size: 24rpx;
	color: #999;
	background: #f7f7f7;
	text-align: center;
}
.cb-item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20rpx 15rpx;
	border-bottom: 1rpx solid #f2f2f2;
}
.cb-item  > view:nth-child(1) > image {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
}
.cb-item  > view:nth-child(1){
	display: flex;
	align-items: center;
}
.cb-item  > view:nth-child(1) .center {
	padding-left: 20rpx;
}
.cb-item > view:nth-child(1) .center > view:nth-child(1) {
	font-size: 30rpx;
	font-weight: bold;
	color: #000;
}
.cb-item > view:nth-child(1) .center > view:nth-child(2) > text:nth-child(1) {
	font-size: 26rpx;
	color: #999;
}
.cb-item > view:nth-child(1) .center > view:nth-child(2) > text:nth-child(2) {
	font-size: 26rpx;
	color: #000000;
}
.cb-right > text {
	font-size: 50rpx;
	font-weight: bold;
	color: #000;
}

.cb-right > text::after {
	content: '元';
	font-size: 30rpx;
	font-weight: bold;
	color: #000;
}
</style>
