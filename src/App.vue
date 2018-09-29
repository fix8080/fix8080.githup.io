<template>
	<div id="app">
		<div class="header">
			<div class="header_left">
				<span class="glyphicon glyphicon-time" style="padding-right: 10px;"></span>在线时间 08:30~21:30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎访问花语在线商城！
			</div>
			<div class="header_right">
				<div class="header_right_log">

					<div id="da" v-show="bytype" @click="dabtn">
						<div class="da_div">
							<input type="text" placeholder="输入关键字" />
							<div>
								<button id="que">确认</button>
								<button id="qu">取消</button>
							</div>
						</div>
					</div>
					<span class="glyphicon glyphicon-search" style="padding-right: 10px;" @click="dabtn"></span>
					<router-link to='/zhuce'>
						<span class="glyphicon glyphicon-user" style="padding-right: 10px;"></span>
					</router-link>
					<router-link to='/gouwu'>
						<span class="glyphicon glyphicon-shopping-cart" style="padding-right: 10px;"></span>
					</router-link>
				</div>
			</div>
		</div>
		<div class="logo">
			<div class="beijing">
				<div class="logo_top">
					<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC83ZmE4MjFhZmMyNzQ2YTdkNjMzNWE1Yzk3MzM3ZWY3YS5wbmc_p_p100_p_3D.png" />
				</div>
				<div class="luyou">
					<ul>
						<li>
							<router-link to='/'>商城首页</router-link>
						</li>
						<li>
							<router-link to='/suoyou'>所有商品</router-link>
						</li>
						<li>
							<router-link to='/zhifu'>支付方式</router-link>
						</li>
						<li>
							<router-link to='/guanyu'>关于花语</router-link>
						</li>
						<li>
							<router-link to='/xianxia'>线下门店</router-link>
						</li>
					</ul>
				</div>
				<router-view></router-view>
			</div>

		</div>

		<div class="footer clearfix">
			<div class="footer_top clearfix">
				<div class="footer_top_top" style="width: 100%; height: auto; display: flex;">
					<div class="footer_top_1" style="width: 20%; float: left; margin-right: 60px;">
						<h4>About Change</h4>
						<h5>本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</h5>
					</div>
					<div class="footer_top_1" style="width: 20%; float: left; margin-right: 60px;">
						<h4>Service</h4>
						<h5>消費者保障服务七天无理由退款假一赔三</h5>
					</div>
					<div class="footer_top_1" style="width: 20%; float: left; margin-right: 60px;">
						<h4>About Color</h4>
						<h5>本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</h5>
					</div>
					<div class="footer_top_1" style="width: 20%; height: 100px; float: left; margin-right: 60px;">
						<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC83ZmE4MjFhZmMyNzQ2YTdkNjMzNWE1Yzk3MzM3ZWY3YS05MHg5MC5wbmc_p_p100_p_3D.png" />
					</div>
				</div>
				<div class="footer_top_bottom" style="width: 100%; height: auto; display: flex;">
					<div class="footer_top_1" style="width: 20%;float: left;  margin-right: 60px;">
						<h4>Online Payment</h4>
						<img style="max-width: 50px; max-height: 30px; margin-right: 5px;" src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS8yMGI0MzIwZTcxMzEwNzBiMzkwODQzMzIxMDI0MGRlYS5wbmc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzYxNg_p_p100_p_3D_p_p100_p_3D.png" alt="" />
						<img style="max-width: 40px; max-height: 40px; margin-right: 5px;" src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS8yMGI0MzIwZTcxMzEwNzBiMzkwODQzMzIxMDI0MGRlYTEucG5nP2F0dGFjaG1lbnRfaWQ9MTM2MTc_p_p100_p_3D.png" alt="" />
						<img style="max-width: 40px; max-height: 40px;" src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9kNGQwOGVmNTM4OGEwODVlNzNiNGQ4ODVkYzU1Njg2YS5wbmc_p_p100_p_2FYXR0YWNobWVudF9pZD0xMzYxOA_p_p100_p_3D_p_p100_p_3D.png" alt="" />
					</div>
					<div class="footer_top_1" style="width: 20%; float: left; margin-right: 60px;">
						<h4>Online Payment</h4>
						<h5>消費者保障服务七天无理由退款假一赔三</h5>
					</div>
					<div class="footer_top_1" style="width: 20%; float: left; margin-right: 60px;">
						<h4>Wechat</h4>
						<h5>本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</h5>
					</div>
					<div class="footer_top_1" style="width: 20%; height: 100px; float: left; margin-right: 60px;">
						<h4>Social App</h4>
						<span style="margin-right: 5px;" class="glyphicon glyphicon-star-empty"></span>
						<span style="margin-right: 5px;" class="glyphicon glyphicon-star-empty"></span>
						<span style="margin-right: 5px;" class="glyphicon glyphicon-star-empty"></span>
						<span style="margin-right: 5px;" class="glyphicon glyphicon-star-empty"></span>
						<span class="glyphicon glyphicon-star-empty"></span>
					</div>
				</div>
			</div>
			<div class="footer_bottom clearfix" style="display: flex;">
				<div class="footer_bottom_1" style="width: 20%; float: left; margin-right: 50px;">
					<h4>关于产品</h4>
					<h5 style="color: #A9A9A9;">about color</h5>
					<h5 style="color: #A9A9A9; width: 60%; display: inline-block;">所有商品均为实物拍摄，各浏览器显示有所不同，对此要求高的买家慎拍</h5>
				</div>
				<div class="footer_bottom_1" style="width: 20%; float: left; margin-right: 50px;">
					<h4>关于退货</h4>
					<h5 style="color: #A9A9A9;">about change</h5>
					<h5 style="color: #A9A9A9; width: 60%; display: inline-block;">本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</h5>
				</div>
				<div class="footer_bottom_1" style="width: 20%; float: left; margin-right: 50px;">
					<h4>关于产品</h4>
					<h5 style="color: #A9A9A9;">about change</h5>
					<h5 style="color: #A9A9A9; width: 60%; display: inline-block;">本店商品均为易碎品，非质量问题谢绝退换，如有质量问题，本店承担运费调换</h5>
				</div>
				<div class="footer_bottom_1" style="width: 20%; float: left; margin-right: 50px;">
					<h4>扫码关注</h4>
					<h5 style="color: #A9A9A9;">about change</h5>
					<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS8wNGQwZDQyNjYzMWM4YjExNGY4MzFhNTEwNzIwYzMzZS0xMDB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" />
					<h5 style="color: #a9a9a9;">搜索微信号：HUAYU</h5>
				</div>
			</div>
			<div class="footer_zui">
				Copyright © 2010-2015花语文化传播有限公司 All rights reserved
			</div>
		</div>
	</div>
