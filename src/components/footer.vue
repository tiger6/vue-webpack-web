<template lang="html">
	<div class="m_foot">
		<!-- foot content -->
		<div class="footer">
			<span id="icp" class="left gray-link">
			    © 2005－2017 douban.com, all rights reserved XXXXX科技有限公司
			</span>
			<a href="https://www.douban.com/hnypt/variformcyst.py" style="display: none;"></a>
			<span class="right">
			    <a href="https://www.douban.com/about">关于豆瓣</a>
			    · <a href="https://www.douban.com/jobs">在豆瓣工作</a>
			    · <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
			    · <a href="https://www.douban.com/about?policy=disclaimer">免责声明</a>
			    
			    · <a href="https://help.douban.com/?app=music" target="_blank">帮助中心</a>
			    · <a href="https://douban.fm/app">手机音乐</a>
			    · <a href="https://www.douban.com/partner/">豆瓣广告</a>
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang='less' scoped>
	.m_foot{
		background-color: #eee;
		text-align: center;
	    z-index: 500;
	    bottom: 0;
	    font-size: 12px;
	    width: 950px;
    	margin: 0 auto;
	}
	.footer {
	    color: #999;
	    padding: 6px 0;
	    margin-top: 40px;
	    overflow: hidden;
	    zoom: 1;
	    border-top: 1px dashed #ddd;
	}
	a {
    	cursor: pointer;
    	&:link {
		    color: #37a;
		    text-decoration: none
		}
		&:visited {
		    color: #666699;
		    text-decoration: none
		}
		&:hover {
		    color: #FFFFFF;
		    text-decoration: none;
		    background: #37a
		}
	}
</style>