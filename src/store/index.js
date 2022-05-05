import { createStore } from "vuex";

export default createStore({
	state: {
		darkmode: localStorage.key("idobill-darkmode-setting")
			? JSON.parse(localStorage.getItem("idobill-darkmode-setting"))
			: false,
		sidebarHide: true,
	},
	getters: {
		getDarkMode: (state) => {
			return state.darkmode;
		},
		getSidebarHide: (state) => {
			return state.sidebarHide;
		},
	},
	mutations: {
		toggleDarkmode(state) {
			state.darkmode = !state.darkmode;
			localStorage.setItem("idobill-darkmode-setting", state.darkmode);
		},
		toggleSidebar(state) {
			state.sidebarHide = !state.sidebarHide;
		},
	},
	actions: {},
	modules: {},
});
