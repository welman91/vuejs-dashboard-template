<template>
	<div
		:class="[
			'toggler-div',
			sidebarHide ? 'minimized' : '',
			darkmode ? 'darkmode' : '',
		]"
	>
		<button class="btn btn-sm" @click="toggleSidebar">
			<i v-if="sidebarHide" class="bi bi-arrow-right-circle-fill"></i>
			<i v-else class="bi bi-arrow-left-circle-fill"></i>
		</button>
	</div>
</template>
<script>
export default {
	name: "SidebarToggler",
	computed: {
		darkmode() {
			return this.$store.getters.getDarkMode;
		},
		sidebarHide() {
			return this.$store.getters.getSidebarHide;
		},
	},
	methods: {
		toggleSidebar() {
			this.$store.commit("toggleSidebar");
		},
	},
};
</script>
<style lang="scss" scoped>
.toggler-div {
	position: fixed;
	left: 17rem;
	transition: all ease 1s;
	z-index: 3;
	button i {
		font-size: 1.5rem;
		color: #00b7ff;
		margin-left: 5px;
	}
	&.minimized {
		left: 4.5rem;
	}
	&.darkmode button i {
		color: #fff;
	}
}

@media only screen and (max-width: 600px) {
	.toggler-div {
		&.minimized {
			left: 0;
		}
	}
}
</style>
