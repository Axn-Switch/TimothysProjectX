<template>

</template>

<style scoped>
	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		background-color: rgba(148, 13, 148, 0.21);
	}

	.container p {
		box-sizing: border-box;
		font-size: 30px;
		font-weight: bold;
		width: 90%;
		text-align: center;
		letter-spacing: 2px;
		text-transform: capitalize;
	}
	.content-box {
		padding: 50px 150px 50px 150px;
		margin-top: auto;
		margin-bottom: auto;
		margin-left: 120px;
		border-left: 3px dashed black;
		justify-content: center;
	}

	.title {
		color: #fff;
		letter-spacing: 2px;
		font-size: 50px;
	}
	.links {
		padding: 10px;
		margin-top: 10px;
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


</style>
