<template>
	<div class="container">
		<div class="wrapper">
			<span class="logo">LOGO</span>
			<form @submit.prevent.trim="signup">
				<div class="input-field">
					<input type="text" placeholder="username" v-model="username" required />
				</div>
				<div class="input-field">
					<input type="email" placeholder="email" v-model="email" required />
				</div>
				<div class="input-field">
					<input type="password" placeholder="password" v-model="password" required />
				</div>
				<div class="input-field">
					<input
						type="password"
						placeholder="confirm password"
						v-model="confirmPassword"
						required
					/>
				</div>
				<div class="button">
					<button type="submit">create account</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { ref } from 'vue'
	export default {
		name: 'signup',
		setup() {
			const username = ref('')
			const email = ref('')
			const password = ref('')
			const confirmPassword = ref('')

			// methods
			const signup = () => {
				alert('welcome user')
			}
			return {
				username,
				email,
				password,
				confirmPassword,
				signup,
			}
		},
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
		font-size: 25px;
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
		padding: 5px 50px;
		cursor: pointer;
		font-size: 15px;
		font-weight: bold;
		text-transform: uppercase;
		background: rgba(79, 166, 253, 0.767);
		border: none;
		border-radius: 5px;
		color: #fff;
	}

	button:hover {
		background-color: blue;
	}
</style>
