<template>
	<Sidebar />
	<SidebarToggler />
	<section
		:class="[
			'main',
			sidebarHide ? 'minimized' : '',
			darkmode ? 'darkmode' : '',
		]"
	>
		<div
			:class="sidebarHide ? 'd-none' : 'dark-cover'"
			@click="toggleSidebar"
		></div>
		<Navbar />
		<section :class="['content', darkmode ? 'darkmode' : '']">
			<router-view />
		</section>
		<Footer />
	</section>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import SidebarToggler from "./components/sidebar/SidebarToggler.vue";
import Navbar from "./components/navbar/Navbar.vue";
import Footer from "./components/footer/Footer.vue";

export default {
	components: {
		Sidebar,
		SidebarToggler,
		Navbar,
		Footer,
	},
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
	created: function () {
		// document.body.style.backgroundColor = "white";
	},
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

button,
button:focus,
button:active {
	outline: 0 !important;
	box-shadow: none !important;
}

#app {
	font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.main {
	width: 100%;
	// height: 100vh;
	padding-left: 5rem;
	background: var(--bgContent-lightmode);
	color: var(--colorContent-lightmode);

	// overflow-y: hidden;
	&.main.minimized {
		padding-left: 4rem;
	}
	&.darkmode {
		background: var(--bgContent-darkmode);
		// color: var(--colorContent-darkmode);
	}
}

@media only screen and (max-width: 600px) {
	.main,
	.main.minimized {
		padding-left: 0 !important;
	}
}

.dark-cover {
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #111;
	opacity: 0.8;
}

.content {
	padding: 4rem 0.5rem;
	min-height: 65vh;
}
</style>
