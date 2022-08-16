<template>
	<div class="container">
		<div class="wrapper">
			<span class="logo">password reset</span>
			<form @submit.prevent.trim="reset">
				<div class="input-field">
					<input type="text" placeholder=" username" v-model="username" required />
				</div>
				<div class="input-field">
					<input type="password" placeholder=" enter new password" v-model="password" required />
				</div>
				<div class="input-field">
					<input type="password" placeholder="confirm new password" v-model="password2" required />
				</div>
				<div class="button">
					<button type="submit">reset</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios'
	import { ref } from 'vue'
	import { useRouter } from 'vue-router'
	const router = useRouter()

	const username = ref('')
	const password = ref('')
	const password2 = ref('')

	const reset = async (id) => {
		let passReset = {
			password: '',
		}
		if (password.value != password2.value) {
			alert('passwords do not match')
		} else {
			axios.get(`${`http://localhost:5000/users`}?username=${username.value}`).then((response) => {
				id = response.data[0].id
				passReset.password = password.value
				axios.patch(`${`http://localhost:5000/users`}/${id}`, passReset)
			})
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		justify-content: center;
	}
	.wrapper {
		min-width: fit-content;
		border: 1px solid #ccc;
		text-align: center;
		border-radius: 5px;
		margin-top: 100px;
		padding: 15px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.194);
	}
	.logo {
		letter-spacing: 2px;
		text-transform: uppercase;
		font-weight: bold;
		font-size: 16px;
	}
	.input-field {
		padding: 10px;
	}
	.input-field input {
		width: 250px;
		padding: 5px;
		border: 0;
		border-bottom: 1px solid;
		outline: 0;
	}

	.input-field input::placeholder {
		text-transform: capitalize;
		font-size: 12px;
	}
	button {
		margin-top: 10px;
		padding: 5px 100px;
		cursor: pointer;
		font-size: 15px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 2px;
		background: rgba(79, 166, 253, 0.767);
		border: none;
		border-radius: 5px;
		color: #fff;
	}

	button:hover {
		background-color: blue;
	}
</style>
