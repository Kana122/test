<template>
	<section id="car">
		<mt-header title="购物车">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right">删除</mt-button>
		</mt-header>
		<div class="goods_box">
			<ul class="goodslist">
				<li v-for="item in goods">
					<div class="shopname fixed">
						<div class="btn">
							<input type="radio" id="goods_177du" />
							<label for="goods_177du"></label>
							<input type="hidden"/>
						</div>
						<span class="shop">店铺：{{item.name}}</span>
						<div class="btn-up">展开</div>
						<span class="count">合计:
							<span class="price">￥{{item.price*num}}</span>
						</span>
					</div>
					<div class="goods-detail fixed">
						<div class="btn">
							
							<input type="radio" id="goods_177du" />
							<label for="goods_177du"></label>
							<input type="hidden"/>
						</div>
						<div :style="item.cloth" class="pic_wrap">
							<router-link to="/" exact></router-link>
						</div>
						<div class="goods-price">
							<p class="title">毛呢哈伦裤女秋冬宽松韩版小脚裤2018新款加厚呢子休闲裤显瘦大码高腰萝卜裤</p>
							<p><span class="first">颜色：黑色</span><span>尺码：S</span></p>
							<p><span class="down" @click="down()"></span><span class="num">{{num}}</span><span class="up" @click="up()"></span></p>
						</div>
						<div class="right">
							<p class="sellprice">￥{{item.price}}</p>
							<p class="goods_oldprice">￥{{item.oldprice}}</p>
							<span class="del"></span>
						</div>
					</div>
					
				</li>
			</ul>
			
			<div class="bottom-box fixed">
				<div class="btn">
					<input type="radio" id="goods_177du" value="全选"/>
					<label for="goods_177du"></label>
					<input type="hidden"/>
					
				</div>
				<span class="selectall">
					全选
				</span>
				<span class="paybtn">去结算</span>
				<div class="current">
					<p>合计：<span class="allprice">￥0.00</span></p>
					<p class="pricetitle">不含运费、优惠扣减</p>
				</div>
				
			</div>
		</div>
		
		<router-view></router-view>
	</section>
</template>

<script>
	import goods from "../../assets/data/goods.json"
	export default{
		linkExactActiveClass:'active',
		data(){
			return{
				num:1,
				goods:''
				
			}	
		},
		methods:{
			down(){
				if(this.num<=1){
					confirm("数量不能小于1")
				}else{
					this.num=this.num-1
				}
			},
			up(){
				this.num++
			}
		},
		mounted(){
			this.goods = goods
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
	.goods_box{
		width: 100%;
		height: 100%;
		background: #f4f4f4;
	}
	.goodslist{
		background: #fafafa;
	}
	.goodslist li{
		background: white;
		box-sizing: border-box;
	}
	.shopname,.goods-detail{
		text-align: left;
		line-height: .8rem;
		padding: .2rem;
		box-sizing: border-box;
		font-size: .25rem;
		width: 100%;
		border-bottom: 1px solid #e7e7e7;
		font-size: .25rem;
	}
	.shopname span{
		display: inline-block;
	}
	.btn{
		display: inline-block;
		float: left;
		
	}
	.btn input{
		vertical-align: middle;
		margin-left: -99rem;
	}
	.btn label{
		display: inline-block;
		width: .44rem;
		height: .45rem;
		background: url("../../assets/images/pot.png")no-repeat center;
		float: left;
		background-size: .44rem;
		margin-top: .15rem;
		margin-right: .3rem;
	}
	span.shop{
		float: left;
		color: #666666;
		font-size: .3rem;
	}
	span.count{
		float: right;
	
	}
	span.price{
		color: #ff2f66;
	}
	.btn-up{
		float: right;
		width: .32rem;
		margin-left: .2rem;
		background: url(../../assets/images/pic2.png)no-repeat 0 -17%;
		background-size: 1rem;
		text-indent: -999em;
		line-height: .44rem;
	}
	
	.pic_wrap{
		width: 1.2rem;
		height: 1.2rem;
		float: left;
		margin-right: .2rem;
		
		background-size: contain;
	}
	.goods-detail .btn label{
		margin-top: .4rem;
	}
	.goods-price{
		float: left;
	}
	.goods-price p.title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 2.7rem;
		line-height: .28rem;
		font-size: .26rem;
		height: .26rem;
	}
	.goods-price span{
		float: left;
		padding-bottom: .05rem;
		color: #ccc;
		line-height: .45rem;
	}
	.first{
		margin-right: .05rem;
	}
	.down,.up,.num{
		width: .48rem;
		height: .48rem;
		display: inline-block;
		border: 1px solid #CCCCCC;
	}
	span.num{
		width: .8rem;
		border-left: none;
		border-right:none ;
		text-align: center;
		line-height: .48rem;
		color: #333333;
	}
	span.down{
		background: url(../../assets/images/pic2.png) no-repeat -12% 54%;
		background-size: 1rem;
	}
	span.up{
		background: url(../../assets/images/pic2.png) no-repeat 126% 55%;
		background-size: 1rem;
	}
	.right{
		float: right;
		
	}
	.sellprice{
		height: .24rem;
		line-height: .24rem;
		color: #ff3066;
		font-size: .3rem;
		
	}
	.goods_oldprice{
		height: .24rem;
		line-height: .24rem;
		text-decoration: line-through;
		margin: .1rem;
		margin-left: .15rem;
		color: #ccc;
	}
	.del{
		display: inline-block;
		width: .9rem;
		height: .5rem;
		background: url(../../assets/images/pic2.png)no-repeat -408% 101%;
		background-size:1rem ;
	}
	.bottom-box{
		background: white;
		position: fixed;
		bottom: 1rem;
		width: 100%;
		max-width: 640px;
		min-width: 320px;
		margin: 0 auto;
		padding: .1rem .2rem;
		box-sizing: border-box;
		border-top: 1px solid #C3C3C3;
		font-size: .3rem;
	}
	.bottom-box .btn{
		margin: 0;
		
	}
	.bottom-box .selectall{
		display: inline-block;
		float: left;
		margin-top: .15rem;
		margin-left: -0.2rem;
		color: #888888;
	}
	.paybtn{
		float: right;
		display: inline-block;
		width: 1.5rem;
		height: .8rem;
		background-color: #ff6666;
		color: white;
		line-height: .8rem;
		text-align: center;
	}
	.current{
		float: right;
		width: 2.7rem;
		text-align: left;
		margin-right: .2rem;
	}
	.allprice{
		color: #fd5c62;
	}
	.pricetitle{
		color: #999999;
	}
</style>