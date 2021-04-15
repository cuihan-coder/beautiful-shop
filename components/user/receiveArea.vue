<!-- 收货地址弹窗组件 -->
<template>
	<view>
		<van-popup :show="receiveAreaShow" closeable close-icon="cross" position="bottom" custom-style="height: 100%;background:#f7f7f7;" safe-area-inset-top @close="onclose">
			<view class="receive-container">
				<view class="title">请选择收货地址</view>
				<van-search v-model="value" shape="round" background="#ffffff" placeholder="请输入收货姓名、电话" />
				<scroll-view scroll-y="true" style="width: 94%;height: 800upx;margin: 0 auto;">
					<!-- 地址 -->
					<view class="area-item active" v-for="item in 10" :key="item">
						<view class="area-item-left">
							<view class="name-phone">
								<text>崔韩</text>
								<text>13575221161</text>
							</view>
							<view class="area">湖南省长沙市望城区新城国际花都四期</view>
						</view>
						<view class="area-item-right">编辑</view>
					</view>
				</scroll-view>
			</view>
			<!-- 底部按钮 -->
			<view class="receive-add-area">upx地址</view>
		</van-popup>
	</view>
</template>

<script>
import PlaceholderHeight from '../public/placeholderheight.vue';
export default {
	name: 'receiveArea',
	components: {
		PlaceholderHeight
	},
	data() {
		return {
			resource: this.resource
		};
	},
	props: {
		receiveAreaShow: {
			type: Boolean,
			default: false
		}
	},
	onLoad() {
		console.log(this.receiveAreaShow, '12121');
	},
	methods: {
		onclose() {
			uni.$emit('receiveAreaClose', false);
		},
		onAdd() {},
		onEdit() {}
	}
};
</script>

<style>
.receive-container {
}

.receive-container .title {
	padding: 40upx;
	color: #000000;
	font-size: 50upx;
	font-weight: bold;
}
.area-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
	border-radius: 24upx;
	background: #ffffff;
	margin-top: 30upx;
}
.receive-container .active {
	opacity: 0.5;
}

.area-item-left {
	padding-right: 30upx;
}
.area-item-left .name-phone {
	color: #333333;
}
.area-item-left .name-phone text:nth-child(1) {
	font-size: 40upx;
	font-weight: bold;
}
.area-item-left .name-phone text:nth-child(2) {
	font-size: 38upx;
	font-weight: bold;
	padding-left: 40upx;
}
.area-item-left .area {
	color: #999999;
	font-size: 30upx;
	padding-top: 10upx;
}

.area-item-right {
	width: 120upx;
	line-height: 50upx;
	text-align: center;
	border-left: 1upx solid #cccccc;
	color: #999999;
	font-size: 27upx;
}
.receive-add-area {
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
