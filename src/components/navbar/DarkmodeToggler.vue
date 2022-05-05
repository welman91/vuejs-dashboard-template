<template>
	<div :class="['switch', darkmode ? 'darkmode' : '']">
		<input type="checkbox" class="checkbox" id="checkbox" />
		<label for="checkbox" class="label" @click="toggleDarkmode">
			<i class="bi bi-moon-fill"></i>
			<i class="bi bi-sun-fill"></i>
			<div class="ball"></div>
		</label>
	</div>
</template>
<script>
export default {
	computed: {
		darkmode() {
			return this.$store.getters.getDarkMode;
		},
	},
	methods: {
		toggleDarkmode() {
			this.$store.commit("toggleDarkmode");
		},
	},
};
</script>
<style lang="scss" scoped>
.checkbox {
	opacity: 0;
	position: absolute;
}

.label {
	width: 3rem;
	height: 1.4rem;
	background-color: #222;
	display: flex;
	border-radius: 50px;
	align-items: center;
	justify-content: space-between;
	padding: 5px;
	position: relative;
	&:hover {
		cursor: pointer;
	}
}

.ball {
	width: 1.3rem;
	height: 1.3rem;
	background-color: white;
	position: absolute;
	// top: 5px;
	left: 2px;
	border-radius: 50%;
	transition: transform 0.2s linear;
}

.switch {
	.checkbox,
	.label .ball {
		transform: translateX(0);
	}
	&.darkmode {
		.checkbox,
		.label .ball {
			transform: translateX(24px);
		}
	}
}

.bi-moon-fill {
	color: pink;
}

.bi-sun-fill {
	color: yellow;
}
</style>
