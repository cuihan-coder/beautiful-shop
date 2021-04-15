<!-- 订单列表组件 -->
<template>
	<view>
		<view class="orderListCom-search">
			<van-search shape="round" style="width: 82%;" value="" placeholder="订单号/手机/收件人/快递单号/产品" />
			<view class="right" @click="filterShow = true">
				<text>筛选</text>
				<van-icon style="vertical-align: middle;" name="arrow-down" color="#9A9A9A" />
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="orderListCom-orderitem" v-for="item in 10" :key="item">
			<view class="orderListCom-orderitem-top">
				<view>
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<text>momox</text>
				</view>
				<text>2021/03/29 14:45:34</text>
			</view>
			<view class="orderListCom-orderitem-center">
				<view class="goods-info">
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					<view>
						<text>新疆棉被烤肉</text>
						<text>9斤1.8*2米</text>
					</view>
				</view>
				<text>x2</text>
			</view>
			<view class="orderListCom-orderitem-bottom">
				<text>合计：416.00元</text>
				<van-button round plain size="normal">查看物流</van-button>
			</view>
		</view>

		<!-- 点击筛选组件 -->
		<van-popup custom-style="height: 30%;padding:30rpx;" position="bottom" :show="filterShow" @close="filterShow = false">
			<view class="orderListCom-filter-btn">
				<text @click="filterShow = false" class="cancel">取消</text>
				<view>
					<van-button @click="reset" plain round custom-style="color:#333333;font-size:30rpx;margin-right:30rpx;" size="small" type="default">重置</van-button>
					<van-button color="#FFCF4F" custom-style="color:#333333;font-size:30rpx;" round size="small" type="default">确定</van-button>
				</view>
			</view>
			<view class="orderListCom-type">订单类型</view>
			<van-cell @click="sheetShow = !sheetShow" custom-class="orderListCom-cell" :title="filterSelect.name" is-link />
			<!-- sheet -->
			<van-action-sheet :show="sheetShow" :actions="filterType" @close="sheetShow = false" @select="select" @cancel="sheetShow = false" cancel-text="取消" />
		</van-popup>
	</view>
</template>

<script>
export default {
	name: 'OrderList',
	data() {
		return {
			resource: this.resource,
			filterShow: false,
			sheetShow: false,
			filterType: [{ name: '全部', type: 1 }, { name: '仅邮寄', type: 2 }, { name: '仅自提', type: 3 }],
			filterSelect: {}
		};
	},
	props: {
		buycardShow: {
			type: Boolean,
			default: false
		}
	},
	mounted() {
		this.filterSelect = this.filterType[0];
	},
	methods: {
		onclose() {
			uni.$emit('buycardClose', false);
		},
		counter(val) {
			if (this.number + val <= 0) {
				uni.showToast({
					title: '是否删除吗？'
				});
				return;
			}
			this.number += val;
		},
		select(event) {
			this.filterSelect = event.detail;
		},
		reset() {
			this.filterSelect = this.filterType[0];
		}
	}
};
</script>

<style>
.orderListCom-search {
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 20upx;
	position: sticky;
	top: 0;
	background: #ffffff;
	z-index: 2;
}
.orderListCom-search .right {
	display: flex;
	align-items: center;
	padding-left: 22upx;
	color: #9a9a9a;
	font-size: 30upx;
}
.orderListCom-filter-btn {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.orderListCom-filter-btn .cancel {
	color: #333333;
	font-size: 30upx;
}
.orderListCom-cell {
	border-bottom: none;
	padding: 30upx 20upx;
	background: #f7f7f7;
	border-radius: 10upx;
	font-size: 30upx;
}
.orderListCom-type {
	color: #999999;
	font-size: 30upx;
	margin: 30upx 0 20upx;
}
.orderListCom-orderitem {
	width: 90%;
	margin: 0 auto 30upx;
	background: #ffffff;
	box-shadow: 0 0 30upx #dddddd;
	border-radius: 16upx;
}

.orderListCom-orderitem-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
	border-bottom: 1upx solid #f1f1f1;
}

.orderListCom-orderitem-top view > image {
	width: 60upx;
	height: 60upx;
	border-radius: 50%;
	vertical-align: middle;
}
.orderListCom-orderitem-top view > text {
	vertical-align: middle;
	padding-left: 20upx;
	color: #9a9a9a;
	font-size: 28upx;
}

.orderListCom-orderitem-center {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
}
.orderListCom-orderitem-center .goods-info {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.orderListCom-orderitem-center .goods-info image {
	width: 100upx;
	height: 100upx;
	margin-right: 30upx;
}
.orderListCom-orderitem-center .goods-info view > text {
	display: block;
}
.orderListCom-orderitem-center .goods-info view > text:nth-child(1) {
	color: #333333;
	font-size: 36upx;
	font-weight: bold;
	padding-bottom: 16rpx;
}
.orderListCom-orderitem-center .goods-info view > text:nth-child(2) {
	color: #9a9a9a;
	font-size: 28upx;
}
.orderListCom-orderitem-center > text {
	color: #333333;
	font-size: 44upx;
	font-weight: bold;
}

.orderListCom-orderitem-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx;
}
.orderListCom-orderitem-bottom > text {
	color: #000000;
	font-size: 26upx;
}
</style>
