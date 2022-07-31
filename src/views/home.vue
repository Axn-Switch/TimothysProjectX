<template>
	<div class="container">
		<div>
			<img src="../assets/mae.png" class="img" alt="fans in a stadium" />
			<div class="content-box">
				<div>
					<h1>Watch the FunLympic games Online.</h1>
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
				<div class="socials">
					<i style="color: #1e4bbf" class="uil uil-facebook" />
					<i style="color: #b116b5" class="uil uil-instagram" />
					<i style="color: #0f7de2" class="uil uil-twitter" />
					<i style="color: #e3bf00" class="uil uil-bell" />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.content-box > div {
		display: flex;
		align-items: center;
	}

	.content-box > div h1 {
		font-size: 43px;
	}

	.content-box > div > div {
		margin-left: 100px;
	}
	.container {
		display: flex;
		padding: 20px 50px 0 50px;
	}
	.container p {
		box-sizing: border-box;
		font-size: 3.5rem;
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
	.links {
		margin-top: 10px;
		font-size: 22px;
		font-weight: bold;
		letter-spacing: 2px;
		text-transform: uppercase;
	}
	.login {
		background: rgba(187, 10, 159, 0.7);
		padding: 15px 40px;
		border-radius: 5px;
		color: #fff;
	}
	.signup {
		background: rgba(75, 162, 131, 0.7);
		padding: 15px 40px;
		border-radius: 5px;
		color: #fff;
		margin-right: 30px;
	}
	.login:hover {
		background-color: #bb0a9f;
	}
	.signup:hover {
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
	}

	.socials {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 70px;
		font-size: 30px;
		margin-right: 35px;
		gap: 60px;
		padding: 10px;
	}

	.socials h3 {
		font-size: 15px;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	.icons {
		display: flex;
		align-items: center;
		justify-content: space-around;
		text-align: center;
		width: 60%;
		margin-right: 150px;
		font-size: 30px;
		cursor: pointer;
	}
	.socials > i {
		cursor: pointer;
	}
</style>
