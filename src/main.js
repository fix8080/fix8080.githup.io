import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import App2 from './App2.vue'
import zhifu from './zhifu.vue'
import suoyou from './suoyou.vue'
import guanyu from './guanyu.vue'
import xianxia from './xianxia.vue'
import zhuce from './zhuce.vue'
import gouwu from './gouwu.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(VueRouter)
Vue.use(ElementUI);
var router = new VueRouter({
	routes:[
		{
		path:'/',
		component:App2
		},
		{
		path:'/suoyou',
		component:suoyou
		},
		{
		path:'/zhifu',
		component:zhifu
		},
		{
		path:'/guanyu',
		component:guanyu
		},
		{
		path:'/xianxia',
		component:xianxia
		},
		{
		path:'/zhuce',
		component:zhuce
		},
		{
		path:'/gouwu',
		component:gouwu
		}
	]
})



new Vue({
router,
  el: '#app',
  render: h => h(App)
})
