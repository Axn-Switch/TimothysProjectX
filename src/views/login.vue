<template>
	<div class="container">
		<div class="forms">
			<span class="logo">logo</span>
			<form @submit.prevent.trim="login">
				<div class="input-field">
					<input type="text" placeholder=" username" v-model="username" required />
					<i class="uil uil-user" id="icon"></i>
				</div>

				<div class="input-field">
					<input type="password" placeholder=" password" v-model="password" required />
					<i class="uil uil-lock" id="icon"></i>
				</div>

				<div class="button">
					<button type="submit">login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				username: '',
				password: '',
			}
		},
		methods: {
			login() {
				alert('login successful✅')
			},
		},
	}
</script>

<style scoped>
	.container {
		background-color: #3d226dd4;
		height: 100vh;
	}
	.forms {
		border: 1px solid rgba(0, 0, 0, 0.277);
		border-radius: 5px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.488);
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: 20px;
	}
	.logo {
		font-size: 20px;
		letter-spacing: 2px;
		color: #fff;
		text-transform: uppercase;
	}
	.input-field {
		margin-top: 25px;
		position: relative;
		width: 300px;
		height: 40px;
	}
	#icon {
		color: #fff;
	}
	.input-field input {
		height: 100%;
		width: 100%;
		padding: 0 0 0 30px;
		margin-right: 30px;
		border: none;
		outline: none;
		border-bottom: 1px solid #fff;
		font-size: 14px;
		color: #fff;
		background: transparent;
	}
	.input-field input::placeholder {
		color: rgba(255, 255, 255, 0.45);
		letter-spacing: 2px;
		text-transform: capitalize;
		font-size: 11px;
	}

	.input-field i {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		color: #000;
		font-size: 20px;
	}
	.button {
		margin-top: 30px;
		display: flex;
		justify-content: center;
	}

	.button button {
		width: 200px;
		padding: 7px;
		border: none;
		border-radius: 3px;
		font-size: 15px;
		font-weight: 600;
		letter-spacing: 2px;
		background: rgba(79, 166, 253, 0.438);
		color: #fff;
		cursor: pointer;
		text-transform: uppercase;
	}
</style>
