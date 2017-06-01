<template lang="html">
	<div class="ads">
		<el-carousel :interval="4000" type="card" height="200px">
		    <el-carousel-item v-for="item in bannerList" :key="item">
		    	<a :href="item.url" target=_blank>
		          <img :src="item.imgUrl" height="250">
		        </a>
		    </el-carousel-item>
		  </el-carousel>
	</div>
</template>
<script>
import * as banners from '../../service/tempdata/home/bannerList'
	export default{
		 data(){
		 	return{
		 		bannerList:banners.bannerList
		 	}
		}
	}
</script>
<style lang="less" scoped>
	
</style>