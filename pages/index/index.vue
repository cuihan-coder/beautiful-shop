<template>
	<view class="app">
		<!-- 头部 -->
		<view class="index-top-back">
			<image :src="resource + 'solitaire-topbg.png'"></image>
			<navigator class="index-top-content">
				<cover-image class="index-top-avatar" src="../../static/image/find-click.png"></cover-image>
				<view>
					<!-- 店铺名称 -->
					<view class="index-top-saleinfo-name">
						<text>江小百</text>
						<cover-image :src="resource + 'right-jt.png'"></cover-image>
					</view>
					<view class="index-top-saleinfo-product">谁谁谁：产生订单「番禺二手00产品名称」</view>
				</view>
			</navigator>
		</view>
		<!-- 搜索框 以及内容列表-->
		<van-search class="index-van-search" offset-top="200" v-model="value" shape="round" background="#f3e3d3" placeholder="请输入搜索关键词" />
		<view class="placeholder-height"></view>
		<van-tabs sticky swipeable>
			<van-tab v-for="(item, index) in goodList" :key="index" :title="index">
				<van-skeleton row="30" :loading="loading">
					<view @click="showgoods()" class="index-goods-item" v-for="(gitem, index) in item" :key="index">
						<image :src="gitem.image"></image>
						<view class="index-goods-info">
							<view>{{ gitem.name }}</view>
							<view>{{ gitem.salesNum }}份已售</view>
						</view>
					</view>
				</van-skeleton>
			</van-tab>
		</van-tabs>
		<!-- 产品弹窗 start-->
		<van-popup
			:show="goodsShow"
			closeable
			close-icon-position="top-left"
			close-icon="arrow-down"
			position="bottom"
			custom-style="height: 100%;opacity:0.7;"
			safe-area-inset-top
			@close="onClose"
		>
			<view class="index-popup-content">
				<view class="index-goods-name">西域春利乐砖牛奶</view>
				<view class="index-xcx-link" @click="showXcxLink()">
					<van-icon :name="resource + 'icon_link.png'" />
					<text>微信公众号小程序路径></text>
				</view>
			</view>
			<!-- 下单模块 -->
			<view class="index-buy-contain">
				<view class="index-buy-btn" @click="clickselfBuyShow">
					<view><image :src="resource + 'home_ico_cust.png'"></image></view>
					<view>自助下单</view>
					<view>(让顾客自己下单)</view>
				</view>
				<view class="index-buy-btn" @click="selectSpecShow = true ; goodsShow = false">
					<view><image :src="resource + 'home_ico_list.png'"></image></view>
					<view>代客下单</view>
					<view>(帮顾客下单)</view>
				</view>
				<view class="index-buy-btn">
					<view><image :src="resource + 'ico_baopin.png'"></image></view>
					<view>(帮会爆品)</view>
				</view>
			</view>
			<!-- 底部 自提 详情-->
			<view class="index-zt-xq">
				<navigator url="./receiveArea">
					<image :src="resource + 'ico_1_extract.png'"></image>
					自提
				</navigator>
				<navigator url="../business/goodsinfo">
					<image :src="resource + 'ico_1_detail.png'"></image>
					详情
				</navigator>
			</view>
		</van-popup>
		<!-- 产品弹窗 end-->

		<!-- 自助下单弹窗 start-->
		<van-popup
			:show="selfBuyShow"
			closeable
			close-icon-position="top-left"
			close-icon="arrow-down"
			position="bottom"
			custom-style="height: 100%;opacity:1;background:#FFC70F;"
			safe-area-inset-top
			@close="clickselfBuyShow"
		>
			<view class="index-popup-self-content">
				<view class="index-self-title">自主下单</view>
				<view class="index-self-desc">
					通过转发或生成超级海报让顾客自助下单，顾客看到的价格为
					<text>零售价。</text>
				</view>
				<!-- 产品类型列表 -->
				<view class="index-self-table">
					<view class="index-self-theader">
						<view>规格</view>
						<view>帮会价</view>
						<view>零售价</view>
					</view>
					<view class="index-self-tbody">
						<view>剑子撒大声疾呼打（500g*200待）</view>
						<view>445.00</view>
						<view>
							¥
							<input type="digit" value="111.00" />
						</view>
					</view>
					<view class="index-self-tbody">
						<view>剑子撒大声疾呼打（500g*200待）</view>
						<view>445.00</view>
						<view>
							¥
							<input type="digit" value="111.00" />
						</view>
					</view>
				</view>
				<!-- 顾客视角 start-->
				<view class="index-gksj" @click="clickGksjShow">
					<view>
						<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
						顾客视角
					</view>
					<view>默认></view>
				</view>
				<!-- 顾客视角 end -->
			</view>
		</van-popup>
		<!-- 自助下单弹窗 end-->
		<!-- 自助下单弹窗-点击顾客视角 start-->
		<van-popup
			:show="gksjShow"
			round
			position="bottom"
			custom-style="height: 65%;padding:40upx;opacity:1;background:#ffffff;"
			safe-area-inset-top
			@close="clickGksjShow()"
		>
			<view class="index-gksj-title">选择特产故事，赋予特产灵魂。顾客通过链接和海报进入，看到的特产详情的就是该故事，并可以直接下单。</view>
			<view class="index-gksj-block">
				<view class="index-gksj-left">
					<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
					默认
				</view>
				<view class="index-gksj-right">
					<navigator url="/pages/index/selectgoodsPic">换封面</navigator>
					<navigator>查看</navigator>
					<view>已选择</view>
				</view>
			</view>
		</van-popup>
		<!-- 自助下单弹窗-点击顾客视角 end-->
		

		<!-- 选择商品时的背景 -->
		<view class="index-select-img" v-if="goodsShow">
			<image src="http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514"></image>
		</view>
		<!-- 复制链接弹窗组件 start-->
		<van-overlay z-index="101" :show="copylinkShow" @click="showXcxLink">
			<view class="wrapper">
				<view class="confirm-tip">
					<view class="index-link-cont">pages/goods/shown/shown?scene=6055486945d1d06ab008b100</view>
					<view class="index-link-btn">
						<van-button type="default" round @click="pageTo('/pages/order/index')" icon="question-o" size="normal">如何使用</van-button>
						<van-button @click="copyLink()" type="primary" round size="normal">复制链接</van-button>
					</view>
				</view>
			</view>
		</van-overlay>
		<!-- 复制链接弹窗组件 end-->
		<!-- 底部菜单 -->
		<pubFooter></pubFooter>
		<!-- 下单选择规格 -->
		<SelectSpec :selectSpecShow="selectSpecShow" isHelpBuy="true"></SelectSpec>
	</view>
