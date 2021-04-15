<!-- 购物车组件 -->
<template>
	<view>
		<!-- 购物通知 -->
		<view v-if="buycardShow" class="buycard-notify">
			<van-notice-bar mode="closeable" wrapable text="注:当前购物车中有你自己代言的特产,实际付款为帮会价。"></van-notice-bar>
		</view>
		<van-popup
			:show="buycardShow"
			closeable
			close-icon-position="top-left"
			close-icon="arrow-down"
			position="bottom"
			custom-style="height: 100%;background:#F7F7F7;padding-bottom:100upx;"
			safe-area-inset-top
			@close="onclose"
		>
			<view class="buycard-title">
				<view class="title">购物车</view>
				<view class="play-menu">
					<view>
						<van-icon size="20px" :name="resource + 'shop_ico_dele.png'"></van-icon>
						<text>清空</text>
					</view>
					<view>
						<van-icon size="22px" :name="resource + 'bh_ico_4.png'"></van-icon>
						<text>送礼</text>
					</view>
				</view>
			</view>
			<view class="buycard-goodsinfo" v-for="item in 8" :key="item">
				<view class="item-top">
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<view>
						<view>阿克苏苹果</view>
						<view>¥28.80</view>
					</view>
				</view>
				<view class="item-bottom">
					<view class="specifications">苹果碎26g*4包</view>
					<view>
						<van-icon @click="counter(-1)" size="30px" :name="resource + 'shop-remove.png'"></van-icon>
						<input type="number" v-model="number" />
						<van-icon @click="counter(1)" size="30px" :name="resource + 'shop-add.png'"></van-icon>
					</view>
				</view>
			</view>
			<!-- 底部占位 -->
			<PlaceholderHeight height="150upx"></PlaceholderHeight>
		</van-popup>
		
		<!-- 结算按钮 -->
		<view class="buycard-price-btn" v-if="buycardShow">
			<view>
				<text>¥</text>
				<text>459.30</text>
			</view>
			<view @click="uni.navigateTo({url:'/pages/business/cartToOrder'})">结算</view>
		</view>
	</view>
</template>

<script>
import PlaceholderHeight from "../public/placeholderheight.vue"
export default {
	name: 'Buycard',
	components:{
		PlaceholderHeight
	},
	data() {
		return {
			resource: this.resource,
			number: 1
		};
	},
	props: {
		buycardShow: {
			type: Boolean,
			default: false
		}
	},
	onLoad() {
		console.log(this.buycardShow, '12121');
	},
	methods: {
		onclose() {
			uni.$emit('buycardClose', false);
		},
		counter(val) {
			if (this.number + val <= 0) {
				uni.showToast({
					title: '是否删除吗？'
				});
				return;
			}
			this.number += val;
		}
	}
};
</script>

<style>
.buycard-title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 120upx;
	padding: 0 30upx 0 50upx;
}

.buycard-title .title {
	color: #000000;
	font-size: 50upx;
}
.buycard-title .play-menu {
	display: flex;
	align-items: center;
}
.buycard-title .play-menu view {
	display: flex;
	align-items: center;
}

.buycard-title .play-menu view:nth-child(1) {
	margin-right: 20upx;
	color: #666666;
	font-size: 30upx;
}
.buycard-title .play-menu view:nth-child(1) text {
	padding: 0 24upx 0 0;
	border-right: 1upx solid #cccccc;
}
.buycard-title .play-menu view:nth-child(2) {
	color: #333333;
	font-size: 30upx;
}
.buycard-goodsinfo {
	background: #ffffff;
	margin: 20upx auto 0;
	width: 90%;
	border-radius: 30upx;
	padding: 30upx 20upx;
}

.buycard-goodsinfo .item-top {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
}
.buycard-goodsinfo .item-top image {
	width: 100upx;
	height: 100upx;
	border-radius: 10upx;
}
.buycard-goodsinfo .item-top view {
	margin-left: 10upx;
}

.buycard-goodsinfo .item-top view > view:nth-child(1) {
	color: #333333;
	font-size: 36upx;
}
.buycard-goodsinfo .item-top view > view:nth-child(2) {
	color: #363636;
	font-size: 33upx;
	font-weight: 600;
}
.buycard-goodsinfo .item-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 40upx;
}
.buycard-goodsinfo .item-bottom .specifications {
	background: #f7f7f7;
	padding: 14upx;
	border-radius: 10upx;
	color: #666666;
	font-size: 30upx;
}
.buycard-goodsinfo .item-bottom view:nth-child(2) {
	display: flex;
	width: 196upx;
	align-items: center;
}
.buycard-goodsinfo .item-bottom input {
	text-align: center;
}
.buycard-notify {
	position: fixed;
	left: 5%;
	z-index: 102;
	width: 90%;
	top: 75%;
}
.buycard-price-btn {
	position: fixed;
	bottom: 60upx;
	left: 5%;
	width: 90%;
	height: 90upx;
	z-index: 102;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.buycard-price-btn view:nth-child(1) {
	width: 76%;
	height: 100%;
	background: #333333;
	display: flex;
	align-items: center;
	border-radius: 50upx 0 0 50upx;
	color: #ffcf4f;
}
.buycard-price-btn view:nth-child(1) text:nth-child(1) {
	padding-left: 30upx;
	font-size: 40upx;
}
.buycard-price-btn view:nth-child(1) text:nth-child(2) {
	font-size: 48upx;
	font-weight: 500;
	padding-left: 10upx;
}
.buycard-price-btn view:nth-child(2) {
	    width: 40%;
	    height: 100%;
	    background: #FFCF4F;
	    display: flex;
	    align-items: center;
		justify-content: center;
	    border-radius: 0 50upx 50upx 0;
	    font-size: 32upx;
	    font-weight: 500;
		color: #333333;
}
</style>
