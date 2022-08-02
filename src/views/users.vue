<template>
	<div class="container">
		<side-bar />
		<div class="form">
			<div class="heading">
				<h1>registered users</h1>
			</div>
			<div class="box">
				<div v-for="user in test_user" :key="user.name">{{ user.name }}</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	// imports
	import { ref, onMounted } from 'vue'
	import axios from 'axios'

	// variables
	const test_user = ref([])

	// lifecycle and api
	onMounted(async () => {
		await axios
			.get('http://localhost:5000/users')
			.then((response) => (test_user.value = response.data))
	})
</script>

<style scoped>
	.container {
		display: flex;
	}
	.form {
		width: 100%;
		margin-top: 60px;
		margin-left: 50px;
		display: flex;
		flex-direction: column;
	}
	.heading h1 {
		text-transform: uppercase;
		font-size: 25px;
		text-align: center;
		border: 1px solid;
		padding: 10px;
		margin-bottom: 10px;
		border-radius: 5px;
		color: #ffffff;
		background-color: #000000;
		letter-spacing: 2px;
	}

	.heading {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.box {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
	}

	.box div {
		border: 1px solid;
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
		cursor: pointer;
		font-size: 20px;
	}

	.box div:hover {
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.334);
		background-color: #000000;
		color: #ffffff;
		border: none;
	}
</style>
