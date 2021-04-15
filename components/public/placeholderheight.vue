<template>
	<view class="placeholder-block" :style="'height:' + height "></view>
</template>

<script>
	export default{
		name:'PlaceholderHeight',
		props:{
			height:{
				type: String,
				default: 0
			}
		}
	}
</script>

<style>
	.placeholder-block{
		width: 100%;
	}
</style>
