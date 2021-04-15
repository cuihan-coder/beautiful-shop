<!-- 帮会圈 -->
<template>
	<view class="banghuilist-container">
		<!-- 产品的 -->
		<view class="banghuilist-product">
			<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			<view class="title">
				<view>
					<text>25</text>
					<text>/3月新品</text>
				</view>
				<text>15:39:59</text>
			</view>
			<view class="pics">
				<text>酸奶巴旦木/巧克力巴旦木</text>
				<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			</view>
		</view>
		<!-- 首杀的 -->
		<view class="banghuilist-firstorder">
			<van-icon size="40rpx" color="#D9D9D9" name="question" class="question" />
			<view class="shousha">今日首杀!</view>
			<!-- 用户图像 -->
			<image class="headimgurl" src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			<view class="busname">店铺名称 用户名称13575221167</view>
			<view class="sales">
				<view class="pics">
					<!-- 产品图片 -->
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<text>酸奶巴旦木/巧克力巴旦木</text>
				</view>
				<view>03-26 08:44:57</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			resource: this.resource
		};
	},
	onLoad() {},
	methods: {}
};
</script>

<style>
.banghuilist-container {
	width: calc(100% - 40upx);
	padding: 20upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fffffff;
}
.banghuilist-product {
	width: 100%;
	margin-bottom: 30rpx;
	border-radius: 20upx;
	box-shadow: 0 0 30upx #d3d3d3;
}

.banghuilist-product > image {
	width: 100%;
	border-radius: 20upx;
}

.banghuilist-product .title {
	padding: 20upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: baseline;
}
.banghuilist-product .title > view:nth-child(1) > text:nth-child(1) {
	color: #333333;
	font-size: 60rpx;
	font-weight: bold;
}
.banghuilist-product .title > view:nth-child(1) > text:nth-child(2) {
	color: #333333;
	font-size: 30rpx;
	font-weight: bold;
}
.banghuilist-product .title > text {
	color: #cccccc;
	font-size: 30rpx;
}

.banghuilist-product .pics {
	padding: 20upx 20upx 40upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.banghuilist-product .pics > text {
	color: #333333;
	font-size: 30rpx;
}
.banghuilist-product .pics > image {
	width: 100upx;
	height: 100upx;
	border-radius: 20upx;
}

.banghuilist-firstorder {
	width: calc(100% - 40rpx);
	margin-bottom: 30rpx;
	padding: 20upx;
	text-align: center;
	border-radius: 20upx;
	background-color: #f7f7f7;
	background-image: url(http://zzsc.com/static/xcx/okbeij.jpeg);
	background-size: 100%;
	background-repeat: no-repeat;
	box-shadow: 0 0 30upx #d3d3d3;
}
.banghuilist-firstorder .question {
	width: 60upx;
	height: 60upx;
	margin-left: 90%;
}

.banghuilist-firstorder .shousha {
	color: #666666;
	font-size: 50rpx;
	font-weight: bold;
	text-align: center;
}

.banghuilist-firstorder .headimgurl {
	width: 160upx;
	height: 160upx;
	border-radius: 50%;
	vertical-align: ;
}
.banghuilist-firstorder .busname {
	color: #666666;
	font-size: 34rpx;
	font-weight: 500;
}
.banghuilist-firstorder .sales {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.banghuilist-firstorder .sales > .pics > image {
	width: 50rpx;
	height: 50rpx;
	border-radius: 10rpx;
	vertical-align: middle;
}
.banghuilist-firstorder .sales > .pics > text {
	color: #999999;
	font-size: 24rpx;
	padding-left: 20rpx;
	
}
.banghuilist-firstorder .sales >  view{
	color: #CCCCCC;
	font-size: 24rpx;
}

</style>
