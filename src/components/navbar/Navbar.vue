<template>
	<section :class="['navbar_top', darkmode ? 'darkmode' : '']">
		<!-- navbar_top_logo -->
		<div class="navbar_top_logo">
			<img src="@/assets/grahakomindo_logo.png" alt="grahakomindo logo" />
		</div>

		<!-- navbar_top_darkmode -->
		<div class="navbar_top_darkmode">
			<DarkmodeToggler />
		</div>

		<!-- navbar_top_user -->
		<div class="navbar_top_user">
			<span class="badge rounded-pill bg-danger text-white">Admin</span>
		</div>
	</section>
</template>

<script>
import DarkmodeToggler from "./DarkmodeToggler.vue";

export default {
	name: "Navbar",
	components: { DarkmodeToggler },
	computed: {
		darkmode() {
			return this.$store.getters.getDarkMode;
		},
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
.navbar_top {
	// z-index: 1;
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	height: 3rem;
	background: var(--bgNavbar-lightmode);
	// background: url("../../assets/logo.png");
	// background-repeat: no-repeat;
	// background-position: center;

	display: flex;
	justify-content: space-between;
	align-items: center;

	// box-shadow firebase
	box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%),
		0px 1px 3px 1px rgb(60 64 67 / 15%);
	&.darkmode {
		background: var(--bgNavbar-darkmode) !important;
		// box-shadow: 0px 1px 2px 0px rgb(255 255 255/ 30%),
		// 	0px 1px 3px 1px rgb(255 255 255 / 15%);
	}
	.navbar_top_logo {
		margin-left: 8rem;
		flex: 80%;
		flex-direction: column;
		width: 2rem;
		height: 2rem;
		img {
			height: 100%;
			object-fit: contain;
		}
	}

	.navbar_top_darkmode {
		flex: 10%;
		display: flex;
		justify-content: flex-end;
		padding-right: 5px;
	}

	.navbar_top_user {
		flex: 10%;
		display: flex;
		justify-content: center;
		margin-right: 10px;
		span {
			max-width: 5rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}

@media only screen and (max-width: 600px) {
	.navbar_top_logo {
		margin-left: 3rem !important;
		img {
			width: 10rem !important;
		}
	}
}
</style>
