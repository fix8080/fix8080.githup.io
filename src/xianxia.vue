<template>
	<div id="mendian">
		<div class="mendian_left">
			<h5 style="margin-top: 100px;">地址：江苏省苏州市工业园区金鸡湖大道99号</h5>
			<h5 style="margin-top: 20px;">电话：400 6666 6666</h5>
			<h4 style="margin-top: 30px;">您也可以通过表单联系我们：</h4>
			<input style="width: 45%; border: none; background: #CCCCCC; height: 30px; text-indent: 10px;" type="text" placeholder="姓名">
			<input style="width: 45%; border: none; background: #CCCCCC; height: 30px; text-indent: 10px;" type="text" placeholder="电话">
			<input style="width: 90.5%; border: none; background: #CCCCCC; height: 30px; text-indent: 10px; margin-top: 20px;" type="text" placeholder="邮箱">
			<input style="width: 90.5%; border: none; background: #CCCCCC; height:100px; text-indent: 10px; margin-top: 20px;" type="text"  placeholder="内容">
			<button style="display: block; width: 150px; height: 50px; margin-top: 20px; border: none; background: #000000; color: #CCCCCC; font-size: 16px;">发送</button>
		</div>
		<div class="mendian_right">
			<div class="mendian_right_top">
				<h2>门店坐标</h2>
				<h4>CONTACT US</h4>
				<span style="margin-top: 50px;" class="glyphicon glyphicon-chevron-down"></span>
			</div>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name:'app'
	}
</script>

<style>
	#mendian{
		width: 100%;
		height: auto;
		float: left;
		margin-bottom: 100px;
	}
	.mendian_left{
		width: 70%;
		height: auto;
		float: left;
		padding-left: 100px;
		
	}
	.mendian_right{
		width: 25%;
		height: 200px;
		float: left;
		margin-top: 50px;
		border: 1px solid #006394;
	}
	.mendian_right_top{
		text-align: center;
	}
	
	
	
</style>