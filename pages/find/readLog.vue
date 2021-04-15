<!-- 查看产品的用户 -->
<template>
	<view class="readlog-container" id="container">
		<view class="anmation" :style=" 'animation:touphidden 10s  linear ' + item * 2 + 's' " v-for="item in 4">
			<view class="read-info">
				<image src="../../static/image/find-click.png"></image>
				<view class="name">
					<text>崔韩</text>
					<text>14天谴</text>
					<view>看了：很么什么产品</view>
				</view>
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
page {
	background-color: #ffcf4f;
}

.read-info{
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	padding: 10upx 20upx;
	margin-bottom: 20upx;
	background: #f3f3f3;
	border-radius: 80upx;
	
}
.anmation{
	position: absolute;
	bottom: 100rpx;
	left: 20%;
	opacity: 0;
	animation: touphidden 10s  linear ;
}
@keyframes touphidden{
	10% {
		display: block;
		position: absolute;
		bottom: 100rpx;
		left: 20%;
		opacity: 1;
	}
	15% {
		display: block;
		position: absolute;
		bottom: 200rpx;
		left: 10%;
		opacity: 1;
	}
	
	100% {
		display: none;
		position: absolute;
		bottom: 90%;
		left: 10%;
		opacity: 0;
	}
}
.read-info > image{
	width:100rpx;
	height: 100rpx;
} 
.read-info > .name > text:nth-child(1) {
	color: #333333;
	font-size: 30rpx;
	padding-left: 20rpx;
	vertical-align: middle;
}
.read-info > .name > text:nth-child(2) {
	color: #999999;
	font-size: 22rpx;
	padding-left: 22rpx;
}
.read-info > .name > view{
	color: #999999;
	font-size: 22rpx;
	padding-left: 22rpx;
}

</style>
