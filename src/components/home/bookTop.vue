<template lang="html">
	<div class="bookList">
		<div class="hd">
	      <h2>
	        <span>最受关注图书榜</span>
	        <span class="link-more">
	          <a href="javascript:;">虚构类»</a>
	        </span>
	        <span class="link-more">
	          <a href="javascript:;">非虚构类»</a>
	        </span>
	      </h2>
    	</div>
    	<div class="bd">
    		<ul class="list-col" v-loading="isLoading" element-loading-text="拼命加载中">
    			<li class="" v-for="item in bookList">
				    <div class="cover">
				     <router-link :to="{name:'Detail', params:{id: item.id }}" class="none">
				      	 <img :src="item.image" :alt="item.title" class="">
				      </router-link>
				    </div>
				    <div class="info">
				      <h4 class="title">
				      <router-link :to="{name:'Detail', params:{id: item.id }}" class="">
				      	{{item.title}}
				      </router-link>
				      </h4>
				      <p class="entry-star-small">
				        <el-rate v-model="rateVal" disabled show-text text-color="#ff9900" text-template="{value}" disabled-void-color="#d8d3d3"></el-rate>
				      </p>
				      <p class="author">
				        {{item.owner.name}}
				      </p>
				      <p class="book-list-classification">
				        {{item.tags}}
				      </p>
				      <p class="extra-info">
				        
				      </p>
				        
				        <p class="reviews">
				          {{item.content}}
				        </p>
				    </div>
				  </li>
    		</ul>
    	</div>
	</div>
</template>
<script>
import {mapState, mapActions} from 'vuex'
	export default{
		 data(){
		 	return{
		 		rateVal:3.8
		 	}
		},
		methods:{
			...mapActions(['getBookList'])
		},
		mounted(){
			this.getBookList();
			// console.log(this.bookList);	
		},
		computed:{
			bookList(){
				return this.$store.getters.getBookList;
			},
			isLoading(){
				return this.$store.getters.getBlLoading;
			}
		}
	}
</script>
<style lang="less" scoped>
	.bookList{
		h2 {
		    font-size: 18px;
		    font-weight: bold;
		    padding-bottom: 3px;
		    margin-bottom: 16px;
		    border-bottom: 1px solid #ddd;
		    .link-more {
			    font: 12px Arial, Helvetica, sans-serif;
			    line-height: 150%;
			    color: #666666;
			    padding-left: 10px;
			}
		}
		.list-col{
			min-height:400px;
			 li {
			    float: none;
			    display: inline-block;
			    zoom: 1;
			    vertical-align: top;
			    margin-bottom: 30px;
			    width:50%;
			    .cover {
				    float: left;
				    margin-right: 18px;
				    img{
				    	width:100px;
				    	height:100px;
				    }
				}
				.info {
				    font-size: 12px;
				    margin-right: 20px;
				    .title {
					    height: auto;
					    margin: 0;
					    line-height: auto;
					    background: none;
					}
					p {
					    margin: 0;
					    word-wrap: break-word;
					    &.extra-info {
						    color: #aaa;
						}
					    &.reviews {
						    color: #666;
						    clear: both;
						    padding-top: 15px;
						    max-height: 97px;
    						overflow: hidden;
						}
					}
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
	}
	.el-rate{
		display:inline-block;
	}
	.el-rate__icon{
		font-size:14px;
	}
</style>