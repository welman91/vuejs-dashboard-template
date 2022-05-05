<template>
	<section
		:class="[
			'sidebar',
			sidebarHide ? 'minimized' : '',
			darkmode ? 'darkmode' : '',
		]"
	>
		<UserProfile />
		<div class="sidebar_menu_container">
			<router-link
				:to="menu.link"
				v-for="menu in menus"
				:key="menu.id"
				class="sidebar_menu wtooltip"
				@click="toggleSidebar"
			>
				<i :class="['sidebar_menu_icon', 'bi ' + menu.icon]"></i>
				<span class="sidebar_menu_name">{{ menu.title }}</span>
				<span v-if="sidebarHide" class="wtooltiptext">{{ menu.title }}</span>
			</router-link>
		</div>
	</section>
</template>

<script>
import UserProfile from "./UserProfile.vue";
import menus from "./SidebarData.js";

export default {
	name: "Sidebar",
	components: {
		UserProfile,
	},
	data() {
		return {
			menus: menus,
		};
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
			if (!this.$store.getters.getSidebarHide) {
				this.$store.commit("toggleSidebar");
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.sidebar {
	z-index: 2;
	position: fixed;
	width: 17.5rem;
	transition: width ease 1s;
	height: 100vh;
	background: var(--bgSidebar-lightmode);
	color: var(--colorSidebar-lightmode);
	// box-shadow: 0px 0px 47px 1px rgba(0, 0, 0, 0.27);
	// -webkit-box-shadow: 0px 0px 47px 1px rgba(0, 0, 0, 0.27);
	// -moz-box-shadow: 0px 0px 47px 1px rgba(0, 0, 0, 0.27);

	box-shadow: 5px 0 15px -8px rgb(150, 150, 150);

	&.minimized {
		width: 4rem;
		.sidebar_menu {
			.sidebar_menu_name {
				display: none;
			}
		}
	}
	&.darkmode {
		background: var(--bgSidebar-darkmode);
		a {
			color: var(--colorSidebar-darkmode) !important;
		}
		.wtooltip .wtooltiptext {
			background: var(--bgContent-lightmode);
			color: var(--colorContent-lightmode);
		}
	}
	.sidebar_menu_container {
		height: 100%;
		padding-bottom: 5rem;
		overflow-y: scroll;
		&::-webkit-scrollbar {
			width: 0.1rem;
		}
		&::-webkit-scrollbar-track {
			background-color: #00b7ff;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #15ff00;
		}
		.sidebar_menu {
			text-decoration: none;
			color: inherit;
			display: flex;
			align-items: center;
			font-size: 1rem;
			margin: 6px 0 6px 12px;
			padding: 6px 0 6px 8px;
			border-radius: 8px 0 0 8px;
			&:hover {
				background-color: #00b7ff;
				color: #fff;
			}
			.sidebar_menu_name {
				margin-left: 10px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			&.router-link-exact-active {
				background-color: #00b7ff;
				color: #fff;
			}
		}
	}
}

.wtooltip .wtooltiptext {
	z-index: 11;
	background: var(--bgContent-darkmode);
	color: var(--colorContent-darkmode);
	visibility: hidden;
	text-align: center;
	border-radius: 6px;
	padding: 5px 10px;
	white-space: nowrap;
	position: absolute;
	margin-left: 55px;
}

.wtooltip:hover .wtooltiptext {
	visibility: visible;
}

@media only screen and (max-width: 600px) {
	.sidebar {
		&.minimized {
			width: 0;
			.sidebar_menu {
				display: none;
			}
			.sidebar_menu_container {
				&::-webkit-scrollbar {
					display: none;
				}
			}
		}
	}
}
</style>
