<!-- upx自提地址 -->
<template>
	<view class="addreceivearea-contain">
		<input class="addreceivearea-name" placeholder-class="placeholder-class"	 type="text" @input="onKeyInput" maxlength="8" placeholder="输入自提点名称,8字以内" />
		<input class="addreceivearea-name" placeholder-class="placeholder-class" type="number" @input="onKeyInput" maxlength="11" placeholder="输入自提点负责人电话" />
		<view class="addreceivearea-street" @click="chooseMapArea">
			<view v-if="!area.name" class="default-tip">详细地址</view>
			<view v-if="area.name" class="get-area-info">
				<view>{{area.name}}</view>
				<view>{{area.address}}</view>
			</view>
			<image :src="resource + 'right-jt.png'"></image>
		</view>
		<!-- 保存自提点按钮 -->
		<view class="addreceivearea-btn" >保存</view>
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
		getPhoneNumber(e) {
			console.log(e);
		},
		chooseMapArea() {
			let that = this
			uni.chooseLocation({
				success: function(res) {
					that.area = {
						name: res.name,
						address: res.address,
						latitude: res.latitude,
						longitude: res.longitude
					}
					console.log('位置名称：' + res.name);
					console.log('详细地址：' + res.address);
					console.log('纬度：' + res.latitude);
					console.log('经度：' + res.longitude);
				}
			});
		}
	}
};
</script>

<style>
page {
	background: #ffffff;
}
.addreceivearea-contain {
	padding: 30upx;
}
.addreceivearea-name{
	width: calc(100% - 30upx);
	height: 100upx;
	margin-bottom: 30upx;
	padding-left: 30upx;
	font-size: 30upx;
	color: #000000;
	background: #f7f7f7;
	border-radius: 20upx;
	
}
.placeholder-class {
	font-size: 30upx;
	color: #cccccc !important;
}

.addreceivearea-street{
	width: calc(100% - 30upx);
	height: 100upx;
	margin-bottom: 30upx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 30upx;
	background: #f7f7f7;
	border-radius: 20upx;
}

.addreceivearea-street .default-tip{
	font-size: 30upx;
	color: #cccccc;
}
.addreceivearea-street image{
	width: 40upx;
	height: 30upx;
	-webkit-flex-shrink: 1;
	flex-shrink: 1;
}

.addreceivearea-street .get-area-info view:nth-child(1){
	font-size: 32upx;
	color: #333333;
}
.addreceivearea-street .get-area-info view:nth-child(2){
	font-size: 28upx;
	color: #999999;
}

.addreceivearea-btn {
	width: 60%;
	line-height: 100upx;
	position: fixed;
	left: 20%;
	bottom: 40upx;
	text-align: center;
	font-size: 32upx;
	color: #333333;
	border-radius: 54upx;
	box-shadow: 2upx 3upx 26upx #D9D5D6;
	background: #CFCBCC;
}
</style>
