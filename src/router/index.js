import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "dashboard.index",
		component: () => import("../views/Dashboard/Index.vue"),
	},
	{
		path: "/data-pelanggan",
		name: "data_pelanggan.index",
		component: () => import("@/views/Data-Pelanggan/Index.vue"),
	},
	{
		path: "/berlangganan",
		name: "berlangganan.index",
		component: () => import("@/views/Berlangganan/Index.vue"),
	},
	{
		path: "/daftar-tagihan",
		name: "daftar_tagihan.index",
		component: () => import("@/views/Daftar-Tagihan/Index.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to) => {
	document.title = to.meta.title || process.env.VUE_APP_TITLE;
});

export default router;
