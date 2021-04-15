<!-- 选择商品组件 -->
<template>
	<view>
		<van-popup custom-style="height: 80%;" position="bottom" :show="selectShow" @close="onclose('close')">
			<view class="orderListCom-filter-btn">
				<text class="title">挑选产品</text>
				<view>
					<van-button @click="onclose('cancel')" plain round custom-style="color:#333333;font-size:30rpx;margin-right:30rpx;" size="small" type="default">取消</van-button>
					<van-button color="#FFCF4F" custom-style="color:#333333;font-size:30rpx;" round size="small" type="default">确定</van-button>
				</view>
			</view>
			<van-search
			 custom-class="sg-van-search"	
			  value=""
			  placeholder="请输入产品名称"
			  use-action-slot
			  shape="round"
			  @search="onSearch"
			>
			  <view slot="action" @tap="onClick">搜索</view>
			</van-search>
			
			<view v-for="item in 4" :key="item">
				<view class="sg-goods-name">
					<image src="../../static/image/find-click.png"></image>
					<text>阿克苏植皮苹果</text>
				</view>
				<view class="sg-multi">
					<van-checkbox-group  @change="onChange" >
					  <van-checkbox icon-size="50rpx"	 custom-class="sg-checkbox"	 checked-color="#FFCF4F" name="a">400g每一盒</van-checkbox>
					  <van-checkbox icon-size="50rpx"custom-class="sg-checkbox" checked-color="#FFCF4F" name="b">500g每一盒</van-checkbox>
					  <van-checkbox icon-size="50rpx" custom-class="sg-checkbox" checked-color="#FFCF4F" name="c">600g每一盒</van-checkbox>
					</van-checkbox-group>
				</view>
			</view>
			
		</van-popup>
	</view>
</template>

<script>
export default {
	name: 'select-goods',
	data() {
		return {
			resource: this.resource
		};
	},
	props: {
		selectShow: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
	},
	methods: {
		onclose(type) {
			uni.$emit('selectGoodsClose', {type});
		}
	}
};
</script>

<style>

.orderListCom-filter-btn {	
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30rpx;
	background-color: #fff;
}
.sg-van-search{
	position: sticky;
	top: 112rpx;
}
.sg-goods-name{
	display: flex;
	align-items: center;
	padding: 10rpx 30rpx;
	margin-top: 20rpx;
	background: #F7F7F7;
}
.sg-goods-name image {
	width: 80rpx;
	height: 80rpx;
}
.sg-goods-name text {
	font-size: 30rpx;
	color: #333;
}
.sg-multi{
	padding: 30rpx;
}
.sg-checkbox{
	margin-top: 10rpx;
	font-size: 34rpx;
	color: #000000;
}
</style>
