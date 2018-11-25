<template>
	<section>
		<div class="head-search">
			<a href="/" class="index-img"></a>
			<input type="text" placeholder="套装" />
			<router-link to="list"><span class="massage"></span></router-link>
			
		</div>
		<header class="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/images/index-banner1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/index-banner2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/images/index-banner3.jpg"/></mt-swipe-item>
			</mt-swipe>
		</header>
		<div class="list">
			<ul class="rout">
				<li><router-link to="/"><img src="../../assets/images/img1.png" class="img"/><p>十点抢券</p></router-link></li>
				<li><router-link to="/car"><img src="../../assets/images/img2_225x225.png" class="img"/><p>好物特卖</p></router-link></li>
				<li><router-link to="/car"><img src="../../assets/images/img3_225x225.png" class="img"/><p>内购福利</p></router-link></li>
				<li><router-link to="/car"><img src="../../assets/images/img4_225x225.png" class="img"/><p>初秋上新</p></router-link></li>
			</ul>
		</div>
		<div class="litmitime">
			<img src="../../assets/images/images1.jpg" class="litmitime-img"/>
		</div>
		<div class="week-faction">
			
			<!--<ul>-->
				<!--<li v-for="(v,i) in factions">{{v}}</li>-->
				<img src="../../assets/images/weekfaction.jpg" class="litmitime-img"/>
			<!--</ul>-->
			<p class="lookmore">查看更多 ></p>
			
		</div>
		<div class="cloth">
			<div class="cloth-style">
				<div class="ol-box">
					<ol>
						<li v-for="(v,i) in cloths">{{v}}</li>
					</ol>
				</div>
				
				<ul class="cloth-img">
				  <li v-for="item in list">
				  	<img v-lazy="item.img" class="cloth-li-img">
				  	<div class="title-box">
				  		<p class="title"> {{item.title}} </p>
				  		<div class="price-box">
				  			<span class="price">{{item.price}}</span>
				  			<span class="star"><i></i>{{item.starnum}}</span>
				  		</div>
				  	</div>
				  </li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</section>
</template>

<script>
	$(function(){
		$(window).scroll(function(){
			if ($('body').width()>=640) {
				if ($(window).scrollTop()>=1580) {
					$(".ol-box").addClass('fixed-bar')
				} else{
					$(".ol-box").removeClass('fixed-bar')
				}
			} else{
				if ($(window).scrollTop()>=747) {
					$(".ol-box").addClass('fixed-bar')
				} else{
					$(".ol-box").removeClass('fixed-bar')
				}
			}
			
		})
		
	})
	$(function(){
		if($('body').width()>=640){
			$('input').css('width',"4.5rem")
			$('.massage').css('width',"0.7rem")
		}else if($('body').width()<640 || $('body').width()>=320){
			$('input').css('width',"5.3rem")
			$('.massage').css('width',"0.98rem")
		}
	})
	import lists from "../../assets/data/list.json"
	export default{
		data(){
			return {
				cloths:["流行","新款","精选"],
				//
				list:''
			}
		},
		mounted(){
			this.list=lists
		}
	}
</script>

<style>
	.mint-swipe-items-wrap{
		padding-bottom: 52%;
		height: 0;
	}
	.banner{
		width: 100%;
		padding: 0;
		margin: 0;
	}
	.head-search{
		width: 100%;
		
	}
	img{
		width: 100%;
	}
	.index-img{
		width: 0.58rem;
		height: 0.9rem;
		float: left;
		margin: 0rem 0.3rem;
		background: url(../../assets/images/index.png)no-repeat center;
		background-size: contain;
		text-align: center;
		
	}
	.head-search input{
		float: left;
		margin-top: 0.16rem;
		margin-bottom: 0.16rem;
		outline: none;
		border-radius:0.1rem;
		height: 0.56rem;
		border: none;
		color: #333;
		width: 5.3rem;
		background: #f4f4f4 url(../../assets/images/search.png) no-repeat 0.2rem center;
		background-repeat: no-repeat;
		background-size: auto 0.3rem;
		padding: 0.15rem 0.15rem 0.15rem 0.55rem;
		box-sizing: border-box;
		font-size: 0.24rem;
	}
	.head-search:after{
		content: '';
		clear: both;
		display: block;
	}
	.massage{
		background: url(../../assets/images/xinxi.png)no-repeat center center; 
		background-size: 0.34rem 0.3rem;
		height:0.56rem;
		width: 0.98rem;
		float: left;
		margin-top: 0.15rem;
		line-height: 0.56rem;
	}
	.list{
		width: 100%;
		padding: 0.1rem;
		box-sizing: border-box;
		/*margin: 0.1rem 0;*/
	}
	ul.rout{
		width: 100%;
		list-style: none;
		margin: 0;
		padding: 0;		
	}
	a{
	  color: #363636;
	  text-decoration: none;
	}
	p{
		text-align: center;
		font-size: 0.28rem;
	}
	.img{
		width: 96%;
	}
	.litmitime{
		width: 100%;
	}
	.litmitime-img{
		width: 100%;
	}
	.lazy{
		width: 100%;
	}
	.lazy li{
		width: 50%;
	}
	.ol-box{
		/*height: 1rem;*/
		width: 100%;
		background: white;
		max-width: 640px;
		min-width: 320px;
		margin: 0 auto;
		font-size: 0.22rem;
	}
	ol{
		list-style: none;
		display: flex;
		margin: 0;
		padding: 0;
		height: 1rem;
		line-height: 1rem;
	}
	ol li{
		flex: 1;
	}
	ul.cloth-img{
		width: 100%;
		display: block;
	}
	.cloth-img li{
		width: 48%;
		float: left;
		margin-right: 2%;
		position: relative;
		margin-bottom: 0.1rem;
	}
	.cloth-img li:nth-of-type(2n){
		margin-right: 0;
	}
	.cloth-li-img{
		width: 100%;
	}
	.title-box{
		text-align: center;
		position: absolute;
		bottom: 0;
		background: white;
		width: 100%;
		overflow: hidden;
		font-size: 0.22rem;
	}
	.title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		font-size: 0.22rem;
		margin-top: 0.18rem;
		display: block;
	}
	.price-box{
		margin-bottom: 0.18rem;
	}
	.price{
		color: #ff2f66;
		margin-right: 0.2rem;
	}
	.star{
		color: #a7a7a7;
	}
	.star i{
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		background: url(../../assets/images/star.png)no-repeat center;
		background-size:contain ;
		margin-right: 0.08rem;
	}
	.fixed-bar{
		position: fixed;
		top: 0;
		z-index: 2;
	}
	.week-faction{
		font-size:0.22rem;
		/*margin: 0.8rem 0;*/
	}
	.p-faction{
		font-size: 0.5rem;
		font-weight: 500;
	}
	.lookmore{
		color: #ff2f66;
		margin-bottom: 0.15rem;
		
	}
</style>