<template>
	<section id="registerpage">
		<mt-header title="新用户注册">
		  <router-link to="/login" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		 
		</mt-header>
		<div class="registerbox">
			<div>
				<p>您的手机号码是？</p>
				<input type="text" name="" id="" value="" placeholder="输入手机号码"/>
			</div>
			<div>
				<p>验证码</p>
				<input type="text" name="" id="" value="" placeholder="输入验证码"/>
			</div>
			<div class="registerbtn">
				一键注册
			</div>
			<div class="otherway fixed">
				<span class="registerfree">免密登录</span>
				<span class="login">
					<router-link to="/login">账号密码登录</router-link>
				</span>
			</div>
			<div class="registerway">
				<img src="../../assets/images/qq_210x210.png"/>
			</div>
			
		</div>
		<router-view></router-view>
	</section>
</template>

<script>
</script>

<style>
	#registerpage+footer{
		display: none;
	}
	.registerbox{
		background: white;
		width: 100%;
		height: 100%;
		padding: 1rem .3rem;
		box-sizing: border-box;
		font-size: .22rem;
	}
	.registerbox p{
		font-size: .3rem;
		margin: .05rem;
	}
	.registerbox>div{
		margin-bottom: .5rem;
		
	}
	.registerbox input{
		width: 100%;
		height: 1.2rem;
		padding: .1rem .2rem;
		box-sizing: border-box;
		border: none;
		outline: none;
		line-height: 1.2rem;
		font-size: .5rem;
		text-align: center;
		border-bottom: 1px solid #f2f5f8;
	}
	.registerway{
		width: 2.1rem;
		margin: .5rem auto;
	}
	.registerway img{
		width: 100%;
	}
	.registerbtn{
		width: 100%;
		background: #ff4650;
		color: white;
		text-align: center;
		height: 1rem;
		line-height: 1rem;
		font-size: .35rem;
		
	}
	.otherway{
		width: 100%;
		line-height: .5rem;
		font-size: .22rem;
	}
	.registerfree{
		float: right;
		color: red;
		
	}
	.login{
		float: left;
		
	}
	.login a{
		color: red;
		text-decoration: none;
		font-size: .22rem;
	}
	.mintui-more:before{
		content: '';
	}
	
</style>