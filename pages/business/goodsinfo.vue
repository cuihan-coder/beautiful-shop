<!-- 商品详情 -->
<template>
	<scroll-view class="goodsinfo-cntainer">
		<!-- 返回按钮 -->
		<image class="goodsinfo-back-icon" :src="resource + 'goods-back.png'"></image>
		<!-- 图片背景 -->
		<view class="goodsinfo-pic-back">
			<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
		</view>
		<!-- 滚动至顶部部分 -->
		<view class="goodsinfo-top" :style="showFixedInfo ? 'background:rgba(0, 0, 0, 0.9);' : 'visibility: hidden;'">
			<view class="goodsinfo-top-left">
				<image :src="resource + 'solitaire-topbg.png'"></image>
				崔韩
			</view>
			<view class="goodsinfo-top-right">
				<image :src="resource + 'contact.png'" @click="showTouch = true"></image>
				<van-button color="#FFCF4F" round size="small">店铺</van-button>
			</view>
		</view>
		<!-- 默认进入内容部分 -->
		<view class="goodsinfo-content">
			<!-- 达到顶部隐藏 -->
			<view class="goodsinfo-bottom" :style="!showFixedInfo ? '' : 'visibility: hidden;'">
				<view class="goodsinfo-bottom-left">
					<image :src="resource + 'solitaire-topbg.png'"></image>
					崔韩
				</view>
				<view class="goodsinfo-bottom-right">
					<image :src="resource + 'message-black.png'" @click="showTouch = true"></image>
					<van-button color="#FFCF4F" round size="small">店铺</van-button>
				</view>
			</view>
			<!-- tab切换 -->
			<view class="goodsinfo-tab" :style="!showFixedInfo ? '' : 'position: fixed; top: 100upx; left: 0; width: 100%;'">
				<view @click="tabIndex = 0" :class="tabIndex == 0 ? 'active' : ''">特产详情</view>
				<view @click="tabIndex = 1" :class="tabIndex == 1 ? 'active' : ''">购买记录(887件)</view>
			</view>
			<!-- 特产详情内容 -->
			<view class="goodsinfo-content-list" v-if="tabIndex == 0">
				<view class="goods-info">
					<view class="title">阿克苏苹果树上着地【钓竿阿苏妲己哈时间的话】</view>
					<view class="specifications">品名:阿克苏四团吊干杏</view>
					<view class="specifications">产地:阿克苏四团</view>
					<view class="specifications">规格:阿克苏四团</view>
					<view class="specifications">发货地:阿克苏四团</view>
					<view class="specifications">快递:阿克苏四团</view>
					<view class="specifications">不发货地区:新疆/西藏</view>
				</view>
				<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
				<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
			</view>
			<!-- 购买记录内容 -->
			<view class="goodsinfo-buy-log" v-if="tabIndex == 1">
				<view class="buy-log-item" v-for="(item, index) in 20" :key="index">
					<image :src="resource + 'solitaire-topbg.png'"></image>
					<view class="name-time">
						<view>
							<text>振兴**是</text>
							<text>本周</text>
						</view>
						<view>一季杏仁干（500g*2袋）</view>
					</view>
					<view class="buy-num">
						<text>+</text>
						<text>2</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 联系方式 -->
		<van-overlay :show="showTouch" @click="showTouch = false" z-index="1000">
			<view class="goodsinfo-touch-block">
				<image class="user-avatar" :src="resource + 'solitaire-topbg.png'"></image>
				<view class="line-block">
					<text>昵称</text>
					<text>崔韩</text>
					<text @click="copyPhone">复制</text>
				</view>
				<view class="line-block">
					<text>手机</text>
					<text>13576756789</text>
					<text>呼叫</text>
				</view>
				<view class="copyright">
					该特产由
					<text>崔韩</text>
					提供。
				</view>
			</view>
		</van-overlay>
		
		<!-- 底部菜单 -->
		<view class="goodsinfo-footer">
			<view @click="buycardShow = true" class="circle">
				<van-icon :name="resource + 'buycard.png'" size="40px" info="99" />
			</view>
			<view class="circle"><van-icon :name="resource + 'give.png'" size="40px" /></view>
			<view @click="selectSpecShow = true" class="buy-btn">我要买</view>
		</view>
		<!-- 购物车组件 start-->
		<Buycard :buycardShow="buycardShow"></Buycard>
		<!-- 购物车组件 end-->
		
		<!-- 我要买 选择规格 start-->
		<SelectSpec :selectSpecShow="selectSpecShow"></SelectSpec>
		<!-- 我要买 选择规格 end-->
	</scroll-view>
</template>

<script>
import Buycard from "../../components/goods/Buycard.vue"
import SelectSpec from "../../components/goods/SelectSpec.vue"
export default {
	components:{
		Buycard,
		SelectSpec
	},
	data() {
		return {
			resource: this.resource,
			//滚动至顶部显示
			showFixedInfo: false,
			//tab切换
			tabIndex: 0,
			//是否展示联系方式组件
			showTouch: false,
			//是否展示购物车组件
			buycardShow:false,
			//是否显示选择规格组件 - 点击我要买
			selectSpecShow:false
		};
	},
	onLoad() {
		//监听购物车关闭
		uni.$on('buycardClose',(data)=>{
			this.buycardShow = data
		})
		//监听选择规格关闭
		uni.$on('selectSpecShowClose',(data)=>{
			this.selectSpecShow = data
		})
	},
	onPageScroll(e) {
		console.log('滚动距离为：' + e.scrollTop);
		if (e.scrollTop >= 420) {
			if (this.showFixedInfo == true) {
				return;
			}
			this.showFixedInfo = true;
		} else {
			if (this.showFixedInfo == false) {
				return;
			}
			this.showFixedInfo = false;
		}
	},
	methods: {
		copyPhone(){
			console.log(2)
		}
	}
};
</script>

