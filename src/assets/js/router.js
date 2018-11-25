import vueRouter from 'vue-router'
import first from '../../components/index/first.vue'
import classify from '../../components/index/classify.vue'
import my from '../../components/index/my.vue'
import car from '../../components/index/car.vue'

import login from '../../components/list/login.vue'
import register from '../../components/list/register.vue'

export default new vueRouter({
	routes:[
	{
		path:'/first',component:first
	},
	{
		path:'/car',component:car
	},
	{
		path:'/classify',component:classify
	},
	{
		path:'/my',component:my
		
	},
	{
		path:'/',component:first
	},
	{
		path:"/login",
		component:login
	},
	{
		path:"/register",
		component:register
	}
	
	
	]
})

