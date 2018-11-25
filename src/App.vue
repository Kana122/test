<template>
  <div id="app">
   <footer>
  		<ul class="rout">
  			<li v-for="(v,i) in bar"><router-link :to="'/'+v.name"><i :style="v.img"></i><span>{{v.title}}</span></router-link></li>
	  		
	  	</ul>
  	</footer>
  	<router-view></router-view>
  </div>
</template>

<script>
$(function(){
	$('.rout li').click(function(){
		$(this).children().children('span').addClass('addcolor')	
		$(this).siblings().children().children('span').removeClass('addcolor')
	})
})
$(function(){
	if($('body').width()>=640){
		$('html').css('fontSize',"100px")
	}else if ($('body').width()<640 && $('body').width()>=411) {
		$('html').css('fontSize',"54.8px")
	} else if ($('body').width()<411 && $('body').width()>=375) {
		$('html').css('fontSize',"50px")
	} else if($('body').width()<375 && $('body').width()>=320){
		$('html').css('fontSize',"42.6667px")
	}
})
import bar from "./assets/data/bar.json"
export default {
  name: 'app',
  data () {
    return {
    	bar:'',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  	this.bar = bar
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

h1, h2 {
  font-weight: normal;
}

ul.rout {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul.rout li {
  display: inline-block;
  margin: 0 10px;
}

a{
  color: #c3c3c3;
  text-decoration: none;
}

i{
	display: block;
	width: 0.38rem;
	height: 0.38rem;
	margin-top: 0.128rem;
	margin:0.08rem auto;

}
span{
	font-size: 0.25rem;
}
.addcolor{
	color: #ff2f66;
}

</style>
