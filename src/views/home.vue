<template lang="html">
	<div class="m_home" style="height:100%">
		<!-- home content -->
			<head-top @cLocale="cLocaleInfo"></head-top>
			<div class="m_content">
				<el-row :gutter="20">
				  <el-col :span="15"><div class="grid-content bg-purple">
					  <home-banner></home-banner>
					  <book-top></book-top>
				  </div></el-col>
				  <el-col :span="9"><div class="grid-content bg-purple">
				  	<div class="join">
				        <div class="join-block">
				            <h2><a href="/artists/genre_page/6/" class="primary-link" target="_blank">41646</a></h2>
				            <p>音乐人</p>
				        </div>
				        <div class="join-block">
				            <h2><a href="/disc_jockeys/" class="primary-link" target="_blank">2537</a></h2>
				            <p>播客</p>
				        </div>
				        <div class="join-block join-block-last">
				            <h2><a href="/labels/" class="primary-link" target="_blank">1006</a></h2>
				            <p>厂牌</p>
				        </div>
				        <div class="clear"></div>
				        <el-button type="primary">我要加入</el-button>
				    </div>
				    <class-list></class-list>
				  </div></el-col>
				</el-row>
			</div>
			<foot-bottom></foot-bottom>
	</div>
</template>
<script>
import headTop from '../components/header'
import footBottom from '../components/footer'
import homeBanner from '../components/home/banner'
import classList from '../components/home/classify'
import bookTop from '../components/home/bookTop'
	export default{
		name:'home',
		data(){
			return{
				type: '1',
		      	footer: {
		        	url: 'http://www.douban.com'
		      	}
			}
		},
		components:{
			headTop,footBottom,homeBanner,classList,bookTop
		},
		methods:{
			cLocaleInfo(msg){
				// 动态执行语言切换
				// this.footer.title=`${this.$t('infoMore')}`
			}
		}
	}
</script>
<style lang='less' scoped>
 @import '../assets/less/mixin.less';
	.m_content{
		.mixin_wh(950px,auto);
		margin:0 auto;
		min-height: 700px;
	}
	.join {
	    margin-bottom: 30px;
	    .join-block {
		    float: left;
		    width: 32%;
		    margin-right: 2px;
		    height: 57px;
		    background-color: #F5F7F8;
		    text-align: center;
		     h2 {
			    margin: 9px 0 0 0;
			     a {
				    font-size: 16px;
				    font-weight: bold;
				}
			}
			 p {
			    margin: 0px;
			    font-size: 14px;
			    color: #666;
			}
		}
		button{
			margin-top: 3px;
			width: 98%;
		}
	}
	h2 {
	    font: 15px Arial, Helvetica, sans-serif;
	    color: #072;
	    margin: 0 0 12px 0;
	    line-height: 150%;
	}
	a.primary-link {
	    font-size: 14px;
	    line-height: 14px;
	    color: #138A64;
	    &:hover{
	    	color: #FFF;
	    	background-color: #138A64
	    }
	}
</style>