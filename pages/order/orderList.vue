<template>
	<view>
		<!-- 订单列表组件 -->
		<OrderList></OrderList>
	</view>
</template>

<script>
import OrderList from "../../components/goods/OrderList.vue"
export default {
	components: {
		OrderList
	},
	data() {
		return {
			resource: this.resource,
			show: false
		};
	},
	onLoad(Option) {
		uni.setNavigationBarTitle({
			title: Option.title
		})
	},
	methods: {}
};
</script>

<style>

</style>
