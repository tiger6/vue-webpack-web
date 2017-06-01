<template lang="html">
	<div class="detail">
		<!-- home content -->
			<head-top></head-top>
			<div class="m_content" v-loading="dLoading" element-loading-text="拼命加载中">
				<h1>
				    <span property="v:itemreviewed">{{listArr.title}}</span>
				    <div class="clear"></div>
				</h1>
				<el-row :gutter="20">
				  <el-col :span="15"><div class="grid-content bg-purple">
				  	<div class="subjectwrap clear">
					    <div class="subject clear">
					        <div id="mainpic" class="">
					            <a class="nbg none" :href="listArr.image" title="点击查看大图">
					                <img :src="listArr.image_hlarge" style="width: 107px">
					            </a>
					        </div>
					        <div id="info" class=""> 
					              <span class="pl">票价:</span> {{listArr.fee_str}}
					            <br> <span class="pl" v-if="listArr.label">售票渠道:<font :style="{color:'#'+listArr.label.color}">{{listArr.label.title}}</font><br></span> 
					            <span class="pl" v-if="listArr.owner">作者: {{listArr.owner.name}}</span> 
					            <br> <span class="pl">类型:</span> {{listArr.category_name}}
					            <br> <span class="pl">预售:</span> {{listArr.time_str}}
					            <br> <span class="pl">开始时间:</span> {{listArr.begin_time}}
					            <br> <span class="pl">结束时间:</span>{{listArr.end_time}}</a>
					            <br><span class="pl" v-if="listArr.tags">标签: {{listArr.tags}}<br></span> 
					            <span class="pl">地址:</span>{{listArr.address}}
					            <br>
					        </div>
					    </div>
					    <div id="interest_sectl" class="">
					        <div class="rating_wrap clearbox" rel="v:rating">
					            <div class="rating_logo">豆瓣评分</div>
					            <div class="rating_self clear" typeof="v:Rating"> <strong class="left rating_num " property="v:average"> 8.5 </strong>
					 <span property="v:best" content="10.0"></span>
					 
					                <div class="rating_right ">
					                	<el-rate v-model="rateVal" disabled disabled-void-color="#d8d3d3"></el-rate>
					                    <div class="rating_sum"> <span class="">
					                    <a href="collections" class="rating_people"><span property="v:votes">292</span>人评价</a>
					                        </span>
					                    </div>
					                </div>
					            </div>
					<span class="stars5 left" title="力荐">
					    5星
					</span>
					 
					            <div class="power" style="width:64px"></div> <span class="rating_per">47.9%</span>
					 
					            <br>
					<span class="stars4 left" title="推荐">
					    4星
					</span>
					 
					            <div class="power" style="width:48px"></div> <span class="rating_per">36.0%</span>
					 
					            <br>
					<span class="stars3 left" title="还行">
					    3星
					</span>
					 
					            <div class="power" style="width:19px"></div> <span class="rating_per">14.4%</span>
					 
					            <br>
					<span class="stars2 left" title="较差">
					    2星
					</span>
					 
					            <div class="power" style="width:0px"></div> <span class="rating_per">0.7%</span>
					 
					            <br>
					<span class="stars1 left" title="很差">
					    1星
					</span>
					 
					            <div class="power" style="width:1px"></div> <span class="rating_per">1.0%</span>
					 
					            <br>
					        </div>
					    </div>
					</div>

					<div class="rate_box">
						 评分: <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" show-text :texts="['很差', '较差', '还行', '推荐', '力荐']"></el-rate>
					</div>

					<div class="related_info">
						<h2>
						    <span class="">内容简介</span>
						      &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
						</h2>
						<div class="indent" id="link-report">
					      <span class="short">
							<div class="intro">
							    <p v-if="listArr.content" v-html="content">
							    </p>
							    </div>
					       </span>
							<a rel="nofollow" href="#">举报</a>
						</div>
					</div>
				  </div></el-col>
				  <el-col :span="9"><div class="grid-content bg-purple">
				  	<div class="indent gray_ad">
					  <h2>
					    <span class="">在豆瓣书店有售</span>
					      &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·

					  </h2>
					    <div class="market-banner">
					      <span class="title">
					        纸质版&nbsp;
					      </span>
					      <span class="price"> 65.00元</span>
					      <span class="promotion-info">满48元包邮</span>
					      <span class="actions">
					        <a class="buy-btn buy" href="javascript:;">
					          去购买
					        </a>
					          <a class="j a_show_login buy-btn cart" href="javascript:;">加入购物车</a>
					      </span>
					    </div>
					  </div>
					  <div class="gray_ad" id="buyinfo">
					    <div id="buyinfo-printed">
					         <h2>
					    <span class="">在哪儿买这本书</span>
					       · · · · · ·
					  </h2>
					        <ul class="bs noline more-after ">
					            <li class="">
					                <a  href="javascript:;" class=""> <span class="">中国图书网</span>
					 
					                </a>
					                <a  href="javascript:;" class="buylink-price "> <span class="">
					                        50.10 元
					                      </span>
					                </a>
					            </li>
					            <li class="price-page"> <a href="javascript:;">
					              > 查看1家网店价格
					                (50.10 元起)
					            </a>
					            </li>
					        </ul>
					    </div>
					    <div class="add2cartContainer ft no-border"> <span class="add2cartWidget ll">
					      <a class="j  add2cart a_show_login" href="javascript:;" rel="nofollow">
					        <span>+ 加入购书单</span>
					        </a>
					        </span>
					    </div>
					</div>
				  </div></el-col>
				</el-row>
			</div>
			<foot-bottom></foot-bottom>
	</div>
