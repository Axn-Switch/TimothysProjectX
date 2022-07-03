<template>
	<div class="container">
		<div class="forms">
			<span class="logo">logo</span>
			<form @submit.prevent.trim="login">
				<div class="input-field">
					<input type="text" placeholder=" username" v-model="username" required />
					<i class="uil uil-user"></i>
				</div>

				<div class="input-field">
					<input
						type="password"
						placeholder=" password"
						v-model="password"
						required
					/>
					<i class="uil uil-lock"></i>
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
	name: "login",
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		login() {
			alert("login successful✅");
		},
	},
};
</script>

<style scoped>
.container {
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
	height: 250px;
	border: 1px solid rgba(128, 128, 128, 0.286);
	position: absolute;
	left: 35%;
	transform: translateY(70%);
	box-shadow: 1px 3px 3px 0 rgba(153, 153, 153, 0.444);
}
.forms {
	padding: 10px;
}
.logo {
	font-size: 20px;
	letter-spacing: 2px;
	text-transform: uppercase;
}
.input-field {
	margin-top: 25px;
	position: relative;
	width: 300px;
	height: 40px;
}

.input-field input {
	height: 100%;
	width: 100%;
	padding: 0 0 0 30px;
	margin-right: 30px;
	border: none;
	outline: none;
	border-bottom: 1px solid #000;
	font-size: 14px;
	background: transparent;
}
.input-field input::placeholder {
	color: rgba(17, 15, 15, 0.506);
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
	margin-top: 20px;
}

.button button {
	width: 100px;
	padding: 7px;
	border: none;
	border-radius: 3px;
	font-size: 15px;
	font-weight: 600;
	letter-spacing: 2px;
	background: rgba(79, 166, 253, 0.438);
	color: #fff;
	cursor: pointer;
	text-transform: capitalize;
}

.button button:hover {
	background: blue;
}
</style>
