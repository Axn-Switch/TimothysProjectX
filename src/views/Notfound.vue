<template>
	<div class="container">
		<h1>oops! you just hit a four-oh-four</h1>
		<router-link class="btn" :to="{ name: 'home' }">Take me home</router-link>
	</div>
</template>

<style scope>
	.container {
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-family: poppins;
	}

	.container h1 {
		letter-spacing: 2px;
		text-transform: uppercase;
		font-size: 20px;
	}
	.btn {
		border: 1px solid #000;
		color: #000;
		border-radius: 5px;
		padding: 10px;
		letter-spacing: 2px;
		font-weight: bold;
		text-transform: uppercase;
		margin-top: 15px;
	}
	.btn:hover {
		background-color: #000;
		color: #fff;
	}
</style>
