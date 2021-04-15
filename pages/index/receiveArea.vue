<!-- 自提页面 -->
<template>
	<view class="receivearea-contain">
		<view class="receivearea-title">自提设置</view>
		<view class="receivearea-shouming">
			让顾客到点自提，
			<navigator url="">操作说明></navigator>
		</view>
		<view class="receivearea-card">
			<view class="goods-name">购买的商品名称 5斤装</view>
			<view class="area-check">
				<van-radio-group v-model="radio" @change="onchange()">
					<van-radio checked-color="#f9e42c" name="1" shape="round" icon-size="28px">自提收获地址 1</van-radio>
					<van-radio checked-color="#f9e42c" name="2" shape="round" icon-size="28px">自提收获地址 2</van-radio>
				</van-radio-group>
			</view>
		</view>
		<view class="receivearea-card">
			<view class="goods-name">购买的商品名称 5斤装</view>
			<view class="area-check">
				<van-radio-group v-model="radio">
					<van-radio name="1" shape="round" icon-size="28px">自提收获地址 1</van-radio>
					<van-radio name="2" shape="round" icon-size="28px">自提收获地址 2</van-radio>
				</van-radio-group>
			</view>
		</view>
		<view class="receivearea-card">
			<view class="goods-name">购买的商品名称 5斤装</view>
			<view class="area-check">
				<van-radio-group v-model="radio">
					<van-radio name="1" shape="round" icon-size="28px">自提收获地址 1</van-radio>
					<van-radio name="2" shape="round" icon-size="28px">自提收获地址 2</van-radio>
				</van-radio-group>
			</view>
		</view>
		<!-- upx自提点按钮 -->
		<navigator hover-class="none" class="receivearea-btn" url="/pages/index/myReceiveArea">自提点管理</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			radio: ''
		};
	},
	methods: {
		onchange(e) {
			this.radio = e.detail;
		}
	}
};
</script>

<style>
.receivearea-contain {
	padding: 30upx 30upx 100upx;
	
}
.receivearea-title {
	padding-left: 20upx;
	font-size: 60upx;
	color: #000000;
	font-weight: 500;
}

.receivearea-shouming {
	margin-top: 40upx;
	margin-bottom: 40upx;
	display: flex;
	font-size: 34upx;
	color: #333333;
	padding-left: 20upx;
}
.receivearea-shouming navigator {
	color: #5a6b92;
}
.receivearea-card {
	margin-top: 30upx;
	background: #f7f7f7;
	border-radius: 20upx;
}
.receivearea-card .goods-name {
	font-size: 38upx;
	color: #333333;
	font-weight: 500;
	padding: 30upx;
	border-bottom: 1upx solid #e4e4e4;
}
.area-check {
	padding: 30upx;
}
.van-radio {
	margin-top: 20upx;
	margin-bottom: 20upx;
}

.receivearea-btn {
	width: 60%;
	line-height: 100upx;
	position: fixed;
	left: 20%;
	bottom: 40upx;
	text-align: center;
	font-size: 32upx;
	color: #333333;
	border-radius: 54upx;
	box-shadow: 2upx 3upx 26upx #d3d3d3;
	background: #ffffff;
}
</style>
