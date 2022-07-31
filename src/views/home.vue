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
<<<<<<< HEAD
					<i style="color:#1E4BBF" class="uil uil-facebook" />
					<i style="color:#B116B5" class="uil uil-instagram" />
					<i style="color:#0F7DE2" class="uil uil-twitter" />
					<i style="color:#E3BF00" class="uil uil-bell" />
=======
					<h3>follow the games on</h3>
					<div class="icons">
						<i class="uil uil-facebook" />
						<i class="uil uil-instagram" />
						<i class="uil uil-twitter" />
						<i class="uil uil-bell" />
					</div>
>>>>>>> 7a0cffb176ca5198b7d064eb4834f93fcb021bc8
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
<<<<<<< HEAD
=======
	.content-box > div h1 {
		font-size: 43px;
	}
>>>>>>> 7a0cffb176ca5198b7d064eb4834f93fcb021bc8
	.content-box > div > div {
		margin-left: 100px;
	}
	.container {
		display: flex;
		padding: 20px 50px 0 50px;
	}
	.container p {
		box-sizing: border-box;
<<<<<<< HEAD
		font-size: 3.5rem;
		color: black;
=======
		font-size: 3.5em;
>>>>>>> 7a0cffb176ca5198b7d064eb4834f93fcb021bc8
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
<<<<<<< HEAD
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 70px;
		font-size: 30px;
		margin-right: 35px;
		gap: 60px;
=======
		margin-top: 30px;
		padding: 10px;
		display: flex;
		flex-direction: column;
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
>>>>>>> 7a0cffb176ca5198b7d064eb4834f93fcb021bc8
	}
	.socials>i{
		cursor: pointer;
	}
</style>
