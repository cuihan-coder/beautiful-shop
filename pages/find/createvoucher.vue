<!-- 创建优惠券 -->
<template>
	<view class="createvoucher-container">
		<view class="createvoucher-item">
			<view class="title">优惠券名称</view>
			<input placeholder="请输入,9字内" />
		</view>
		<view class="createvoucher-item">
			<view class="title">优惠券金额</view>
			<input placeholder="不低于1元,不高于100元" />
		</view>
		<view class="createvoucher-item">
			<view class="title">生成数量</view>
			<input placeholder="请输入至少一张" />
		</view>
		<view class="createvoucher-item">
			<view class="title">每个ID限额领取数量</view>
			<input value="1" placeholder="每个人至少领取一张" />
		</view>
		<view class="createvoucher-item">
			<view class="title">使用时效-生效时间</view>
			<input v-model="formData.start_time" style="text-align: right;padding-right: 30rpx;" @focus="selectTime('start_time')" placeholder="即时生效" />
		</view>
		<view class="createvoucher-item">
			<view class="title">使用时效-截止时间</view>
			<input v-model="formData.end_titme" @focus="selectTime('end_titme')" style="text-align: right;padding-right: 30rpx;" placeholder="点击生成截止时间" />
		</view>
		<!-- 时间选择组件-->
		<van-popup :show="datepicker" position="bottom" custom-style="height: 50%;" @close="datepicker = false">
			<van-datetime-picker type="datetime" :value="currentDate" :min-date="minDate" @input="onInput" @cancel="timeCancel" @confirm="datepicker = false" />
		</van-popup>
		<view class="createvoucher-item">
			<view class="title">使用门槛-满额可用（大于¥0.00）</view>
			<input value="" placeholder="设置金额必须大于¥0.00" />
		</view>
		<view class="createvoucher-item">
			<view class="title">使用门槛-满额可用（大于¥0.00）</view>
			<input value="" placeholder="设置金额必须大于¥0.00" />
		</view>
		<view class="createvoucher-item">
			<view class="switch">
				<text>指定商品可用</text>
				<van-switch active-color="#04BE02" :checked="showSelectGoods" @change="showSelectGoods = !showSelectGoods"></van-switch>
			</view>
		</view>
		<view class="createvoucher-item createvoucher-item-top0">
			<view class="switch">
				<van-tabs type="card" :animated="true" @change="changeGoodstype">
					<van-tab title="包含"></van-tab>
					<van-tab title="排除"></van-tab>
				</van-tabs>
				<view style="color: #576B95;" @click="selelctShow = true">+添加商品</view>
			</view>
		</view>
		<!-- 添加商品选择组件 -->
		<selectGoods :selectShow="selelctShow"></selectGoods>
		
		<placeholderheight height="200rpx"></placeholderheight>
		<view class="createvoucher-footer">
			<text>0.00</text>
			<van-button type="primary"  custom-class="ft-btn" round size="large">生成</van-button>
		</view>
	</view>
</template>

<script>
import pubFooter from '@/components/public/footer.vue';
import selectGoods from '@/components/find/select-goods.vue';
import placeholderheight from '@/components/public/placeholderheight.vue';

export default {
	components: {
		pubFooter,
		selectGoods,
		placeholderheight
	},
	data() {
		return {
			resource: this.resource,
			datepicker: false,
			minHour: 10,
			maxHour: 20,
			minDate: new Date().getTime(),
			maxDate: new Date(2019, 10, 1).getTime(),
			currentDate: new Date().getTime(),
			//时间过渡字段
			temTimeField: '',
			//是否显示商品加载组件
			showSelectGoods: false,
			selelctShow: false,
			formData: {
				start_time: '',
				end_titme: '',
				//包含 1 移除 2
				select_goods_type: 1
			}
		};
	},
	onLoad() {
		let that = this;
		uni.$on('selectGoodsClose', function(data) {
			console.log(111);
			that.selelctShow = false;
		});
	},
	methods: {
		toPage(url) {
			uni.navigateTo({
				url: url
			});
		},
		//选择时间 吊起
		selectTime(arg) {
			this.datepicker = true;
			this.temTimeField = arg;
		},
		//时间选择器时间
		onInput(event) {
			let unixTime = new Date(event.detail);
			this.formData[this.temTimeField] =
				unixTime.getFullYear() +
				'-' +
				unixTime.getMonth() +
				'-' +
				unixTime.getDay() +
				' ' +
				unixTime.getHours() +
				':' +
				unixTime.getMinutes() +
				':' +
				unixTime.getSeconds();
		},
		timeCancel() {
			this.datepicker = false;
			this.formData[this.temTimeField] = '';
		},
		changeGoodstype(event) {
			this.formData.select_goods_type = ++event.detail.index;
		}
	}
};
</script>

<style>
page {
	background: #edfcff;
}

.createvoucher-container {
	padding: 40rpx;
}

.createvoucher-item {
	margin-top: 30rpx;
}
.createvoucher-item .title {
	font-size: 30rpx;
	color: #666666;
}
.createvoucher-item > input {
	margin-top: 30rpx;
	padding-left: 20rpx;
	height: 120rpx;
	border-radius: 10rpx;
	background: #ffffff;
	font-size: 30rpx;
	color: #333;
}

.createvoucher-item > .switch {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 120rpx;
	padding: 0 20rpx;
	color: #333333;
	background: #ffffff;
	border-radius: 10rpx;
}
.createvoucher-item-top0 {
	margin-top: 0 !important;
}
.createvoucher-footer {
	z-index: 10;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: calc(100% - 60rpx);
	padding: 30rpx;
	background: #edfcff;
}

.createvoucher-footer > text {
	font-size: 60rpx;
	font-weight: bold;
	color: #dd591f;
}
.createvoucher-footer > text::before {
	content: '¥';
	padding-right: 10rpx;
	font-size: 30rpx;
	font-weight: bold;
	color: #dd591f;
}
.ft-btn{
	width: 260rpx !important;
}
</style>
