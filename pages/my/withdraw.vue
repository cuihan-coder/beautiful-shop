<!-- 提现 -->
<template>
	<view>
		<van-notify id="van-notify" />
		<view class="withdraw-info">
			<text>到账账户</text>
			<view>
				<image :src="resource + 'qian.png'"></image>
				<text>微信零钱</text>
				<van-icon name="arrow"></van-icon>
			</view>
		</view>
		<view class="withdraw-box">
			<view class="withdraw-title">提现金额</view>
			<view class="withdraw-input">
				<text>¥</text>
				<input type="number"  value="0.00" />
			</view>
			<view class="withdraw-tip">
				<text> 可提现总额 ¥0.00，</text>
				<text>全部转出</text>
			</view>
			<view class="withdraw-jg">
				<view>
					<van-icon color="#999999" name="info-o" />
					<text>提现至微信零钱，每日限额2万元</text>
				</view>
				<view>
					<van-icon color="#999999" name="info-o" />
					<text>单笔提现金额最低1元，每日最多提现10笔</text>
				</view>
				<view>
					<van-icon color="#999999" name="info-o" />
					<text>微信须实名认证（绑定一张银行卡到微信即为认证）</text>
				</view>
			</view>
		</view>
		<view class="withdraw-footer">
			<view>
				<image :src="resource + 'ico_hist.png'"></image>
				<view>提现记录</view>
			</view>
			<view>
				<image :src="resource + 'ico_deta.png'"></image>
				<view>收支明细</view>
			</view>
			<van-button round custom-style="width:400rpx;margin-left:30rpx;"	 size="normal">申请提现</van-button>
		</view>
	</view>
</template>

<script>
	import Notify from '@vant/weapp/dist/notify/notify';

	export default {
		
		data() {
			return {
				resource: this.resource,
				show: false,
				username: '',
				password: ''
			};
		},
		onLoad() {
			Notify({ type: 'warning', message: '提现金额不能大于当前可提现总额' });
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
			}
		}
	};
</script>

<style>
	.withdraw-info{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 30rpx 30rpx;
		background: #F7F7F7;
	}
	.withdraw-info > text{
		font-size: 30rpx;
		color: #666666;
	}
	
	.withdraw-info > view{
		display: flex;
		align-items: center;
	}
	.withdraw-info > view > image{
		width: 50rpx;
		height: 50rpx;
	}
	.withdraw-info > view > text{
		padding-left: 20rpx;
		font-size: 30rpx;
		color: #333333;
	}
	.withdraw-box{
		padding: 30rpx;
	}
	.withdraw-title{
		font-size: 30rpx;
		color: #666666;
	}
	.withdraw-input{
		display: flex;
		align-items: center;
		height: 100rpx;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #f2f2f2;
	}
	.withdraw-input > text{
		font-size: 50rpx;
		color: #000000;
	}
	.withdraw-input > input{
		height: 100%;
		padding-left: 20rpx;
		font-size: 80rpx;
		font-weight: bold;
		color: #000000;
	}
	.withdraw-tip{
		padding: 30rpx 0 ;
		font-size: 28rpx;
		color: #666666;
	}
	
	.withdraw-tip > text:nth-child(2){
		color: #576B95;
	}
	.withdraw-jg{
		margin-top: 20rpx;
	}
	.withdraw-jg > view{
		display: flex;
		align-items: center;
	}
	.withdraw-jg > view > text{
		font-size: 28rpx;
		color: #999999;
	}
	
	.withdraw-footer{
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30rpx 30rpx;
	}
	.withdraw-footer > view {
		margin-right: 30rpx;
		text-align: center;
	}
	.withdraw-footer > view > image{
		width: 40rpx;
		height: 40rpx;
	}
	.withdraw-footer > view > view{
		font-size: 24rpx;
		color: #666666;
	}
</style>