</template>

<script>
	//import  from
	export default {
		name: 'app',
		data() {
			return {
				bytype: false
			}
		},
		methods: {
			dabtn() {
				this.bytype = !this.bytype
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		text-decoration: none;
		list-style: none;
	}
	
	.clearfix:after,
	.clearfix:before {
		content: '';
		display: table;
	}
	
	.clearfix:after {
		clear: both;
	}
	
	.clearfix {
		*zoom: 1;
	}
	
	.header {
		width: 100%;
		padding-left: 100px;
		font-size: 12px;
		line-height: 50px;
		height: 50px;
		background: #CCCCCC;
	}
	
	.header_left {
		width: 45%;
		height: 50px;
		float: left;
		color: #757575;
	}
	
	.header_right {
		width: 45%;
		height: 50px;
		float: left;
		position: relative;
	}
	
	.header_right_log {
		position: absolute;
		right: 25%;
		font-size: 16px;
		top: 0px;
	}
	
	.beijing {
		width: 100%;
		height: 200px;
		padding-top: 20px;
		background-image: url(assets/logo.jpg);
	}
	
	#da {
		width: 100% !important;
		height: 100% !important;
		background-color: rgba(0, 0, 0, .8);
		text-align: center;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 100;
	}
	
	.da_div {
		width: 720px;
		text-align: center;
		position: fixed;
		left: 23%;
		top: 30%;
		border: 3px solid rgb(170, 170, 170);
		background-color: rgb(255, 255, 255);
		height: 180px;
		position: relative;
	}
	
	.da_div input {
		width: 90%;
		border: 1px solid #ececec;
		padding: 5px 15px;
		background: #f2f2f2;
		margin-top: 40px;
		outline: none;
		font-size: 18px;
	}
	
	.da_div div {
		position: absolute;
		right: 10%;
		bottom: 30px;
	}
	
	#que {
		outline: none;
		box-shadow: none;
		border: none;
		min-width: 64px;
		height: 30px;
		padding: 0px 25px;
		text-align: center;
		background-color: #fff;
		font-size: 14px;
	}
	
	#que:hover {
		background-color: #f2f2f2;
	}
	
	#qu {
		outline: none;
		box-shadow: none;
		border: none;
		min-width: 64px;
		height: 36px;
		padding: 0 16px;
		text-align: center;
		background-color: #fff;
		font-size: 14px;
	}
	
	#qu:hover {
		background-color: #f2f2f2;
	}
	
	.logo {
		width: 100%;
		height: auto;
	}
	
	.logo_top {
		width: 100px;
		height: 100px;
		margin: 0 auto;
		background-size: 100px 100px;
	}
	
	.logo_top img {
		width: 100px;
		height: 100px;
	}
	
	.luyou {
		width: 100%;
		height: 20px;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 25px;
	}
	
	.luyou>ul {
		width: 60%;
		height: 20px;
		margin: 0 auto;
	}
	
	.luyou>ul>li {
		width: 20%;
		height: 20px;
		float: left;
		text-decoration: none;
	}
	
	.luyou>ul>li>a:link {
		text-decoration: none;
		color: #000000;
	}
	
	.luyou>ul>li>a {
		color: #000000;
	}
	
	.footer {
		width: 100%;
		height: auto;
		float: left;
		background: #f7f7f7;
		padding-top: 20px;
	}
	
	.footer_top {
		width: 100%;
		height: 50%;
		float: left;
		padding-left: 100px;
		border-bottom: 1px solid #CCCCCC;
	}
	
	.footer_top_1>h5 {
		color: #BBBBBB;
	}
	
	.footer_bottom {
		width: 90%;
		margin: 0 auto;
		padding-left: 30px;
		border-bottom: 1px solid #000000;
	}
	
	.footer_zui {
		width: 100%;
		height: 30px;
		color: #9e9e9e;
		text-align: center;
		margin-top: 10px;
	}
</style>