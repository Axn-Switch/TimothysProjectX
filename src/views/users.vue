<template>
	<div class="container">
		<side-bar />
		<div class="form">
			<div class="heading">
				<p>registered users</p>
				<i class="uil uil-user"> 200</i>
			</div>
			<div class="box">
				<div></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.container {
		display: flex;
	}
	.form {
		width: 100%;
		margin-top: 60px;
		margin-left: 50px;
		display: flex;
		flex-direction: column;
	}
	.heading p {
		margin-left: -19rem;
		position: inherit;
		font-size: 18px;
		text-transform: uppercase;
		font-weight: 400;
		letter-spacing: 2px;
	}

	.heading {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.heading i {
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
	}

	.box div {
		background-color: rgba(128, 128, 128, 0.149);
		width: 1100px;
		height: 550px;
		margin: 20px;
		border-radius: 3px;
	}
</style>
