<!-- 自提页面 -->
<template>
	<view class="myreceivearea-contain">
		<view class="myreceivearea-area-item">
			<view class="name-phone">
				<text>湖南新城国际花都</text>
				<text>13575221161</text>
			</view>
			<view class="area">
				<view>湖南新城国际花都四起b8动121212，雷锋大道西侧比去你是说几句</view>
				<image :src="resource + 'right-jt.png'"></image>
			</view>
		</view>
		<view class="myreceivearea-area-item">
			<view class="name-phone">
				<text>湖南新城国际花都</text>
				<text>13575221161</text>
			</view>
			<view class="area">
				<view>湖南新城国际花都四起b8动121212，雷锋大道西侧比去你是说几句</view>
				<image :src="resource + 'right-jt.png'"></image>
			</view>
		</view>
		<!-- upx自提点按钮 -->
		<navigator hover-class="none" class="myreceivearea-btn" url="/pages/index/addreceiveArea">upx自提点</navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {
			resource: this.resource,
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
page {
	background: #f7f7f7;
}
.myreceivearea-contain {
	padding: 30upx;
}

.myreceivearea-area-item {
	margin-top: 30upx;
	padding: 30upx;
	background: #ffffff;
	border-radius: 20upx;
}

.myreceivearea-area-item .name-phone text:nth-child(1) {
	font-size: 40upx;
	color: #333333;
	font-weight: 500;
}
.myreceivearea-area-item .name-phone text:nth-child(2) {
	font-size: 36upx;
	color: #666666;
	font-weight: 500;
	padding-left: 20upx;
}
.myreceivearea-area-item .area {
	margin-top: 30upx;
	display: flex;
	justify-content: space-between;
	flex-wrap: nowrap;
	align-items: baseline;
}

.myreceivearea-area-item .area view {
	font-size: 32upx;
	color: #999999;
}

.myreceivearea-area-item .area image {
	width: 40upx;
	height: 30upx;
	-webkit-flex-shrink: 1;
	flex-shrink: 1;
}
.myreceivearea-btn {
	width: 60%;
	line-height: 100upx;
	position: fixed;
	left: 20%;
	bottom: 40upx;
	text-align: center;
	font-size: 32upx;
	color: #333333;
	border-radius: 54upx;
	box-shadow: 2upx 3upx 26upx #FFD977;
	background: #FFCF4F;
}
</style>
