<template>
	<view>
		<view class="my-top">
			<view class="my-user">
				<view>
					<view>崔韩</view>
					<view>包身工（1级）|经验值：0</view>
				</view>
				<image src="../../static/image/find-click.png"></image>
			</view>
		</view>
		<view class="my-zhangben">
			<view>
				<text>今日总营业额，昨日账本</text>
				<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
			</view>
			<view>
				<text>100</text>
				<van-icon @click="showtip1()" size="40rpx" color="#D9D9D9" name="question" />
			</view>
		</view>
		<!--  可提现金额 冻结金额 入口 -->
		<view style="margin-top: -100rpx;">
			<view class="my-mnrk" >
				<view class="my-mnrk-rk" @click="toPage('/pages/my/withdraw')">
					<view class="left">
						<image :src="resource + 'tixian.png'"></image>
						<view>可提现金额</view>
					</view>
					<view class="right">
						<text>0.00</text>
						<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
					</view>
				</view>
				<view class="my-mnrk-rk">
					<view class="left">
						<image :src="resource + 'dongjie.png'"></image>
						<view>冻结金额</view>
					</view>
					<view class="right">
						<text>0.00</text>
						<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
					</view>
				</view>
				<view class="my-wfh">
					<text>当前未发货订单：</text>
					<text>0</text>
					<text>笔</text>
					<text @click="showtip2()">详细说明></text>
				</view>
			</view>
		</view>

		<view class="my-bh-dp">
			<view>
				<image :src="resource + 'banghui.png'"></image>
				<view>帮会</view>
			</view>
			<view>
				<image :src="resource + 'dianpu.png'"></image>
				<view>店铺</view>
			</view>
		</view>
		<view class="my-rukou">
			<view class="left">
				<image :src="resource + 'maijia.png'"></image>
				<text>卖家信息</text>
			</view>
			<view class="right">
				<van-icon size="28rpx" color="#999999" name="warning"></van-icon>
				<text>未设置</text>
				<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
			</view>
		</view>
		<view class="my-rukou">
			<view class="left">
				<image :src="resource + 'shdz.png'"></image>
				<text>收货地址</text>
			</view>
			<view class="right">
				<text>未设置</text>
				<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
			</view>
		</view>
		<view class="my-rukou">
			<view class="left">
				<image :src="resource + 'bangzhu.png'"></image>
				<text>新手帮助</text>
			</view>
			<view class="right">
				<text>未设置</text>
				<van-icon size="28rpx" color="#999999" name="arrow"></van-icon>
			</view>
		</view>
		<!-- 底部footer -->
		<pubFooter></pubFooter>
		
		<!-- 弹窗组件 -->
		<van-dialog  id="van-dialog" />

	</view>
</template>

<script>
import pubFooter from '../../components/public/footer.vue';
import Dialog from '@vant/weapp/dist/dialog/dialog';

export default {
	components: {
		pubFooter
	},
	data() {
		return {
			resource: this.resource,
			show: false,
			username: '',
			password: ''
		};
	},
	onLoad() {
		
		
	},
	methods: {
		showtip1(){
			Dialog.alert({
			  title: '营业额计算方式',
			  message:` 
			  1.自己的顾客自主下单：按零售价计入且包含运费
			  2.自己代客下单：按帮会价计入且包含运费
			  `,
			  theme: 'round-button',
			  confirmButtonText:'我知道了'
			})
		},
		showtip2(){
			Dialog.alert({
			  message:`订单发货次日将会进行结算。发货之后将先进入「冻结金额」等待结算，次日结算后将进入「可提金额」，若有包包，请先记得拆包：「订单」- 「包包」。冻结金额未扣除手续费，手续费明细请见：「我的」 - 「新手帮助」 - 「费用/结算」`,
			  theme: 'round-button',
			  confirmButtonText:'知道了'
			})
		},
		toPage(url){
			uni.navigateTo({
				url
			})
		}
	}
};
</script>

<style>
.my-top {
	height: 470rpx;
	background: url(http://zzsc.com/static/xcx/mine_bg.png) no-repeat;
	background-size: cover;
}
.my-user {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 160rpx 60rpx;
}
.my-user > view:nth-child(1) view:nth-child(1) {
	font-size: 40rpx;
	font-weight: bold;
	color: #000000;
}
.my-user > view:nth-child(1) view:nth-child(2) {
	font-size: 30rpx;
	color: #333333;
}

.my-user image {
	width: 120rpx;
	height: 120rpx;
}

.my-zhangben {
	position: relative;
	top: -150rpx;
	width: 90%;
	padding: 40rpx 0;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 10rpx;
	box-shadow: 0 0 20rpx #d3d3d3;
	text-align: center;
}
.my-zhangben > view:nth-child(1) > text:nth-child(1) {
	font-size: 30rpx;
	color: #666;
}
.my-zhangben > view:nth-child(2) > text:nth-child(1) {
	padding-right: 20rpx;
	font-size: 60rpx;
	font-weight: bold;
	color: #000;
}
.my-zhangben > view:nth-child(2) > text:nth-child(1)::before {
	content: '¥';
	font-size: 30rpx;
	font-weight: bold;
	color: #000;
}
.my-mnrk {
	width: 90%;
	margin: 0 auto;
	border-radius: 10rpx;
	box-shadow: 0 0 30rpx #f2f2f2;
}
.my-mnrk-rk {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 40rpx 20rpx;
	border-bottom: 1rpx solid #f0f0f0;
}
.my-mnrk-rk > .left {
	display: flex;
	align-items: center;
}
.my-mnrk-rk > .left > image {
	width: 60rpx;
	height: 60rpx;
}
.my-mnrk-rk > .left > view {
	padding-left: 20rpx;
	font-size: 34rpx;
	color: #333333;
}

.my-mnrk-rk > .right > text {
	font-size: 60rpx;
	font-weight: bold;
	color: #576b95;
}
.my-mnrk-rk > .right > text::before {
	content: '¥';
	font-size: 30rpx;
	font-weight: bold;
	color: #576b95;
}
.my-wfh {
	padding: 30rpx;
}
.my-wfh > text:nth-child(2n + 1) {
	font-size: 30rpx;
	color: #999999;
}
.my-wfh > text:nth-child(2n + 2) {
	padding-left: 10rpx;
	font-size: 30rpx;
	color: #576b95;
}
.my-bh-dp {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 90%;
	padding: 40rpx 0;
	margin: 20rpx auto 30rpx;
	box-shadow: 0 0 30rpx #f2f2f2;
}
.my-bh-dp image {
	width: 60rpx;
	height: 60rpx;
}

.my-rukou{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40rpx 40rpx;
	background: #fff;
	border-bottom: 1rpx solid  #f0f0f0;
}

.my-rukou > .left{
	display: flex;
	align-items: center;
}
.my-rukou > .left > image{
	width: 50rpx;
	height: 50rpx;
}

.my-rukou > .left > text{
	padding-left: 10rpx;
	font-size: 34rpx;
	color: #333333;
}

.my-rukou > .right{
	display: flex;
	align-items: center;
}
.my-rukou > .right > text{
	font-size: 30rpx;
	color: #333333;
}
</style>
