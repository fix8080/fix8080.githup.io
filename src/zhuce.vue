<template>
	<div class="box">
		<div id="contents">
			<div class="zhu">
				<div class="names">
					<span>手机/用户/邮箱</span>
					<input type="text">
				</div>
				<div class="names">
					<span>密码</span>
					<input type="text">
				</div>
				<div class="names">
					<span></span>
					<div class="names_dan">
						<input type="checkbox" /> 记住我（请在私人计算机上使用此功能）
					</div>
				</div>
				<div class="names_btn">
					<button>登录</button>
					<button>注册</button>
				</div>
				<div class="names_yidi">
					第三方账号登录：<span></span>
				</div>
				<div class="names_wang">
					<a href="javascript:;">忘记密码？点这里找回</a>
				</div>
				<div class="names_xia">
					<p>用户注册/登录说明：</p>
					<p>1、演示用户名：<span>demouser</span>；密码： <span>demo1234</span></p>
					<p>2、实际使用之前，需配置用户管理组件中的相关邮件。详情请参考教程：<span>《用户管理中相关邮件的配置》</span></p>
					<p>3、新用户注册后的审核方式有三种：自动核准、邮件激活、需要管理员批准（即人工审核），详情可参考教程<span>《如何设置用户注册后的审核方式》</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.box {
		width: 100%;
		height: auto;
		float: left;
	}
	
	#contents{
	width: 100%;
	z-index: 9999;
	padding-top: 150px;
	padding-bottom: 150px;
	background: url('https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8yNTRiOWNiODA3Zjc4ZTRlYjZhYTk5ZjhlODA2ZDY5NC5qcGc_p_p100_p_3D.jpg');
	}
.zhu{
	width: 400px;
	padding: 20px 25px;
	background-color: rgba(255,255,255,.8);
	margin-left: calc(50% - 200px);
	overflow: hidden;
}
.names{
	width: 100%;
	display: flex;
	margin-bottom: 20px;
}
.names span{
	width: 40%;
	display: block;
}
.names input{
	width: 60%;
	box-shadow: none;
	outline: none;
}
.names_dan{
	width: 60%;
}
.names_dan input{
	width: 15px !important;
}
.names_btn{
	width: 100%;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 1px solid #ccc;
}
.names_btn button{
	padding: 3px 8px;
	margin-right: 15px;
	background-color: #fff;
	box-shadow: none;
	border: 0;
	color: #666;
	border-radius: 3px;
}
.names_btn button:hover{
	background-color: #000;
	color: #fff;
}
.names_yidi{
	margin-top: 20px;
	margin-bottom: 20px;
}
.names_wang{
	width: 100%;
	overflow: hidden;
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
}
.names_wang a{
	color: #666;
	float: right;
}
.names_wang a:hover{
	color: #666;
	float: right;
	text-decoration: none;
}
.names_xia{
	width: 100%;
	margin-top: 30px;
}
.names_xia p{
	color: #666;
}
.names_xia span{
	color: #000;
}
</style>