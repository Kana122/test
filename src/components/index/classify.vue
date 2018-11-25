<template>
	<section>
		<div class="head-search">
			<a href="/" class="index-img"></a>
			<input type="text" placeholder="套装" />
			<router-link to="list"><span class="massage"></span></router-link>
			
		</div>
		<div class="pagebox">
			<p class="week-faction-page">本周流行</p>
		</div>
		
		<ul class="link-lists">
			<li v-for="(v,i) in routerlists">
				<div class="link-box">
					<router-link :to="'/classify/'+v.title"><img :src="v.img"/>{{v.title}}</router-link>
				</div>
				
			</li>
		</ul>
		<router-view></router-view>
	</section>
	
</template>

<script>
	import routerlists from "../../assets/data/classify.json"
	export default{
		data(){
			return{
				routerlists:""
			}
			
		},
		mounted(){
			this.routerlists = routerlists
		}
	}
</script>

<style scoped>
	.head-search{
		width: 100%;	
		background: white;
		
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
	.pagebox{
		width: 100%;
		background: white;
		padding: .2rem;
		box-sizing: border-box;
	}
	.week-faction-page{
		text-align: left;
		font-size: 0.3rem;
		/*background-color: white;*/
		
	}
	.link-box{
		padding: 0.2rem;
	}
	ul.link-lists{
		width: 100%;
		border-bottom: 1px solid #f2f5f8;
	}
	.link-lists:after{
		content: '';
		display: block;
		clear: both;
	}
	.link-lists li{
		float: left;
		width: 24.65%;
		border-top: 1px solid #eeeeee;
		border-right: 1px solid #eeeeee;
		background: white;
		
	}
	.link-lists li img{
		width: 100%;
	}
	.link-lists a{
		text-decoration: none;
		color: #666666;
		font-size: .22rem;
	}
	
</style>