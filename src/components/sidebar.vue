<template>
	<div class="sidebar">
		<div class="logo">
			<i class="uil uil-anchor"></i>
		</div>
		<ul>
			<li><router-link to="/account/users">users</router-link></li>
			<li><router-link to="/account/broadcasts">broadcasts</router-link></li>
			<li><router-link to="/account/metrics">metrics</router-link></li>
		</ul>
		<div class="logout">
			<button>Logout</button>
		</div>
	</div>
</template>

<style scoped>
	.sidebar {
		background: #141260;
		min-width: 300px;
		height: 100vh;
		display: flex;
		flex-direction: column;
		text-align: center;
	}
	.logo {
		font-size: 30px;
		color: #000;
		background: #fff;
		margin-left: 40%;
		margin-top: 20px;
		width: 50px;
		border-radius: 5px;
	}

	ul {
		margin-top: 100px;
	}

	li {
		border-bottom: 1px solid rgba(255, 255, 255, 0.253);
		padding: 20px;
		color: #fff;
		cursor: pointer;
		text-transform: uppercase;
		font-size: 20px;
		font-weight: bold;
	}

	li a:hover {
		color: orange;
	}

	li a {
		background: transparent;
		color: #fff;
		text-decoration: none;
	}

	li a.router-link-active {
		color: orange;
	}

	.logout {
		margin-top: 200px;
	}
	.logout button {
		border: none;
		padding: 6px;
		background-color: #4b92bb;
		color: #fff;
		font-weight: bold;
		width: 150px;
		border-radius: 5px;
		letter-spacing: 2px;
		text-transform: uppercase;
	}

	.logout button:hover {
		background-color: blue;
		cursor: pointer;
	}
</style>
