<template>
	<div id="container">
		<section id="panel"></section>
		<section id="main">
			<div id="videoplayer"></div>
			<div id="streamtext">
				<h1>Broadcast Name</h1>
				<p>Broadcast Description</p>
			</div>
		</section>
		<section id="controls">
			<h2>Other broadcasts</h2>
			<div>
				<div
					v-for="broadcast in broadcasts"
					:key="broadcast.id"
					:style="{ 'background-image': `linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)) ,url(${broadcast.Image})` }"
				>
					<h3>{{ broadcast.Channel_Name }}</h3>
					<p>{{ broadcast.description }}</p>
				</div>
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
	#main {
		width: 78%;
	}
	#videoplayer {
		margin: 40px 0px 10px 10px;
		aspect-ratio: 18/9;
		height: 70vh;
		border: 1px solid black;
		background-color: grey;
	}
	#streamtext {
		padding: 0px 0px 0px 10px;
	}
	#controls {
		border-left: 1px solid black;
	}
	#controls > div {
		height: 90vh;
		overflow: scroll;
	}
	#controls > h2 {
		padding: 20px 0px 10px 7px;
	}
	#controls > div > div {
		width: 250px;
		height: 100px;
		margin: 2px;
		margin-top: 0px;
		background-position: center;
		background-size: 100%;
		color: white;
		padding: 5px 0px 0px 10px;
		margin-bottom: 3px;
	}
	#controls > div > div:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
</style>
