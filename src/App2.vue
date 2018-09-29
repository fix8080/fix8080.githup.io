<template>
	<div id="shouye">

		  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in ml" :key="item">
      <img :src='item'  style="width:100%;height: 100%; ;"/>
    </el-carousel-item>
  </el-carousel>

		<div class="shuang">
			<div class="shuang_left">
				<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC81M2MxMjFjM2MwZThjNDdlMjBjZjAxN2NmNDE2ZGViYS02MDB4MzMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
			</div>
			
			<div class="shuang_right">
				<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9hYTMwZDgzMzk4NjM1OWMwYjQzNzFjZDUzODk2OWFhYS02MDB4MzMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg"/>
			</div>
		</div>
		<div class="jieshao">
			<div class="jieshao_left">

			</div>
			<div class="jieshao_right">
				<div class="wenben">
					我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。起飞页提供了海量精美网站模板和成品网站，起飞页的核心竞争力来自于它集流线式布局方案与可视化内容编辑于一体，支持打字传图、自由拖拽，不需要专业编写代码，也没有其他建站工具的层叠式烦恼，您可以随心所欲创建区块、添加组件…
				</div>
			</div>
		</div>
		<div class="sankuai clearfix">
			<div class="sankuai_left">
				<div class="sankuai_left_top">
					<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9iMWM3YjRmMWNlOWI0MWVmZTUxYmM2ZWViZDgwMzJmYS0yODB4MjAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" />
					<div class="sankuai_left_top_wenben">
						<h4>山中花店的活动中 稀有种子如何获得？</h4>
						<span>发布日期：2017-05-23</span>
						<h5>从一九四七年巴黎蒙田大街30号New Look的展出开始，Dior就成为高级女装的代名词, 继承了法国高级女装的传统，始终保持华丽的设计路线，做工精细，迎合上流社会成熟女性的审...</h5>
					</div>
				</div>
				<div class="sankuai_left_bottom">
					<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9jZGMyMGQ4NmZmNTlmZTQyNmRlMjlhYTE5Y2RlMzY4ZC0yODB4MjAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" />
					<div class="sankuai_left_bottom_wenben">
						<h4>天气干燥，花店老板推荐制氧绿植</h4>
						<span>发布日期：2017-05-23</span>
						<h5>秋天的拉萨，天气比较干燥，这个时候在家里养一些可以制造氧气和水分的植物大有好处。记者走访多个花店后发现，很多店老板都会同时提到一种制氧植物——红豆杉。红豆杉有“植物增氧机”之称...</h5>
					</div>
				</div>
			</div>
			<div class="sankuai_right">
				<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC82N2QxYjQzYWQ4MzEyZmExZDU4MGU3MjMyYjU5YWRmOS0zOTB4NDQxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" />
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
              ml:['https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9lNWNiNGMwMTNmOWIxNWY5YTM2NGI1YzUyMDlmZGY3Mi5qcGc_p_p100_p_3D.jpg','https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9iMWM3YjRmMWNlOWI0MWVmZTUxYmM2ZWViZDgwMzJmYS0yODB4MjAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg']
			}
		},

	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
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
	
	#shouye {
		width: 100%;
		height: auto;
		margin-top: 30px;
		overflow: hidden;
		float: left;
		background: #FFFFFF;
	}
	.lunbo{
		width: 100%;
		height: 200px;
		/*overflow: hidden;*/
	}
	
	.shuang {
		width: 100%;
		height: 330px;
		padding-left: 100px;
		margin-top: 20px;
		margin-bottom: 20px;
	}
	
	.shuang_left {
		width: 45%;
		height: 330px;
		margin-right: 30px;
		border: 1px solid #000000;
		float: left;
	}
	.shuang_left>img{
		width: 90%;
		height: 90%;
		margin-left: 25px;
		margin-top: 20px;
	}
	
	.shuang_right {
		width: 45%;
		height: 330px;
		float: left;
		border: 1px solid #000000;
		
	}
	.shuang_right>img{
		width: 90%;
		height: 90%;
		margin-left: 25px;
		margin-top: 20px;
	}
	
	.jieshao {
		width: 100%;
		height: 400px;
		margin-bottom: 20px;
	}
	
	.jieshao_left {
		width: 50%;
		height: 400px;
		background-image: url(assets/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9hYTMwZDgzMzk4NjM1OWMwYjQzNzFjZDUzODk2OWFhYS02MDB4MzMwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg);
		background-size: 100% 100%;
		float: left;
	}
	
	.jieshao_right {
		width: 50%;
		height: 400px;
		background-color: #CCCCCC;
		background-image: url(assets/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC83ZmE4MjFhZmMyNzQ2YTdkNjMzNWE1Yzk3MzM3ZWY3YS5wbmc_p_p100_p_3D.png);
		background-repeat: no-repeat;
		background-size: 15%;
		background-position: 50% 10%;
		float: left;
	}
	
	.wenben {
		width: 60%;
		height: 50%;
		text-align: left;
		margin-left: 20%;
		margin-top: 20%;
		font-size: 16px;
		padding: 15px;
	}
	
	.sankuai {
		width: 100%;
		height: auto;
		padding-left: 40px;
	}
	
	.sankuai_left {
		width: 65%;
		height: 450px;
		margin-right: 20px;
		float: left;
	}
	
	.sankuai_left_top {
		width: 100%;
		height: 45%;
		border: 1px solid #000000;
		margin-bottom: 20px;
		position: relative;
	}
	
	.sankuai_left_top>img {
		max-width: 30%;
		height: 180px;
		margin: 10px;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.sankuai_left_top_wenben {
		max-width: 60%;
		height: 150px;
		float: left;
		/*margin-left: 35%;
		margin-top: 25px;*/
		position: absolute;
		right: 0;
		top: 25px;
	}
	
	.sankuai_left_top_wenben>span {
		font-size: 14px;
		color: #8d9095;
	}
	
	.sankuai_bottom {
		width: 65%;
		height: 450px;
		margin-right: 20px;
		float: left;
	}
	
	.sankuai_left_bottom {
		width: 100%;
		height: 45%;
		border: 1px solid #000000;
		background-image: url();
		margin-bottom: 20px;
		position: relative;
	}
	
	.sankuai_left_bottom>img {
		max-width: 30%;
		height: 180px;
		margin: 10px;
		position: absolute;
		left: 0;
		top: 0;
	}
	
	.sankuai_left_bottom_wenben {
		width: 60%;
		height: 150px;
		float: left;
		/*margin-left: 35%;
		margin-top: 25px;*/
		position: absolute;
		right: 0;
		top: 25px;
	}
	
	.sankuai_left_bottom_wenben>span {
		font-size: 14px;
		color: #8d9095;
	}
	
	.sankuai_right {
		width: 30%;
		height: 425px;
		float: left;
		border: 1px solid #000000;
	}
	
	.sankuai_right>img {
		width: 100%;
		height: 100%;
	}
	
	 .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>