</template>
<script>
import headTop from '../components/header'
import footBottom from '../components/footer'
import {bookDetail} from '../service/getData'
	export default{
		name:'detail',
		data(){
			return{
				listArr:[],
				rateVal:3.5,
				value2:3,
				dLoading:false
			}
		},
		components:{
			headTop,footBottom
		},
		created() {
		    const id = this.$route.params.id;
		    // console.log(id) 
		    bookDetail(id).then(res=>{
		    	this.listArr=res;
		    	this.dLoading=false;
		    })
		},
		computed:{
			content() {
		      // Careful XSS
		      // Remove copyright imgs
		      return this.listArr.content.replace(/<img.+?>/ig, '')
		    }
		}
	}
</script>
<style lang='less' scoped>
  .detail {
  	font-size: 12px;
  	.m_content{
  		width: 950px;
  		margin:0 auto;
  	}
  	h1 {
	    word-wrap: break-word;
	    display: block;
	    font-size: 25px;
	    font-weight: bold;
	    color: #494949;
	    margin: 0;
	    padding: 0 0 15px 0;
	    line-height: 1.1;
	}
    .subjectwrap {
	    position: relative;
	    float: none;
   		width: auto;
	    margin-bottom: 15px;
	    .subject {
		    float: left;
		    width: 415px;
		    #mainpic {
			    margin: 3px 0 0 0;
			    float: left;
			    text-align: center;
			    margin: 3px 12px 0 0;
			    max-width: 155px;
			    overflow: hidden;
			    a img {
				    margin-bottom: 10px;
				    width: 107px;
				}
			}
			#info {
			    float: left;
			    max-width: 248px;
			    word-wrap: break-word;
			    .pl {
				    font: 12px Arial, Helvetica, sans-serif;
				    line-height: 150%;
				    color: #666666;
				}
			}
		}
		#interest_sectl {
		    float: left;
		    width: 155px;
		    margin: 2px 0 0 0;
		    padding: 0 0 0 15px;
		    border-left: 1px solid #eaeaea;
		    color: #9b9b9b;
		    .rating_wrap {
			    padding-bottom: 15px;
			    font-size: 12px;
			    line-height: 14px;
			    .rating_logo {
				    line-height: 1;
				}
			}
			.rating_self {
			    padding: 0;
			    line-height: 2;
			}
			.rating_num {
			    color: #494949;
			    padding: 0;
			    min-width: 30%;
			    font-size: 28px;
			}
			.rating_right {
			    float: left;
			    padding: 10px 0 10px 6px;
			}
			.left, .stars {
			    margin-right: 5px;
			}
			.power {
			    height: 10px;
			    float: left;
			    margin: 1px 4px;
			    background: #ffd596 none repeat scroll 0 0;
			}
			.rating_per {
			    font-size: 11px;
			}
		}
	}
	.related_info{
		font-size: 12px;
		h2{
		    margin-top: 24px;
		    margin-bottom: 3px;
		    color: #007722;
		    font: 15px Arial, Helvetica, sans-serif;
		    margin: 0 0 12px 0;
		    line-height: 150%;
		}
		.indent {
		    word-break: break-all;
		}
		.intro{
			p {
			    text-indent: 2em;
			    word-break: break-all;
			}
		}
	} 
	a{
		&:visited,&:hover,&:focus {
	   		background-color: transparent
		}
		&:link,&:visited,&:focus {
		    color: #3377aa
		}
		&:hover {
		    background-color: #3377aa;
		    color: white
		}
		&.none:hover{
			background-color: transparent;
		}
	}
	.gray_ad {
	    padding: 30px 20px 25px 20px;
	    background: #f6f6f1;
	    margin-bottom: 40px;
	    h2 {
		    margin-bottom: 6px;
		    font-size: 13px;
		    color: #007722;
		    font-weight: normal;
		}
		.market-banner {
		    color: #333;
		    margin-top: 15px;
		    line-height: 1;
		    .title,.price {
			    font-size: 13px;
			}
			.promotion-info {
			    display: block;
			    margin-top: 10px;
			    color: #999;
			}
			.actions {
			    display: block;
			    margin-top: 10px;
			    zoom: 1;
			    font-size: 0;
			    .buy-btn {
				    height: 22px;
				    display: inline-block;
				    margin-right: 8px;
				    padding: 0 12px;
				    border-radius: 2px;
				    border: solid 1px #ffc160;
				    color: #fff;
				    font-size: 12px;
				    line-height: 22px;
				    text-align: center;
				    &.buy {
					    background-color: #ffc160;
					}
				}
				.buy-btn {
				    height: 22px;
				    display: inline-block;
				    margin-right: 8px;
				    padding: 0 12px;
				    border-radius: 2px;
				    border: solid 1px #ffc160;
				    color: #fff;
				    font-size: 12px;
				    line-height: 22px;
				    text-align: center;
				}
				.btn-cart,.cart {
				    color: #ffac2d;
				    background: none;
				}
			}
		}
		#buyinfo-printed {
		    margin-bottom: 15px;
		}
		&#buyinfo{
			.bs {
			    margin: 0;
			}
			li {
			    padding: 10px 0;
			    position: relative;
			    line-height: 1;
			    border-bottom: 1px solid #eaeaea;
			    .buylink-price {
				    position: absolute;
				    right: 90px;
				    text-align: right;
				}
			}
			.price-page {
			    border-bottom: 0;
			    padding: 15px 0 0;
			}
		}
	}
  }	
.rate_box{
	margin-bottom: 10px;
}
.el-rate {
display: inline-block;
vertical-align: middle;
}
.el-icon-star-on{
	font-size: 14px;
}
</style>