<!-- 购物车结算界面 -->
<template>
	<view>
		<view class="cardtoorder-back"></view>
		<view class="cardtoorder-addrea" @click="receiveAreaShow = true">
			<van-icon name="plus" />
			<text>添加收货地址</text>
		</view>
		<view class="cardtoorder-cardlist">
			<view class="cardtoorder-goods-item" v-for="item in 8" :key="item">
				<view class="item-top">
					<view class="item-top-name">
						<view>真美味鸡排</view>
						<view>真美味鸡排整只</view>
					</view>
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
				</view>
				<view class="item-price">
					<text>¥65.00</text>
					<text>x1</text>
				</view>
				<view class="item-note">
					备注：
					<input type="text" placeholder="请输入(选填)" placeholder-style="color:#999999;" />
				</view>
			</view>
		</view>
		<view class="cardtoorder-check">
			<van-radio-group value="1" bind:change="onChange"><van-radio checked-color="#FFCF4F" name="1" icon-size="40upx">匿名下单</van-radio></van-radio-group>
		</view>
		<PlaceholderHeight height="150px"></PlaceholderHeight>
		<!-- 点击获取收货地址组件 -->
		<ReceiveArea :receiveAreaShow="receiveAreaShow"></ReceiveArea>
		<!-- 支付按钮 -->
		<view class="cardtoorder-pay-footer">
			<view class="cardtoorder-pay-btn">
				<text>支付</text>
				<text>¥328.00</text>
			</view>
		</view>
	</view>
</template>

<script>
import PlaceholderHeight from '../../components/public/placeholderheight.vue';
import ReceiveArea from '../../components/user/receiveArea.vue'
export default {
	components: {
		PlaceholderHeight,
		ReceiveArea
	},
	data() {
		return {
			resource: this.resource,
			//是否显示收货地址列表组件
			receiveAreaShow: false
		};
	},
	onLoad() {
		//关闭收货地址监听
		uni.$on('receiveAreaClose',data => {
			this.receiveAreaShow = data
		})
	},
	methods: {
		copyPhone() {
			console.log(2);
		}
	}
};
</script>

<style>
page {
	background-color: #f7f7f7;
}

.cardtoorder-back {
	width: 100%;
	height: 100upx;
	background: #ffcf4f;
}
.cardtoorder-addrea {
	width: 92%;
	height: 120upx;
	margin: -60upx auto 0;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30upx;
	background: #ffffff;
	color: #000000;
	font-size: 30upx;
}

.cardtoorder-cardlist {
	width: calc(92% - 60upx);
	margin: 0 auto;
	padding: 30upx;
	border-radius: 30upx;
	background: #ffffff;
	margin-top: 30upx;
}

.cardtoorder-goods-item {
	margin-bottom: 70upx;
}
.cardtoorder-cardlist :last-child {
	margin-bottom: 0;
}

.cardtoorder-goods-item .item-top {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cardtoorder-goods-item .item-top-name view:nth-child(1) {
	color: #333333;
	font-size: 34upx;
	font-weight: bold;
}
.cardtoorder-goods-item .item-top-name view:nth-child(2) {
	color: #999999;
	font-size: 30upx;
	padding-top: 10upx;
}
.cardtoorder-goods-item image {
	width: 90upx;
	height: 90upx;
	border-radius: 10upx;
}

.cardtoorder-goods-item .item-price {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.cardtoorder-goods-item .item-price text:nth-child(1) {
	color: #999999;
	font-size: 30upx;
}
.cardtoorder-goods-item .item-price text:nth-child(2) {
	color: #333333;
	font-size: 48upx;
	font-weight: bold;
}

.cardtoorder-goods-item .item-note {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20upx;
	color: #666666;
	font-size: 30upx;
}
.cardtoorder-goods-item .item-note input {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	color: #000000;
	font-size: 30upx;
}
.cardtoorder-check {
	margin-top: 30upx;
	padding-left: 66upx;
	color: #666666;
	font-size: 29upx;
}
.van-radio__label {
	color: #666666;
	font-size: 30upx !important;
}

.cardtoorder-pay-footer {
	width: 100%;
	height: 160upx;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	bottom: 0;
	left: 0;
	background: #ffffff;
	z-index: 10;
}
.cardtoorder-pay-btn {
	width: 50%;
	line-height: 89upx;
	border-radius: 50upx;
	background: #ffcf4f;
	text-align: center;
}

.cardtoorder-pay-btn text:nth-child(1) {
	color: #333333;
	font-size: 34upx;
	padding-right: 20upx;
}

.cardtoorder-pay-btn text:nth-child(2) {
	color: #333333;
	font-size: 30upx;
}
</style>
