<template>
	<div id="container">
		<section id="panel"></section>
		<section id="content-area">
			<header>
				<h1>Headlines</h1>
				<p>Donald duke makes history at the games for the 2nd year in a row</p>
			</header>
			<div>
				<h1>Welcome User</h1>
				<p>Here are Today's broadcasts</p>
			</div>

			<div>
				<router-link :to="`/watch/${broadcast.Channel_Name}`" class="signup"
					v-for="broadcast in broadcasts"
					:key="broadcast.id"
					:style="{ 'background-image': `linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) ,url(${broadcast.Image})` }"

				>
					<h3>{{ broadcast.Channel_Name }}</h3>
					<p>{{ broadcast.description }}</p>
				</router-link>
			</div>
		</section>
	</div>
</template>
<script setup>
	import axios from 'axios'
	import { onMounted, ref } from 'vue'

	const popups = ref(false)
	const broadcasts = ref([])
	const BaseUrl = ref('http://localhost:5000/broadcasts')

	onMounted(async () => {
		await axios.get(BaseUrl.value).then((response) => (broadcasts.value = response.data))
	})
</script>
<style scoped>
	::-webkit-scrollbar {
		display: none;
	}
	#container {
		display: flex;
		width: 100%;
		height: 100vh;
	}
	#panel {
		width: 7%;
		background-color: #4f439b;
	}
	header {
		width: 70%;
		border: 1px solid gray;
		margin: auto;
		margin-top: 10px;
		padding: 12px;
	}
	#content-area {
		width: 93%;
	}
	header + div {
		padding: 45px 30px 45px 30px;
		border: 1px solid gray;
		margin-top: 20px;
		width: 80%;
		margin-left: 65px;
	}
	header + div + div {
		background-color: #d9d9d9;
		margin-left: 65px;
		width: 80%;
		height: 60vh;
		display: flex;
		flex-wrap: wrap;
		flex-basis: 100%;
		overflow: scroll;
		justify-content: space-around;
		padding: 5px 2px 0px 2px;
	 	justify-content: flex-start;
	}
	header + div + div > a {
		width: 250px;
		height: 150px;
		margin: 2px;
		margin-top: 0px;
		margin-bottom: 0px;
		background-position: center;
		background-size: 100%;
		color: white;
		padding: 5px 0px 0px 10px;
	}
	header + div + div > a:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
</style>
