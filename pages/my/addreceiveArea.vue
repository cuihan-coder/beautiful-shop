<!-- 添加收货地址 -->
<template>
	<view>
		<view class="addreceiveArea-container">
			<view class="addreceiveArea-input">
				<view>收件姓名</view>
				<input type="text" placeholder="请输入" placeholder-style="color:#cccccc;" />
			</view>
			<view class="addreceiveArea-input">
				<view>收件电话</view>
				<input type="text" placeholder="请输入" placeholder-style="color:#cccccc;" />
			</view>
			<view class="addreceiveArea-input-area">
				<view>
					<text>省市区</text>
					<view class="dingwei-btn" @click="getArea">
						<van-icon :name="resource + 'dingwei.png' " />
						点击定位
					</view>
					
				</view>
				<input v-model="formData['province']" type="text" placeholder="请选择" placeholder-style="color:#cccccc;" />
			</view>
			<view class="addreceiveArea-input">
				<view>详细地址</view>
				<input v-model="formData['street']" type="text" placeholder="请输入" placeholder-style="color:#cccccc;" />
			</view>
		</view>
		<view class="addreceiveArea-add-area">保存</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			resource: this.resource,
			formData:{
				province: '',
				street:''
			}
		};
	},
	onLoad() {
		console.log(this.receiveAreaShow, '12121');
	},
	methods: {
		onclose() {
			uni.$emit('receiveAreaClose', false);
		},
		onAdd() {},
		onEdit() {},
		getArea(){
			let that = this
			uni.chooseLocation({
			    success: function (res) {
					let index 
					if(~res.address.indexOf('区') != 0){
						index = res.address.indexOf('区')
					}
					if(!res.address.indexOf('县') != 0){
						index = res.address.indexOf('县')
					}
					if(~res.address.indexOf('旗') != 0){
						index = res.address.indexOf('旗')
					}
				
					if(index){
						that.formData.province = res.address.substring(0, index + 1)
						that.formData.street = res.address.substring(index + 1)
					}else{
						that.formData.province = '' 
						that.formData.street = res.address
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
.addreceiveArea-container {
	width: 94%;
	background: #f7f7f7;
	margin: 0 auto;
	border-radius: 12upx;
}
.addreceiveArea-container :last-child{
	border-bottom: 0;
}
.addreceiveArea-input {
	padding: 20upx;
	border-bottom: 1upx solid #e6e6e6;
}
.addreceiveArea-input view:nth-child(1) {
	color: #999999;
	font-size: 30upx;
}
.addreceiveArea-input input {
	margin-top: 14upx;
	color: #000000;
	font-size: 30upx;
}
.addreceiveArea-input-area{
	padding: 20upx;
}

.addreceiveArea-input-area view:nth-child(1) {
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #999999;
	font-size: 30upx;
}
.addreceiveArea-input-area input {
	margin-top: 14upx;
	color: #000000;
	font-size: 30upx;
}
.addreceiveArea-input-area .dingwei-btn{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	color: #586B95;
}
.addreceiveArea-add-area {
	width: 50%;
	line-height: 90upx;
	position: fixed;
	bottom: 45upx;
	left: 25%;
	text-align: center;
	background: #ffcf4f;
	border-radius: 50upx;
	color: #333333;
	font-size: 33upx;
	box-shadow: 6upx 1upx 26upx #fce6b0;
}
</style>
