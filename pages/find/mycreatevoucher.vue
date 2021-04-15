<!-- 我作为商家生成的优惠券 -->
<template>
	<view class="mycreatevoucher-container">
		<view class="title">
			<text>优惠券</text>
			<van-button @click="toPage('/pages/find/myvoucher')" size="normal" round>我领取的</van-button>
		</view>
		<view class="detail">
			优惠券为预充值，生成券后将冻结相应金额，过期未领取的/未发放/未使用，将自动解除冻结，
			<navigator >详细说明></navigator>
		</view>
		<view class="coupon-item" v-for="item in 8" :key="item">
			<view class="left">
				<view>新年快乐大优惠</view>
				<view>生效时间：2021-04-09 23:11:22</view>
				<view>过期时间：2021-04-09 23:11:22</view>
				<view class="buynum">
					<text>已领</text>
					<text>399</text>
					<text>张，已用</text>
					<text>399</text>
					<text>张</text>
				</view>
			</view>
			<view class="right">
				<view>9999</view>
				<view>满99.01使用</view>
				<van-button round size="small" color="#FFCE4F">发放</van-button>
			</view>
		</view>
		<view class="btn-fixed">
			<van-button @click="toPage('/pages/find/createvoucher')" color="#7232dd" icon="coupon-o" size="normal" round>生成优惠券</van-button>
		</view>
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
			resource: this.resource
		};
	},
	onLoad() {},
	methods: {
		toPage(url) {
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style>
page {
	background: #edfcff;
}

.mycreatevoucher-container {
	padding: 30rpx;
}
.mycreatevoucher-container > .title {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.mycreatevoucher-container > .title > text {
	font-size: 50rpx;
	font-weight: 500;
	color: #333333;
}
.mycreatevoucher-container > .detail {
	margin-top: 20rpx;
	font-size: 34rpx;
	color: #333333;
}
.mycreatevoucher-container > .detail > navigator {
	color: #576b95;
	text-decoration: underline;
}
.btn-fixed{
	width: 100%;
	position: fixed;
	left: 0;
	bottom: 50rpx;
	text-align: center;
	
}
.coupon-item{
	margin-top: 20rpx;
	padding: 20rpx;
	border-radius: 20rpx;
	display: flex;
	justify-content: space-between;
	background: #ffffff;
	box-shadow: 0 0 20rpx #D6E7F2;
}
.coupon-item .left > view:nth-child(1){
	padding-bottom: 10rpx;
	font-size: 30rpx;
	color: #333333;
}
.coupon-item .left > view:nth-child(2),
 .coupon-item  .left > view:nth-child(3){
	font-size: 22rpx;
	color: #AFAFAF;
}
 .buynum  text:nth-child(2n+1){
	font-size: 22rpx;
	color: #AFAFAF;
}
 .buynum  text:nth-child(2n+2){
	font-size: 26rpx;
	color: #333333;
}
.coupon-item .right{
	width: 30%;
	border-left:1rpx dashed #999999;
	text-align: center;
}
.coupon-item .right  > view:nth-child(1){
	font-size: 40rpx;
	font-weight: bold;
	color: #DD5A17;
}
.coupon-item .right  > view:nth-child(1)::before{
	content: "¥";
	font-size: 20rpx;
	font-weight: bold;
	color: #DD5A17;
}
.coupon-item .right  > view:nth-child(2){
	font-size: 20rpx;
	font-weight: bold;
	color: #999999;
}
</style>