<style>
page {
}

.goodsinfo-back-icon {
	position: fixed;
	left: 20upx;
	top: 40upx;
	width: 60upx;
	height: 60upx;
	z-index: 10;
}

.goodsinfo-pic-back {
	width: 100%;
	height: 80%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 0;
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.goodsinfo-pic-back image {
	width: 100%;
	height: 100%;
}
.goodsinfo-top {
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 300upx);
	padding: 46upx 200upx 10upx 100upx;
	background: rgba(0, 0, 0, 0.79);
	z-index: 7;
}
.goodsinfo-top-left {
	font-size: 30upx;
	color: #ffffff;
}
.goodsinfo-top-left image {
	width: 60upx;
	height: 60upx;
	margin-right: 20upx;
	border-radius: 50%;
	vertical-align: middle;
}
.goodsinfo-top-right {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.goodsinfo-top-right image {
	width: 40upx;
	height: 40upx;
	margin-right: 24upx;
}

.goodsinfo-content {
	min-height: 100%;
	padding-top: 700upx;
	padding-bottom: 120upx;
	z-index: 5;
	position: relative;
}
.goodsinfo-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 80upx);
	padding: 40upx;
}
.goodsinfo-bottom-left {
	font-size: 36upx;
	color: #ffffff;
}
.goodsinfo-bottom-left image {
	width: 100upx;
	height: 100upx;
	margin-right: 20upx;
	border-radius: 50%;
	vertical-align: middle;
}
.goodsinfo-bottom-right {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.goodsinfo-bottom-right image {
	width: 70upx;
	height: 70upx;
	margin-right: 24upx;
}
.goodsinfo-tab {
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	padding: 60upx 30upx 0upx;
	border-radius: 20upx 20upx 0 0;
	background: #ffffff;
}
.goodsinfo-tab view {
	color: #666666;
	font-size: 32upx;
	font-weight: 500;
	margin-right: 60upx;
	padding-bottom: 15upx;
}
.active {
	color: #333333 !important;
}
.active::after {
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

.goodsinfo-content-list {
	background: #ffffff;
}
.goodsinfo-content-list .goods-info {
	padding: 30upx;
}
.goodsinfo-content-list .goods-info .title {
	margin-bottom: 20upx;
	font-size: 48upx;
	color: #000000;
	font-weight: 600;
}
.goodsinfo-content-list .goods-info .specifications {
	font-size: 32upx;
	color: #333333;
	line-height: 52upx;
}

.goodsinfo-content-list image {
	display: block;
	width: 100%;
}

.goodsinfo-buy-log {
	padding: 30upx;
	background: #ffffff;
}
.goodsinfo-buy-log .buy-log-item {
	display: inline-flex;
	justify-content: flex-start;
	align-items: center;
	padding: 14upx 30upx;
	margin-bottom: 20upx;
	background: #f3f3f3;
	border-radius: 80upx;
}

.buy-log-item image {
	width: 70upx;
	height: 70upx;
	border-radius: 50%;
}
.name-time view:nth-child(1) text:nth-child(1) {
	color: #999999;
	font-size: 24upx;
}
.name-time view:nth-child(1) text:nth-child(2) {
	color: #cccccc;
	font-size: 20upx;
	padding-left: 10upx;
}
.name-time view:nth-child(2) {
	color: #666666;
	font-size: 26upx;
}

.buy-num {
	color: #999999;
	font-size: 48upx;
	font-weight: bold;
}

.goodsinfo-footer {
	width: 100%;
	height: 120upx;
	position: fixed;
	bottom: 0;
	left: 0;
	display: flex;
	justify-content: space-around;
	align-items: center;
	z-index: 10;
	background: #fbfbfb;
}

.goodsinfo-footer .circle {
	width: 80upx;
	height: 80upx;
	background: #ffffff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 0 15upx #f5f5f5;
}

.goodsinfo-footer .buy-btn {
	width: 52%;
	line-height: 86upx;
	border-radius: 50upx;
	background: #ffcf4f;
	text-align: center;
	font-size: 30upx;
	color: #333333;
}

.goodsinfo-touch-block {
	position: relative;
	width: calc(80% - 100upx);
	padding: 50upx;
	top: 30%;
	left: 10%;
	background: #ffffff;
	border-radius: 30upx;
}

.goodsinfo-touch-block .user-avatar {
	width: 120upx;
	height: 120upx;
	position: absolute;
	left: calc(50% - 60upx);
	top: -60upx;
	border-radius: 50%;
}
.goodsinfo-touch-block .line-block {
	display: flex;
	justify-content: space-between;
	margin-top: 50upx;
}
.goodsinfo-touch-block .line-block text:nth-child(1) {
	color: #666666;
	font-size: 30upx;
}
.goodsinfo-touch-block .line-block text:nth-child(2) {
	color: #333333;
	font-size: 32upx;
	font-weight: 500;
}
.goodsinfo-touch-block .line-block text:nth-child(3) {
	display: inline-block;
	width: 93upx;
	padding: 5upx 5upx;
	text-align: center;
	border: 1upx solid #576b95;
	border-radius: 40upx;
	color: #576b95;
	font-size: 28upx;
}
.goodsinfo-touch-block .copyright {
	margin-top: 40upx;
	text-align: center;
	color: #666666;
	font-size: 30upx;
}

.goodsinfo-touch-block .copyright text {
	color: #333333;
	font-size: 30upx;
	font-weight: 500;
}
</style>
