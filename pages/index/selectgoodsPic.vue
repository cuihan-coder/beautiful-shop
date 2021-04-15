<!-- 选择封面 -->
<template>
	<view class="select-good-pic">
		<view class="select-good-pic-title">
			<view>选择封面</view>
			<view>
				<van-button :icon="resource + 'ui-upload.png' " color="#f7f7f7" round>上传</van-button>
			</view>
		</view>
		<view class="select-good-pic-block">
			<view class="select-good-pic-default">
				<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			</view>
			<view class="select-good-pic-default active">
				<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			</view>
		</view>
		<!-- 保存自提点按钮 -->
		<view class="select-good-pic-btn" >确定</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			resource: this.resource,
			radio: '',
			area: {}
		};
	},
	methods: {
		
	}
};
</script>

<style>
page {
	background: #ffffff;
}
.select-good-pic{
	margin-top:40upx;
	padding: 30upx;
}
.select-good-pic-title{
	display: flex;
	align-items: center;
	justify-content: space-between;
	
}

.select-good-pic-title view:nth-child(1){
	color: #000000;
	font-size: 44upx;
	font-weight: 500;
}
.van-button__text{
	color: #000000;
}
.select-good-pic-block{
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 30upx;
}
.select-good-pic-default {
	width: calc(50% - 20upx);
	height: 100%;
	position: relative;
	padding: 2upx;
	border: 4upx solid #ffffff;
	border-radius: 20upx;
	opacity: 0.4;
}
.select-good-pic-default::before{ content: ""; padding-top: 100%; vertical-align: middle; display: block;}

.active{
	border: 4upx solid #FFCF4F;
	opacity: 1;
}

.select-good-pic-default image{
	width: 98%;
	height: 98%;
	border-radius: 20upx;
	position: absolute;
	left: 1%;
	top: 1%;
	
}
.select-good-pic-btn {
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
