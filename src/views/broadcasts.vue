<template>
	<div class="container">
		<side-bar />
		<div class="main-content">
			<div class="add-broadcast">
				<i class="uil uil-plus"></i>
				<button :disabled="popups" @click="popups = true">add broadcast</button>
			</div>

			<div class="content">
				<h2>broadcasts</h2>
				<table>
					<thead>
						<tr>
							<th>Image</th>
							<th>channel name</th>
							<th>description</th>
							<th>link</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="broadcast in broadcasts" :key="broadcast.id">
							<td>
								<img
									:src="broadcast.Image"
									alt="server images wey no wan load."
									style="width: 100px"
								/>
							</td>
							<td v-text="broadcast.Channel_Name"></td>
							<td v-text="broadcast.description"></td>
							<td>
								<a :href="broadcast.link"> {{ broadcast.link }} </a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<popup v-if="popups" class="popup">
			<i class="uil uil-times" @click="popups = false"></i>
			<form>
				<input type="text" placeholder="name" />
				<input type="url" placeholder="broadcast link" />
				<input type="url" placeholder="image link" />
				<input type="text" placeholder="host name" />
				<button type="submit">add broadcast</button>
			</form>
		</popup>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue'
	import axios from 'axios'
	import popup from '../components/popup.vue'
	import Tile from '../components/tile.vue'

	const popups = ref(false)
	const broadcasts = ref([])

	onMounted(async () => {
		await axios.get('http://localhost:5000/broadcasts').then((response) => {
			console.log(response.data)
			broadcasts.value = response.data
		})
	})
</script>

<style scoped>
	.content table {
		border-collapse: collapse;
		width: 100%;
	}

	th,
	td {
		border: 1px solid;
		padding: 10px;
		text-align: center;
	}

	.popup {
		min-width: 600px;
		height: 500px;
		padding: 10px;
		border: none;
		position: absolute;
		left: 30%;
		margin-top: 40px;
		border-radius: 5px;
		box-shadow: 0px 2px 8px rgba(35, 32, 32, 0.773);
	}

	.popup i {
		color: #000;
		font-size: 25px;
		font-weight: bold;
		cursor: pointer;
		position: absolute;
		left: 87%;
		margin-top: 20px;
	}

	.popup form {
		display: flex;
		flex-direction: column;
		width: 600px;
		align-items: center;
		margin-top: 70px;
	}

	.popup form input {
		width: 400px;
		padding: 10px;
		margin-top: 20px;
	}
	.popup form input::placeholder {
		color: #ccc;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.popup form button {
		margin-top: 30px;
		border: none;
		width: 250px;
		padding: 10px;
		cursor: pointer;
		font-size: 15px;
		text-transform: uppercase;
		font-weight: bold;
		background-color: #58b4f8;
		border-radius: 5px;
		color: #fff;
		letter-spacing: 2px;
	}

	.popup form button:hover {
		background-color: blue;
	}
	.container {
		display: flex;
	}

	.main-content {
		width: 100%;
		height: 100vh;
	}
	.content {
		margin-left: 20px;
		margin-top: 100px;
	}

	h2 {
		text-transform: uppercase;
		color: rgba(0, 0, 0, 0.812);
		font-size: 20px;
		margin-left: 20px;
		text-decoration: underline;
		letter-spacing: 1px;
	}
	.info-box {
		display: flex;
		flex-wrap: wrap;
	}

	.info-box div {
		background-color: rgba(128, 128, 128, 0.407);
		width: 350px;
		height: 200px;
		margin: 20px;
		border-radius: 5px;
	}
	.info-box div:hover {
		box-shadow: 0 2px 5px rgba(35, 32, 32, 0.773);
	}

	.add-broadcast {
		margin-top: 30px;
		border: none;
		border-radius: 5px;
		padding: 6px;
		position: absolute;
		left: 80%;
		background-color: #58b4f8;
	}
	.add-broadcast:hover {
		background-color: blue;
	}

	.add-broadcast button {
		letter-spacing: 2px;
		font-weight: bold;
		border: none;
		background: transparent;
		cursor: pointer;
		color: #fff;
		text-transform: capitalize;
		text-decoration: none;
	}

	i {
		margin-right: 6px;
		color: #fff;
		font-weight: bold;
	}
</style>