</template>

<script>
import pubFooter from '../../components/public/footer.vue';
import Dialog from '../../wxcomponents/vant/dialog/dialog';
import SelectSpec from "../../components/goods/SelectSpec.vue"

export default {
	components: {
		pubFooter,
		SelectSpec
	},
	data() {
		return {
			resource: this.resource,
			goodList: {
				水果: [
					{
						name: '水果好吃的狠',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠2',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠2',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠2',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠2',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠2',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					}
				],
				坚果: [
					{
						name: '水果好吃的狠3',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠4',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					}
				],
				特产: [
					{
						name: '水果好吃的狠3',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					},
					{
						name: '水果好吃的狠4',
						salesNum: 10,
						image: 'http://img.nfgood.com/afaebb2d555bbcbebdbae0af4bf5ae77.jpg.logo?sign=c557ab7e6f7e4cb0e20ebd1b33186de4&t=6073d514'
					}
				]
			},
			active: '特产',
			loading: true,
			//点击商品显示
			goodsShow: false,
			//点击复制链接
			copylinkShow: false,
			//点击自主下单
			selfBuyShow: false,
			//点击顾客视角
			gksjShow:false,
			//下单选择规格
			selectSpecShow:false
		};
	},
	onLoad() {
		let that = this;
		let clearId = setInterval(function() {
			that.loading = false;
			clearInterval(clearId);
		}, 1000);
		
		//监听选择规格关闭
		uni.$on('selectSpecShowClose',(data)=>{
			this.selectSpecShow = data
		})
	
	},
	methods: {
		pageTo(url) {
			uni.navigateTo({
				url
			});
		},
		onClose(e) {
			this.goodsShow = false;
		},
		showgoods() {
			this.goodsShow = true;
		},
		//点击自主下单
		clickselfBuyShow() {
			this.selfBuyShow = !this.selfBuyShow;
		},
		//展示小程序链接
		showXcxLink() {
			this.copylinkShow = !this.copylinkShow;
		},
		//复制链接
		copyLink() {
			uni.setClipboardData({
				data: '链接地址',
				success: function() {
					uni.showToast({
						icon: 'none',
						title: '复制成功'
					});
				}
			});
		},
		//点击顾客视角
		clickGksjShow(){
			this.gksjShow = !this.gksjShow
		}
	}
};
</script>

<style>
.app {
	width: 100%;
	padding-top: 260upx;
	background: #fafafa;
}
.index-top-back {
	width: 100%;
	height: 260upx;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
}
.index-top-back image {
	width: 100%;
	height: 100%;
}
.index-top-content {
	position: fixed;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	top: 50upx;
	left: 20upx;
	z-index: 2;
}
.index-top-content > .index-top-avatar {
	width: 100upx;
	height: 100upx;
	margin-right: 40upx;
	border-radius: 50%;
}
.index-top-saleinfo-name {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}
.index-top-saleinfo-name cover-image {
	width: 30upx;
	height: 30upx;
	margin-left: 10upx;
}
.index-top-saleinfo-name > text {
	font-size: 32upx;
	color: #000000;
	font-weight: bold;
}
.index-top-saleinfo-product {
	width: 60%;
	margin-top: 15upx;
	font-size: 25upx;
	color: #978452;
}
.index-van-search {
	width: 100%;
	position: fixed;
	top: 260upx;
	left: 0;
	z-index: 2;
}
.placeholder-height {
	width: 100%;
	height: 100upx;
}
.index-goods-item {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 84%;
	padding: 24upx;
	margin: 20upx auto 20upx;
	background: #ffffff;
	box-shadow: 0 0 15upx #d8d8d8;
	border-radius: 20upx;
}
.index-goods-item image {
	width: 120upx;
	height: 120upx;
}
.index-goods-info {
	padding-left: 20upx;
}
.index-goods-info view:nth-child(1) {
	font-size: 34upx;
	font-weight: 500;
	color: #000000;
	margin-bottom: 18upx;
}
.index-goods-info view:nth-child(2) {
	font-size: 30upx;
	color: #999999;
}
.index-popup-content {
	width: 100%;
	margin-top: 180upx;
}
.index-goods-name {
	padding-left: 80upx;
	font-size: 56upx;
	font-weight: 500;
	color: #333333;
}
.index-xcx-link {
	padding-left: 80upx;
	padding-top: 20upx;
	font-size: 36upx;
	font-weight: 500;
	color: #5a6b92;
}

.wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
}
.wrapper .confirm-tip {
	width: 70%;
	background: #f5f5f5;
	border-radius: 20upx;
	padding: 44upx;
}

.confirm-tip .index-link-cont {
	margin-bottom: 65upx;
	font-size: 32upx;
	color: #333333;
	text-align: center;
}
.confirm-tip .index-link-btn {
	display: flex;
	justify-content: space-between;
}

.index-buy-contain {
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	position: absolute;
	bottom: 165upx;
}
.index-buy-btn {
	width: 33%;
	flex-shrink: 1;
	text-align: center;
}
.index-buy-btn image {
	width: 160upx;
	height: 160upx;
}

.index-buy-btn view:nth-child(2) {
	font-size: 36upx;
	color: #000000;
}
.index-buy-btn view:nth-child(3) {
	font-size: 32upx;
	color: #666666;
}
.index-zt-xq {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100upx;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-top: 2upx solid #e8e8e8;
}

.index-zt-xq navigator {
	width: calc(50% - 1upx);
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 32upx;
	color: #333333;
}
.index-zt-xq navigator > image {
	width: 40upx;
	height: 40upx;
}
.index-zt-xq navigator:nth-child(1) {
	border-right: 1upx solid #e8e8e8;
}

.index-select-img {
	z-index: 2;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	animation: toTop 0.5s linear;
	-webkit-animation: toTop 0.5s linear; /*Safari and Chrome*/
}
@keyframes toTop {
	from {
		height: 0;
	}
	to {
		height: 100%;
	}
}
.index-select-img image {
	width: 100%;
	height: 100%;
}

.index-popup-self-content {
	width: 100%;
	margin-top: 136upx;
}
.index-self-title {
	font-size: 50upx;
	color: #000000;
	font-weight: 500;
	padding-left: 56upx;
}
.index-self-desc {
	width: 90%;
	padding-left: 56upx;
	margin-top: 20upx;
	font-size: 34upx;
}

.index-self-desc text {
	color: #be2b2b;
	padding-left: 16upx;
}
.index-self-table {
	width: 90%;
	margin: 40upx auto 40upx;
	border-radius: 20upx;
}
.index-self-theader {
	width: 100%;
	height: 100upx;
	display: flex;
	flex-wrap: nowrap;
	background: #f7f7f7;
	color: #000000;
	font-size: 34upx;
	font-weight: 500;
	border-radius: 20upx 20upx 0 0;
}
.index-self-theader view:nth-child(1) {
	width: 40%;
	line-height: 100upx;
	text-align: center;
}
.index-self-theader view:nth-child(2) {
	width: 30%;
	line-height: 100upx;
	text-align: left;
}

.index-self-theader view:nth-child(3) {
	width: 30%;
	line-height: 100upx;
	text-align: left;
}
.index-self-tbody {
	height: 100upx;
	padding: 10upx 20upx;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;
	background: #ffffff;
	color: #000000;
	font-size: 30upx;
	border-bottom: 1upx solid #f0f0f0;
}
.index-self-tbody view:nth-child(1) {
	width: 40%;
	text-align: left;
}
.index-self-tbody view:nth-child(2) {
	width: 30%;
	text-align: left;
	font-weight: 500;
}

.index-self-tbody view:nth-child(3) {
	width: 30%;
	height: 70upx;
	padding-left: 10upx;
	display: flex;
	align-items: center;
	border-radius: 20upx;

	text-align: left;
	background: #f7f7f7;
	color: #999999;
	font-weight: 500;
}
.index-self-tbody view:nth-child(3) input {
	width: 60%;
	height: 100%;
	border: 1upx solid #f7f7f7;
	color: #000000;
	font-weight: 500;
	padding-left: 28upx;
}
.index-self-tbody:last-child {
	border-radius: 0 0 20upx 20upx;
	border-bottom: none;
}
.index-gksj {
	width: 83%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20upx 30upx;
	background: #ffffff;
	border-radius: 20upx;
}
.index-gksj view:nth-child(1) {
	font-size: 32upx;
	color: #000000;
}
.index-gksj view:nth-child(1) image {
	width: 80upx;
	height: 80upx;
	vertical-align: middle;
	margin-right: 18upx;
}
.index-gksj view:nth-child(2){
	color: #999999;
}

.index-gksj-title{
	font-size: 34upx;
	    color: #000000;
	    font-weight: 600;
}

.index-gksj-block{
	background: #F7F7F7;
	margin-top: 30upx;
	padding: 30upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 20upx;
	
}
.index-gksj-left{
	font-size: 30upx;
	color: #000000;
}
.index-gksj-left image{
	width: 60upx;
	height: 60upx;
	margin-right: 20upx;
	vertical-align: middle
}
.index-gksj-right{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.index-gksj-right navigator{
	width: 100upx;
	border: 1upx solid #999999;
	border-radius: 40upx;
	background: #ffffff;
	color: #000000;
	font-size: 26upx;
	text-align: center;
	margin-right: 10upx;
	
}
.index-gksj-right view{
	width: 100upx;
	color: #999999;
	border: 1upx solid #999999;
	border-radius: 40upx;
	background: #E6E6E6;
	font-size: 26upx;
	text-align: center;
}
</style>
