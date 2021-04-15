<template>
	<view class="caiwu-container">
		<!-- 返回按钮 -->
		<image class="caiwu-back-icon" :src="resource + 'goods-back.png'"></image>
		<view class="caiwu-tab">
			<view class="caiwu-tab-item active">日报</view>
			<view class="caiwu-tab-item">周报</view>
			<view class="caiwu-tab-item">月报</view>
			<view class="caiwu-tab-yes">昨日</view>
		</view>
		<!-- tab切换 -->
		<view class="goodsinfo-tab" >
			<view @click="itemTabIndex = 0" :class="itemTabIndex == 0 ? 'g-active' : ''">交易分析</view>
			<view @click="itemTabIndex = 1" :class="itemTabIndex == 1 ? 'g-active' : ''">顾客分析</view>
		</view>
		<!-- 交易分析代码 -->
		<view class="caiwu-jyfx" v-if="itemTabIndex == 0">
			<view class="yye">总营业额</view>
			<view class="yye-m">
				<text>¥</text>
				<text>0</text>
			</view>
			<view class="yye">订单笔数</view>
			<view class="ddbs">0</view>
			<view class="block zsr-bg">
				<view>总收入</view>
				<view>¥0</view>
			</view>
			<view class="block zzc-bg">
				<view>总支出</view>
				<view>¥0</view>
			</view>
			<view class="block zml-bg">
				<view>总毛利 <van-icon @click="showtip1" color="#D9D9D9" name="question"></van-icon></view>
				<view>¥0</view>
			</view>
			<view class="sjsm">数据说明</view>
			<view class="question">1、自己的顾客自助下单：</view>
			<view class="answer">按零售价计入且包含运费；</view>
			<view class="question">2、自己代客下单：</view>
			<view class="answer">按帮会价计入且包含运费；</view>
			<view class="question">3、每日（周底/月底）24:00统计当日（周/月）已付款且未同意退款的订单。若在统计之后同意退款，则账本中不会扣除；</view>
			<view class="question">4、统计的金额不包含手续费；</view>
			<view class="question">5、统计数据仅供经营状况参考，以实际可提现金额为准。</view>
		</view>
		<!-- 消费顾客人数 -->
		<view class="xfgkrs" v-if="itemTabIndex == 1">
			<view class="yye">消费顾客人数</view>
			<view class="gk-num">0</view>
		</view>
		<!-- 弹窗组件 -->
		<van-dialog  id="van-dialog" />
	</view>
</template>

<script>
import Dialog from '@vant/weapp/dist/dialog/dialog';
	
export default {
	
	data() {
		return {
			resource: this.resource,
			itemTabIndex: 0
		};
	},
	methods:{
		showtip1(){
			Dialog.alert({
			  title:'总毛利',
			  message:`总毛利 = 总收入 - 总支出`,
			  theme: 'round-button',
			  confirmButtonText:'知道了'
			})
		}
		
	}
};
</script>

<style>
page {
	background-image: url(http://zzsc.com/static/xcx/caiwu-bg.png);
	background-size: 100% 206rpx;
	background-repeat: no-repeat;
}
.caiwu-container {
	height: 100%;
}
.caiwu-back-icon {
	position: fixed;
	left: 20upx;
	top: 40upx;
	width: 60upx;
	height: 60upx;
	z-index: 10;
}
.caiwu-tab {
	display: flex;
	align-items: center;
	padding: 0 40rpx;
	margin-top: 125rpx;
}

.caiwu-tab > .caiwu-tab-item {
	display: grid;
	align-items: center;
	width: 20%;
	height: 52rpx;
	font-size: 34rpx;
	font-weight: bold;
	color: #9a803f;
	text-align: center;
}
.caiwu-tab > .caiwu-tab-yes {
	width: 40%;
	line-height: 60rpx;
	background: #fff;
	font-size: 28rpx;
	font-weight: bold;
	color: #333;
	border-radius: 40rpx;
	text-align: center;
}

.caiwu-tab > .active {
	display: grid;
	align-items: center;
	color: #333;
}
.caiwu-tab > .active::after {
	content: '▲';
	display: block;
	font-size: 28rpx;
	color: #fff;
}
.goodsinfo-tab {
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	margin-top: 20rpx;
	padding: 20upx 40upx 0upx;
	background: #FFF8E5;
}
.goodsinfo-tab view {
	color: #666666;
	font-size: 32upx;
	font-weight: 500;
	margin-right: 60upx;
	padding-bottom: 15upx;
}
.g-active {
	color: #333333 !important;
}
.g-active::after {
	content: '';
	width: 100%;
	background: #ffcf4f;
	height: 4upx;
	display: block;
	margin-top: 20upx;
	animation: active-line 0.5s linear;
}
@keyframes active-line {
	0% {
		width: 0;
		display: flex;
		justify-content: center;
		margin-left: 50%;
	}
	20% {
		width: 20%;
		display: flex;
		justify-content: center;
		margin-left: 40%;
	}
	40% {
		width: 40%;
		display: flex;
		justify-content: center;
		margin-left: 30%;
	}
	100% {
		width: 100%;
		display: flex;
		justify-content: center;
	}
}
.caiwu-jyfx{
	padding: 40rpx;
}
.caiwu-jyfx > .yye{
	font-size: 34rpx;
	color: #000000;
	text-align: center;
}
.caiwu-jyfx > .yye-m {
	display: flex;
	align-items: center;
	justify-content: center;
}
.caiwu-jyfx > .yye-m > text:nth-child(1){
	font-size: 50rpx;
	color: #000000;
}
.caiwu-jyfx > .yye-m > text:nth-child(2){
	padding-left: 20rpx;
	font-size: 80rpx;
	font-weight: bold;
	color: #000000;
}
.caiwu-jyfx > .ddbs{
	font-size: 50rpx;
	font-weight: bold;
	color: #000000;
	text-align: center;
}
.caiwu-jyfx > .block{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40rpx 30rpx;
	margin-top: 30rpx;
	border-radius: 20rpx;
}
.caiwu-jyfx > .block > view:nth-child(1){
	display: flex;
	align-items: center;
	font-size: 40rpx;
	font-weight: bold;
	color: #000000;
}
.caiwu-jyfx > .block > view:nth-child(2){
	font-size: 40rpx;
	font-weight: bold;
	color: #000000;
}
.zsr-bg{
	background-color: #E6F2E4;
}

.zzc-bg{
	background-color: #FAEEEE;
}

.zml-bg{
	background-color: #F7F7F7;
}

.caiwu-jyfx > .sjsm{
	margin: 20rpx 0;
	font-size: 40rpx;
	font-weight: bold;
	color: #999999;
}
.caiwu-jyfx > .question{
	margin: 20rpx 0;
	font-size: 30rpx;
	color: #999999;
}
.caiwu-jyfx > .answer{
	font-size: 30rpx;
	color: #666666;
}

.xfgkrs{
	margin-top: 40rpx;
}
.xfgkrs > .gk-num{
	padding-left: 20rpx;
	font-size: 80rpx;
	font-weight: bold;
	color: #000000;
	text-align: center;
}

.xfgkrs > .yye{
	font-size: 34rpx;
	color: #000000;
	text-align: center;
}

</style>
