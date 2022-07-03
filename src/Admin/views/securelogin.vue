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
    setup() {
        
    },
}
</script>
