<template>
	<div class="container">
		<div class="content-box">
			<div>
				<p>
					start streaming the
					<span class="title">FunLympic</span> <span class="title-2"> Games </span>
				</p>
				<div class="links">
					<router-link to="/login" class="login">Login</router-link>
					<router-link to="/signup" class="signup">Signup</router-link>
				</div>
				<div class="content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur tellus at
					velit volutpat, sollicitudin semper tortor finibus. Pellentesque vitae ni
				</div>
			</div>
		</div>
		<img src="../assets/Untitled.png" alt="#background image">
	</div>
</template>

<style scoped>
	.title-2 {
		color: rgba(255, 255, 0, 0.67);
	}
	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		background-color: #3d226dd4;
	}
	.container p {
		box-sizing: border-box;
		font-size: 20px;
		color: rgba(255, 255, 0, 0.648);
		font-weight: bold;
		width: 81%;
		text-align: center;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.content-box {
		padding: 50px 150px 50px 150px;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 120px;
		border-left: 3px dashed black;
	}
	.title {
		color: #fff;
		letter-spacing: 2px;
		font-size: 50px;
		text-transform: uppercase;
	}
	.links {
		padding: 10px;
		margin-top: 10px;
		margin-left: 10%;
	}
	.links .login {
		background: rgba(0, 0, 255, 0.532);
		letter-spacing: 2px;
		padding: 10px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		margin-right: 30px;
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
	}
	.links .signup {
		background: rgba(255, 0, 0, 0.489);
		letter-spacing: 2px;
		padding: 10px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
	}
	.links .login:hover {
		background-color: blue;
	}
	.links .signup:hover {
		background-color: red;
	}
	.content {
		margin-top: 20px;
		text-align: center;
		color: #999;
	}
	img {
		display: flex;
	}
</style>
