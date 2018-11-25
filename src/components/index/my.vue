<template>
	
	<section>
		<mt-header title="个人中心">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"><router-link to="/login">退出</router-link></mt-button>
		</mt-header>
		<div class="userInfo">
			<div class="Userimg">
				<img src="../../assets/images/user-img.png"/>
				<p>mls_8ru5jrt2eaelm</p>
			</div>
			<div class="Usermassage">
				<span>
					<div v-for="v in list" class="collect">
						<router-link :to="'/my/'+v"><p>{{v.num}}</p>{{v.title}}</router-link>
					</div>
					
				</span>
				<span class="coupon">
					<router-link to = "/mycoupon"><span class="conpont"></span>优惠券</router-link>
					<router-link to="/address"><span class="address"></span>收货地址</router-link>
				</span>
				<!--<li v-for="">
				<li v-for=""><router-link>优惠券</router-link>
					<router-link>收货地址</router-link></li>-->
			</div>
		</div>
		<div class="orderlistbox">
			<ul class="orderlist">
				<li><router-link to = "/addorder"><span class="allorderimg"></span>全部订单</router-link></li>
				<li><router-link to = "/non-pay"><span class="non-payimg"></span>待付款</router-link></li>
				<li><router-link to = "/uncolled"><span class="uncolledimg"></span>待收货</router-link></li>
				<li><router-link to = "/no-evaluat"><span class="no-evalulatimg"></span>待评价</router-link></li>
				<li><router-link to = "/coutmer"><span class="coutmerimg"></span>售后</router-link></li>
			</ul>
		</div>
		<div class="recommend">
			<div class="recommendtitle">
				流行单品
				<span>每日10点、18点上新</span>
			</div>
			<div class="recommendclothbox">
				<ul class="recommendcloth fixed">
				  <li v-for="item in recommendlist">
				    <img v-lazy="item.img">
				    <div class="titlebox fixed">
				    	<span v-for="v in item.btn1">{{v}}</span>
				    </div>
				    <p>￥{{item.price}}</p>
				  </li>
				</ul>
			</div>
		</div>
		
		
		
		<router-view></router-view>
	</section>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						num:0,
						title:"收藏的宝贝"
					},{
						num:0,
						title:"收藏的店铺"
					}
				],
				recommendlist:[
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","修身"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian2.png",
						btn1:["毛呢外套","呢子大衣","中长款","修身","韩版"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					},
					{
						img:"src/assets/images/tuijian1.png",
						btn1:["半高领毛衣","套头","秋冬新款","烫金","秋冬季"],
						price:"62.00"
					}
				],
				
			}
		}
	}
</script>

<style>
	.mint-header{
		background-color: white;
		color: #787878;
		border-bottom: 1px solid #ededed;
		font-size: 0.4rem;
		height: 1rem;
	}
	.mintui-more{
		display: none;
	}
	.mint-button-text{
		margin-right: 0.2rem;
	}
	.userInfo{
		width: 100%;
		line-height: .36rem;
		background: url('../../assets/images/my.jpg')no-repeat center;
	}
	.Userimg{
		text-align: center;
		padding-top: .3rem;
		
	}
	.Userimg img{
		width: 1rem;
		border-radius: 50%;
	}
	.Userimg p{
		color: white;
		font-size: .22rem;
		margin: .2rem 0;
	}
	.Usermassage{
		display: flex;
	}
	.Usermassage>span{
		display: inline-block;
		flex: 1;
		border-top: 1px solid white;
		padding: .2rem;
		
	}
	.Usermassage>span:nth-of-type(1){
		border-right: 1px solid white;
		
	}
	.Usermassage a{
		color: white;
		text-decoration: none;
		font-size: .22rem;
	}
	.collect{
		display: inline-block;
		padding: .1rem;
	}
	.coupon a{
		display: inline-block;
		padding: .2rem;
	}
	.coupon span{
		display: block;
	}
	.conpont{
		width: .26rem;
		height: .33rem;
		background: url(../../assets/images/pic.png) no-repeat 0 32.5%;
		background-size: 2.5rem;
		margin: 0 auto;
	}
	.address{
		width: .3rem;
		height: .33rem;
		background: url(../../assets/images/pic.png) no-repeat 0 66.3%;
		background-size: 2.5rem;
		margin: 0 auto;
	}
	.orderlistbox{
		background-color: #f4f4f4;
		padding-top: .22rem;
		padding-bottom: .22rem;
	}
	.orderlist{
		display: flex;
		padding: .1rem 0;
		background-color: white;
	}
	.orderlist li{
		flex: 1;
	}
	.orderlist a{
		text-decoration:none ;
		color: #2c3e50;
		display: inline-block;
		font-size: .3rem;
	}
	.orderlist span{
		display: block;
		width: .34rem;
		height: .34rem;
		background: url(../../assets/images/pic.png)no-repeat -2% 100%;
		background-size: 2.5rem;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: .07rem;
	}
	span.non-payimg{
		background-position: 31.9% 100%;
	}
	span.uncolledimg{
		background-position: 65.5% 101%;
	}
	span.no-evalulatimg{
		background-position: 101% 101%;
	}
	span.coutmerimg{
		background-position: 101% 64.4%;
	}
	.recommendtitle{
		text-align: left;
		padding: 0 .22rem;
		font-size: .3rem;
		line-height: 1rem;
	}
	.recommendtitle span{
		float: right;
		font-size: .22rem;
		color: #9a9a9a;
	}
	.recommendclothbox{
		margin: .22rem 0;
	}
	.recommendcloth{
		width: 100%;
		overflow: hidden;
	}
	.recommendcloth li{
		float: left;
		width: 49%;
		margin-right: 2%;
		margin-bottom: .2rem;
	}
	.recommendcloth li:nth-of-type(2n){
		margin-right: 0;
	}
	.recommendcloth li img{
		width: 100%;
	}
	.titlebox {
		text-align: left;
		padding-left: .2rem;
		margin-top: .1rem;
	}
	.titlebox span{
		background-color: #f2f5f8;
		margin-right: .1rem;
		margin-bottom: .1rem;
		padding: 0 .1rem;
		display: inline-block;
		font-size: .2rem;
		float: left;
		line-height: .3rem;
		color: #9b9cae;
	}
	.recommendcloth p{
		text-align: left;
		padding-left: .2rem;
		margin: .1rem 0;
	}
	.mint-button-text a{
		color: #2c3e50;
		text-decoration: none;
	}
</style>