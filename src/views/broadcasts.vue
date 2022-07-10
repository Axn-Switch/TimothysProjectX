<template>
	<div class="container">
		<side-bar />
		<div class="main-content">
			<div class="add-broadcast">
				<i class="uil uil-plus"></i>
				<!-- <router-link to="/account/addBroadcast" class="button" >add broadcast</router-link> -->
				<button :disabled="popups" @click="popups = true">add broadcast</button>
			</div>
			<div class="content">
				<h2>broadcasts</h2>
				<div class="info-box">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
		<popup v-if="popups" class="popup">
			<button @click="popups = false">close</button>
			<form>
				<input type="text" placeholder="name" />
				<input type="url" placeholder="link" />
				<input type="url" placeholder="image link" />
				<input type="text" placeholder="host" />

				<button type="submit">add broadcast</button>
			</form>
		</popup>
	</div>
</template>

<script>
	import popup from '../components/popup.vue'
	export default {
		components: {
			popup,
		},
		data() {
			return {
				popups: false,
			}
		},
	}
</script>

<style scoped>
	.popup {
		width: 600px;
		height: 500px;
		border: 1px solid gray;
		position: absolute;
		left: 30%;
		margin-top: 40px;
		border-radius: 5px;
		box-shadow: 0px 2px 8px rgba(35, 32, 32, 0.773);
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
