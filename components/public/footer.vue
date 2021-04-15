<template>
	<view class="footer-contain">
		<view class="footer-placeholder"></view>
		<van-tabbar :active="active" active-color="#333333" @change="onChange">
		  <van-tabbar-item :icon="active == 0 ? footerIcon[active].active : footerIcon[0].default">{{footerIcon[0].name}}</van-tabbar-item>
		  <van-tabbar-item :icon="active == 1 ? footerIcon[active].active : footerIcon[1].default" >{{footerIcon[1].name}}</van-tabbar-item>
		  <van-tabbar-item :icon="active == 2 ? footerIcon[active].active : footerIcon[2].default">{{footerIcon[2].name}}</van-tabbar-item>
		  <van-tabbar-item :icon="active == 3 ? footerIcon[active].active : footerIcon[3].default">{{footerIcon[3].name}}</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script>
	
	export default {
		name:'pubFooter',
		data() {
			return {
				resource: this.resource,
				active:0,
				footerIcon:[
					{
						default: "../../../static/image/index.png",
						active: "../../../static/image/index-click.png",
						name:"首页",
						url:'/pages/index/index'
					},
					{
						default: "../../../static/image/order.png",
						active: "../../../static/image/order-click.png",
						name:"订单",
						url:'/pages/order/index'
					},
					{
						default: "../../../static/image/find.png",
						active: "../../../static/image/find-click.png",
						name:"发现",
						url:'/pages/find/index'
					},
					{
						default: "../../../static/image/my.png",
						active: "../../../static/image/my-click.png",
						name:"我的",
						url:'/pages/my/index'
					}
				]
			};
		},
		mounted() {
			this.active =  this.$store.state.footerIndex 
		},
		methods: {
			onChange(e){
				this.active = e.detail
				this.$store.commit('SET_FOOTERINDEX',e.detail)
				uni.redirectTo({
					url:this.footerIcon[this.active].url,
					
				})
			}
		}
	};
	</script>
<style>

.footer-placeholder{
	height: 100upx;
}
</style>
