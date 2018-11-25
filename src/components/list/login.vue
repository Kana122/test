<template>
	<section id="loginpage">
		<mt-header title="登录">
		  <router-link to="/" slot="left">
		    <mt-button icon="back"></mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right">忘记密码</mt-button>
		</mt-header>
		<div class="loginbox">
			<div>
				<p>美丽说账号:</p>
				<input type="text" name="" id="" value="" placeholder="输入用户名/邮箱/手机"/>
			</div>
			<div>
				<p>密码:</p>
				<input type="text" name="" id="" value="" placeholder="输入密码"/>
			</div>
			<div class="loginbtn">
				登录
			</div>
			<div class="otherway fixed">
				<span class="free">免密登录</span>
				<span class="register">
					<router-link to="/register">注册账号</router-link>
				</span>
			</div>
			<div class="loginway">
				<img src="../../assets/images/qq_210x210.png"/>
			</div>
			
		</div>
		<router-view></router-view>
	</section>
	
</template>

<script>
</script>

<style >
	
	#loginpage+footer{
		display: none;
	}
	.loginbox{
		background: white;
		width: 100%;
		height: 100%;
		padding: 1rem .3rem;
		box-sizing: border-box;
		font-size: .45rem;
	}
	.loginbox p{
		font-size: .3rem;
		margin: .05rem;
	}
	.loginbox>div{
		margin-bottom: .5rem;
		
	}
	.loginbox input{
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
	.loginway{
		width: 2.1rem;
		margin: .5rem auto;
	}
	.loginway img{
		width: 100%;
	}
	.loginbtn{
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
	}
	.free{
		float: left;
	}
	.register{
		float: right;
		
	}
	.register a{
		color: red;
		text-decoration: none;
	}
	.mintui-more:before{
		content: '';
	}
	
</style>