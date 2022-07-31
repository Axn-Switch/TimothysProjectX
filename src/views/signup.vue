<template>
	<div class="container">
		<div class="wrapper">
			<span class="logo">Funlympics2023</span>
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
					<input type="password" placeholder="confirm password" v-model="confirmPassword" required />
				</div>
				<div class="button">
					<button type="submit">create account</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "login",
	data() {
		return {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	},
	methods: {
		signup() {
			alert("signup successful✅");
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-image: url('../assets/cool-background.png');
}

.wrapper {
	border-radius: 5px;
	padding: 20px 40px;
	transform: translate(0%, 50%);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.194);
	background-color: white;
}

.wrapper .logo {
	font-size: 20px;
	letter-spacing: 2px;
	font-weight: bold;
	text-transform: uppercase;
	margin: auto;
}

.input-field input {
	width: 300px;
	padding: 5px;
	outline: none;
	margin-top: 30px;
}

.input-field input::placeholder {
	text-transform: capitalize;
}

.button {
	margin-top: 20px;
	display: flex;
	justify-content: center;
}

.button button {
	padding: 5px 90px;
	cursor: pointer;
	font-size: 15px;
	font-weight: bold;
	text-transform: capitalize;
	background: rgba(79, 166, 253, 0.767);
	border: none;
	color: #fff;
}

.button button:hover {
	background-color: blue;
}
</style>
