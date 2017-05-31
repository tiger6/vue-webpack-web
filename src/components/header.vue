<template lang="html">
	<div class="m_head">
		<!-- head content -->
		<div class="bd">
			<div class="top-nav-info">
			  <a href="https://www.douban.com/accounts/login?source=book" class="nav-login" rel="nofollow">登录</a>
			  <a href="https://www.douban.com/accounts/register?source=book" class="nav-register" rel="nofollow">注册</a>
			</div>
			<div class="top-nav-doubanapp">
			  <a href="https://www.douban.com/doubanapp/app?channel=top-nav" class="lnk-doubanapp">下载豆瓣客户端</a>
			</div>

			<div class="global-nav-items">
			  <ul>
			    <li class="" v-for="item in headInfoList">
			      <a :href="item.url" target="_blank" :data-moreurl-dict="item.dict">{{item.name}}</a>
			    </li>
			    <li>
				    <el-dropdown @command="handleCommand">
					  <span class="el-dropdown-link">
					    更多<i class="el-icon-caret-bottom el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item v-for="items in moreList" :command="items.url" v-loading.fullscreen.lock="loading">{{items.name}}</el-dropdown-item>
					  </el-dropdown-menu>
					</el-dropdown>
			    </li>
			  </ul>
			</div>
  		</div>

  		<div id="db-nav-music" class="nav">
		  <div class="nav-wrap">
			  <div class="nav-primary">
			    <div class="nav-logo">
			      <a href="https://music.douban.com">豆瓣音乐</a>
			    </div>
			    <div class="nav-search">
			    	<div class="inp">
			    		<el-input placeholder="唱片名、表演者、条码、ISRC" v-model="input5">
					    	<el-button slot="append" icon="search"></el-button>
					  	</el-input>
			    	</div>
			      <!-- <form action="https://music.douban.com/subject_search" method="get" _lpchecked="1">
			        <fieldset>
			          <legend>搜索：</legend>
			          <label for="inp-query">
			          </label>
			          <div class="inp"><input id="inp-query" name="search_text" size="22" maxlength="60" placeholder="唱片名、表演者、条码、ISRC" value="" autocomplete="off"></div>
			          <div class="inp-btn"><input type="submit" value="搜索"></div>
			          <input type="hidden" name="cat" value="1003">
			        </fieldset>
			      </form> -->

			    </div>
			  </div>
		  </div>

		  	<div class="nav-secondary">
				<div class="nav-items">
				  <ul>
				    <li v-for="item in headTipList">
				    	<a :href="item.url">{{item.name}}</a>
				    </li>
				  </ul>
				</div>
		  	</div>
		</div>

	</div>
</template>
<script>
import {setStore} from '../common/util'
import * as heads from '../service/tempdata/headList'
import * as tips from '../service/tempdata/headTipList'

