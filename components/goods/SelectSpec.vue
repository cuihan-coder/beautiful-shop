<!-- 选择商品规格 -->
<template>
	<view>
		<van-popup
			:show="selectSpecShow"
			closeable
			close-icon="cross"
			round="true"
			position="bottom"
			custom-style="height: 70%;background:#ffffff;"
			safe-area-inset-top
			@close="onclose"
		>
			<view class="selectspec-container">
				<view class="title">选择规格</view>
				<view v-if="isHelpBuy" class="selectspec-dxsm">
					<van-icon size="14" color="#D9D9D9" name="warning-o" />
					代客下单为帮会价。
				</view>
				<scroll-view scroll-y="true" style="width: 94%;height: 800upx;margin: 0 auto 130upx;">
					<view class="selectspec-item">
						<text>185核桃15kg真相</text>
						<view class="selectspec-item-price">
							<view>¥488.60</view>
							<view v-if="isHelpBuy">零售价：500.00</view>
						</view>
					</view>
					<view class="selectspec-item selectspec-active">
						<text>185核桃15kg真相</text>
						<view class="selectspec-item-price">
							<view>¥488.60</view>
							<view v-if="isHelpBuy">零售价：500.00</view>
						</view>
					</view>
					<view class="selectspec-item" v-for="item in 10" :key="item">
						<text>185核桃15kg真相</text>
						<view class="selectspec-item-price">
							<view>¥488.60</view>
							<view v-if="isHelpBuy">零售价：500.00</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 底部按钮 -->
			<view class="selectspec-footer-btn">
				<view @click="buycardShow = true" class="circle"><van-icon :name="resource + 'buycard.png'" info="99" size="40px" /></view>
				<view class="selectspec-card">加购物车</view>
				<view class="receive-add-order">直接下单</view>
			</view>
		</van-popup>
	</view>
</template>

<script>
import PlaceholderHeight from '../public/placeholderheight.vue';
export default {
	name: 'SelectSpec',
	components: {
		PlaceholderHeight
	},
	data() {
		return {
			resource: this.resource
		};
	},
	props: {
		selectSpecShow: {
			type: Boolean,
			default: false
		},
		//是否是代客下单
		isHelpBuy: {
			type: Boolean,
			default: false
		}
	},
	onLoad() {
		console.log(this.selectSpecShow, '12121');
	},
	methods: {
		onclose() {
			uni.$emit('selectSpecShowClose', false);
		},
		onAdd() {},
		onEdit() {}
	}
};
</script>

<style>
.selectspec-container {
}

.selectspec-container .title {
	padding: 40upx;
	color: #000000;
	font-size: 50upx;
	font-weight: bold;
}

.selectspec-dxsm {
	display: inline-flex;
	align-items: center;
	padding-left: 30upx;
	color: #999999;
	font-size: 26upx;
}
.selectspec-item {
	display: flex;
	align-items: center;
	background: #f7f7f7;
	margin-top: 20upx;
	padding: 52upx 30upx;
	border-radius: 30upx;
	color: #333333;
	font-size: 30upx;
	font-weight: bold;
}

.selectspec-active {
	background-image: url(http://zzsc.com/static/xcx/btn_sele.png);
	background-position: right 30upx center;
	background-size: 50upx 50upx;
	background-repeat: no-repeat;
	background-color: #fff2d1;
	border: 1upx solid #ffcf4f;
}

.selectspec-item text:nth-child(1) {
	padding-right: 60upx;
	width: 55%;
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.selectspec-footer-btn {
	width: 100%;
	position: fixed;
	bottom: 24upx;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.selectspec-footer-btn .circle {
	width: 100upx;
	height: 100upx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	box-shadow: 0upx 0upx 30upx #f1f1f1;
	background: #ffffff;
}
.selectspec-card {
	width: 250upx;
	line-height: 80upx;
	background: #ffffff;
	box-shadow: 0 0 30upx #f1f1f1;
	text-align: center;
	border-radius: 96upx;
	color: #333333;
	font-size: 35upx;
}
.selectspec-item-price view:nth-child(2) {
	color: #b0b0b0;
	font-size: 23upx;
}
.receive-add-order {
	width: 250upx;
	line-height: 80upx;
	background: #ffcf4f;
	box-shadow: 0 0 30upx #f1f1f1;
	text-align: center;
	border-radius: 96upx;
	color: #333333;
	font-size: 35upx;
}
</style>
