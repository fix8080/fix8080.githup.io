<template>
	<div id="suoyoushangpin">
		<div class="content">
			<img src="https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9lNWNiNGMwMTNmOWIxNWY5YTM2NGI1YzUyMDlmZGY3Mi5qcGc_p_p100_p_3D.jpg" />
		</div>
		<div class="suoyou_wenzi">
			<h4>All the goods</h4>
			<h5 style="margin-top: 20px;">Whether you are a regular Internet user or a professional website maker, you can use the launch page to design the most </h5>
			<h5>professional website.Take off page provides a lot of beautiful website, website templates and finished products almost cover built in </h5>
			<h5>various industries, today you just small changes on the template to complete their own websites, all this is free of charge.</h5>
		</div>
		<div class="huahui">
			<div class="huahui1">
				<dl v-for="i in arr1">
					<dt style="overflow: hidden;">
					<img :src="i.img" class="huahui_img">
				</dt>
					<dd class="huahui_dd1">
						<span>{{i.name}}</span>
					</dd>
					<dd class="huahui_dd2">
						<span>{{i.pice}}</span>
					</dd>
				</dl>
			</div><div class="huahui1">
				<dl v-for="i in arr2">
					<dt style="overflow: hidden;">
					<img :src="i.img" class="huahui_img">
				</dt>
					<dd class="huahui_dd1">
						<span>{{i.name}}</span>
					</dd>
					<dd class="huahui_dd2">
						<span>{{i.pice}}</span>
					</dd>
				</dl>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'suoyoushangpin',
		data() {
			return {
				arr1: [{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9lMmM2NjM0MzI0OWE5ZTQyNGEyZmZjYzdkNWExZjJmZi0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉08',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8xN2Q0Y2IwMmE2NGU0NTE2NDZjODk4NzBkMDE4MDIyOS0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉07',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9kNmZjOGNmZTExMzRmMDZjNzY4NDgxNDZmMTNiYjA3OC0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉06',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9lNmMwOTAzY2NiMDE4MTdhNzg1MGZmZDhmOTZjMDNhMi0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉05',
						pice: '￥5900'
					}
				],
				arr2: [{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC85YzMwNjNiMGUzNThlYzE2ZjI5NmU2YjQwOWU4YjQ5Ny0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉04',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC80MTE1MTY5MTVmZmExMmU0NTM0YjE5ODZiNTAzOGUyZS0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉03',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC9lZjkzN2Q3NDU0ZTI2MDFlZDY3NjAwOGI2MjExNDIxNS0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉02',
						pice: '￥5900'
					},
					{
						img: 'https://ccdn.goodq.top/caches/fda7f453633d00774c6f325f6daa18b3/aHR0cDovLzU5ZGFkYmJhYWM0MzYudDc0LnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8xMC8xYzFkZTM0YTU3NDNkZjRiYTRjNzUwMjg5YTQ5MzMzYS0yNTB4MjUwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
						name: '植物花卉01',
						pice: '￥5900'
					}
				]
			}
		}

	}
</script>

<style>
	.content {
		width: 100%;
		height: 300px;
		margin-bottom: 20px;
	}
	
	.content>img {
		width: 90%;
		height: 100%;
		padding-left: 5%;
		padding-top: 5%;
	}
	
	.suoyou_wenzi {
		width: 100%;
		height: 200px;
		text-align: center;
	}
	
	.huahui {
		width: 100%;
		height: auto;
		float: left;
		padding-left: 100px;
		/*display: flex;*/
	}
	.huahui1{
		width: 100%;
		height: auto;
		display: flex;
	}
	.huahui1>dl {
		width: 20%;
		height: 300px;
		float: left;
		margin-right: 50px;
	}
	
	.huahui_img {
		width: 100%;
		height: 200px;
	}
	
	.huahui_dd1 {
		width: 100%;
		height: 30px;
		display: block;
		line-height: 30px;
		text-align: center;
	}
	
	.huahui_dd2 {
		width: 100%;
		height: 30px;
		display: block;
		line-height: 30px;
		text-align: center;
	}
</style>