export default{
	data(){
		return {
			showMenus: false,
			routePath:'',
			headInfoList:heads.headList,
			headTipList:tips.tipList,
			input5: '',
			moreList:[
				{"url":"https://moment.douban.com","dict":'{"from":"top-nav-click-moment","uid":"0"}','name':'一刻'},
				{"url":"https://ypy.douban.com","dict":'{"from":"top-nav-click-ypy","uid":"0"}','name':'豆瓣摄影'}
			],
			menus: {
		        'zh': `${this.$t('中文')}`,
		        'en': `${this.$t('English')}`
		    },
		    activeIndex: '1',
		    loading:false
		}
	},
	methods:{
		 onClickMore () {
	      this.showMenus = true
	    },
		changeLocale (locale) {
			this.$i18n.locale=locale;
			setStore('lang',locale);
			this.$emit('cLocale',locale);
	    },
	    handleSelect(key, keyPath) {
       	 	console.log(key, keyPath);
        },
        handleOpen(key,keyPath){
        	console.log(key, keyPath);
        },
        handleClose(key,keyPath){
        	console.log(key, keyPath);
        },
        handleCommand(command){
        	this.$message(command);
        	this.loading=true;
        	setTimeout(()=>{
        		this.loading=false
        	},1000)
        }
	},
	mounted(){
		this.routePath = this.$route.path;
		// console.log(param);	
	},
	computed:{
		leftOptions () {
	      return {
	        showBack: this.routePath !== '/'
	      }
	    },
	    title(){
	    	if(this.routePath==="/") return this.$t('home')
	    	if(this.routePath){
	    		const parts = this.routePath.split('/')
	    		return parts[1];
	    	} 
	    }
	}
}
</script>
<style lang='less' scoped>
	.m_head{
		/*height: 28px;*/
	    color: #d5d5d5;
	    background-color: #545652;
	    min-width: 950px;
	    font: 12px Helvetica,Arial,sans-serif;
	    line-height: 1.62;
	    font-size: 12px;
	    a{
			cursor: pointer;
    		text-decoration: none;
	    	&:link,&:visited,&:hover,&:active{
				color: #d5d5d5;
		    }
	    }
	    .top-nav-info {
		    float: right;
		    margin: 0 12px 0 0;
		    line-height: 28px;
		     a {
			    display: inline-block;
			    zoom: 1;
			    margin: 0;
			    padding: 0 12px;
			    height: 28px;
			}
		}
		.top-nav-doubanapp {
		    position: relative;
		    float: right;
		    margin-right: 5px;
		    line-height: 28px;
		   .lnk-doubanapp {
			    display: inline-block;
			    zoom: 1;
			    padding: 0 8px;
			    height: 28px;
			}
		}
		.global-nav-items {
		    font-size: 0;
		    li {
			    display: inline-block;
			    zoom: 1;
			    line-height: 28px;
			    font-size: 12px;
			    vertical-align: baseline;
			}
			 a {
			    display: inline-block;
			    zoom: 1;
			    padding: 0 12px;
			    height: 28px;
			}
		}
		.nav {
		    width: 100%;
		    min-width: 950px;
		    overflow: hidden;
		    zoom: 1;
		    margin-bottom: 40px;
	        background: #f0f3ef;
	        .nav-wrap {
			    border-bottom: 1px solid #e5ebe4;
			}
			.nav-primary {
			    width: 950px;
			    margin: 0 auto;
			    overflow: visible !important;
			    position: relative;
			    padding: 10px 0 5px;
			    zoom: 1;
			}
			.nav-logo {
			    float: left;
			    height: 56px;
			    width: 145px;
			    a {
				    display: block;
				    width: 100%;
				    height: 100%;
				    overflow: hidden;
				    line-height: 100em;
				}
			}
		}
		.nav-logo {
		    background: url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music_a12_2.png?s=1) no-repeat 0 12px;
		    background-image: -webkit-image-set(url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music_a12_2.png?s=1) 1x, url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music@2x.png?s=1) 2x);
		    background-image: -moz-image-set(url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music_a12_2.png?s=1) 1x, url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music@2x.png?s=1) 2x);
		    background-image: -ms-image-set(url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music_a12_2.png?s=1) 1x, url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music@2x.png?s=1) 2x);
		    background-image: -o-image-set(url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music_a12_2.png?s=1) 1x, url(//img3.doubanio.com/dae/accounts/resources/4343275/music/assets/lg_music@2x.png?s=1) 2x);
		}
		.nav-search {
		    margin-left: 147px;
		    overflow: visible !important;
		    position: relative;
		    zoom: 1;
		    padding: 10px 0 15px 0;
		    .inp {
			    width: 470px;
			    height: 34px;
			    text-align: center;
			    margin-right: -3px;
			    cursor: text;
			}
		}
		.nav-secondary {
		    width: 950px;
		    margin: 0 auto;
		    padding-bottom: 0;
		    overflow: hidden;
		    zoom: 1;
		    .nav-items {
			    float: none;
			    zoom: 1;
			    font-size: 13px;
			}
			ul {
			    margin: 9px 0;
			    li {
				    display: inline;
				    margin-right: 25px;
				    a{
						&:link, &:visited {
						    color: #555d53;
						    text-decoration: none;
						}
						 &:active, &:hover {
						    background-color: #555d53;
						    color: #fff;
						}
				    }
				}
			}
		}
	}
	.el-dropdown {
        color: inherit;
    	font-size: inherit;
	}
</style>