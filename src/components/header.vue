<template lang="html">
	<div class="m_head">
		<!-- head content -->
		<div class="bd">
			<div class="top-nav-info">
			  <a href="javascript:;" class="nav-login" rel="nofollow">{{$t('login')}}</a>
			  <a href="javascript:;" class="nav-register" rel="nofollow">{{$t('register')}}</a>
			</div>
			<div class="top-nav-doubanapp">
			  	<el-dropdown @command="changeLocale">
					  <span class="el-dropdown-link">
					    {{$t('lang')}}<i class="el-icon-caret-bottom el-icon--right"></i>
					  </span>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item command="zh">{{menus.zh}}</el-dropdown-item>
				    <el-dropdown-item  command="en">{{menus.en}}</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</div>

			<div class="global-nav-items">
			  <ul>
			    <li class="" v-for="item in headInfoList">
			      <a :href="item.url" target="_blank" :data-moreurl-dict="item.dict" v-html="localeInfo==='en'?item.enName:item.name"></a>
			    </li>
			    <li>
				    <el-dropdown @command="handleCommand">
					  <span class="el-dropdown-link">
					    {{$t('more')}}<i class="el-icon-caret-bottom el-icon--right"></i>
					  </span>
					  <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item  command="https://moment.douban.com">{{$t('moment')}}</el-dropdown-item>
					    <el-dropdown-item  command="https://ypy.douban.com">{{$t('ypy')}}</el-dropdown-item>
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
			      <a href="javascript:;">{{$t('douMusic')}}</a>
			    </div>
			    <div class="nav-search">
			    	<div class="inp">
			    		<el-input placeholder="唱片名、表演者、条码、ISRC" v-model="input5">
					    	<el-button slot="append" icon="search"></el-button>
					  	</el-input>
			    	</div>
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
import {setStore,getStore} from '../common/util'
import * as heads from '../service/tempdata/home/headList'
import * as tips from '../service/tempdata/home/headTipList'

export default{
	data(){
		return {
			headInfoList:heads.headList,
			headTipList:tips.tipList,
			input5: '',
			menus: {
		        'zh': `${this.$t('中文')}`,
		        'en': `${this.$t('English')}`
		    },
		    localeInfo:getStore('lang')?getStore('lang'):'zh'
		}
	},
	methods:{
		changeLocale (locale) {
			this.localeInfo=locale;
			this.$i18n.locale=locale;
			setStore('lang',locale);
			// this.$emit('cLocale',locale);
	    },
        handleCommand(command){
        	// this.$message(command);
        	window.open(command);
        }
	},
	mounted(){
		// console.log(param);	
	},
	computed:{

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