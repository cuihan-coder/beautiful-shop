<!-- 月报 -->
<template>
	<view>
		
	</view>
</template>

<script>
import PlaceholderHeight from '../public/placeholderheight.vue';
export default {
	name: 'yuebao',
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
