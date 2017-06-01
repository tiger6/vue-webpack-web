<template lang="html">
	<div class="classify_box">
		<div class="class_head left">热门音乐人分类</div>
		<div class="c_more right"><a href="javascript:void(0)">{{$t('more')}}</a></div>
		<div class="clear"></div>
		<ul class="class_box">
			<li v-for="item in classList">{{item}}</li>
		</ul>
	</div>
</template>
<script>
import * as classArr from '../../service/tempdata/home/classList'
	export default{
		 data(){
		 	return{
		 		classList:classArr.classList
		 	}
		},
		mounted(){
			// console.log(this.classList)
		}
	}
</script>
<style lang="less" scoped>
	.classify_box{
		font-size:14px;
		.class_head{
			color:#222;
		}
		.c_more {
		    width: 30px;
		     a {
			    font-size: 12px;
			    color: #999;
			    line-height: 22px;
			    &:hover{
			    	color: #fff;
			    	background-color: #999;
			    }
			}
		}
		.class_box{
			border-top:1px solid #e8e8e8;
			border-left:1px solid #e8e8e8;
			li{
				border-right: 1px solid #e8e8e8;
				border-bottom:1px solid #e8e8e8;
				width:50%;
				display:inline-block;
				padding:8px 0 8px 6px;
				color: #138A64;
				&:hover{
					background-color: #e2dede;
					cursor: pointer;
				}
			}
		}
	}
</style>