<template>
	<div class="container">
		<div>
			<div class="img"></div>
			<div class="content-box">
				<div>
					<p>Watch the FunLympic games Online.</p>
					<div>
						<div class="content">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur tellus
							at velit volutpat, sollicitudin semper tortor finibus. Pellentesque vitae ni
						</div>
						<div class="links">
							<router-link to="/signup" class="signup">Signup</router-link>
							<router-link to="/login" class="login">Login</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.title-2 {
		color: rgba(255, 255, 0, 0.67);
	}
	.container > div {
		display: block;
	}
	.content-box > div {
		display: flex;
	}
	.content-box > div > div {
		margin-left: 150px;
	}
	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		padding: 50px;
	}
	.container p {
		box-sizing: border-box;
		font-size: 3.5em;
		color: black;
		font-weight: bold;
		letter-spacing: 2px;
	}
	.content-box {
		padding: 50px 150px 50px 145px;
		margin-top: auto;
		margin-bottom: auto;
		border-left: 2px solid black;
	}
	.title {
		color: #fff;
		letter-spacing: 2px;
		font-size: 50px;
		text-transform: uppercase;
	}
	.links {
		margin-top: 10px;
	}
	.links .login {
		background: rgba(187, 10, 159, 0.7);
		letter-spacing: 2px;
		padding: 15px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		font-size: 22px;
		font-weight: bold;
	}
	.links .signup {
		background: rgba(75, 162, 131, 0.7);
		letter-spacing: 2px;
		padding: 15px 40px;
		border-radius: 5px;
		color: #fff;
		text-decoration: none;
		font-size: 22px;
		font-weight: bold;
		margin-right: 30px;
	}
	.links .login:hover {
		background-color: #bb0a9f;
	}
	.links .signup:hover {
		background-color: #4ba283;
	}
	.content {
		margin-top: 20px;
		color: #999;
		margin-bottom: 50px;
	}
	.img {
		display: flex;
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 35vh;
		background-image: url(../assets/mae.png);
	}
</style>
