<template>
	<div class="notfound">
		<p>Oops! You just hit a Four-Oh-Four.</p>
	</div>
	<div class="redirect">
		<router-link class="btn" :to="{ name: 'home' }"> Take me home </router-link>
	</div>
</template>

<style scoped>
	.notfound p {
		margin-top: 20px;
		font-size: 10px;
		letter-spacing: 2px;
	}
	.redirect {
		justify-content: center;
		display: flex;
	}
	.btn {
		color: #999;
		border: 1px solid rgba(153, 153, 153, 0.285);
		padding: 10px;
		font-size: 10px;
		font-weight: bold;
		border-radius: 5px;
		margin-top: 20px;
	}
	.btn:hover {
		text-decoration: underline;
	}
</style>
