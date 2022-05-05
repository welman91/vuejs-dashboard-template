<template>
	<section
		:class="[
			'footer',
			sidebarHide ? 'minimized' : '',
			darkmode ? 'darkmode' : '',
		]"
	>
		<div class="row footer_logo d-flex justify-content-center">
			<img
				v-if="darkmode"
				src="@/assets/idobill_logo_light.png"
				alt="iDoBill Logo"
			/>
			<img v-else src="@/assets/idobill_logo_dark.png" alt="iDoBill Logo" />
		</div>
		<div class="my-5"></div>
		<div class="row footer_details">
			<div class="address_section col-sm-auto col-lg-3 mb-3">
				<h5>Kantor Batam</h5>
				<span>Jl. Imam Bonjol-Nagoya, Kp. Utama, </span>
				<br />
				<span>Lubuk Baja, Batam, Riau, 29444</span>
				<br />
				<span>Telepon: 077 8431 889</span>
			</div>
			<div class="product_section col-sm-auto col-lg-3 mb-3">
				<h5>Produk Kami</h5>
				<router-link to="/">
					<i class="bi bi-play-fill"></i> Internet Unlimited
				</router-link>
				<br />
				<router-link to="/">
					<i class="bi bi-play-fill"></i> WiFi Hotspot
				</router-link>
				<br />
				<router-link to="/">
					<i class="bi bi-play-fill"></i> TV Digital
				</router-link>
			</div>
			<div class="link_section col-sm-auto col-lg-3 mb-3">
				<h5>Site Map</h5>
				<router-link to="/">
					<i class="bi bi-play-fill"></i> Internet Unlimited
				</router-link>
				<br />
				<router-link to="/">
					<i class="bi bi-play-fill"></i> WiFi Hotspot
				</router-link>
				<br />
				<router-link to="/">
					<i class="bi bi-play-fill"></i> TV Digital
				</router-link>
			</div>
			<div class="social_media_section col-sm-auto col-lg-3 mb-3">
				<h5>Sosial Media Kami</h5>
				<span>
					Mari mengenal kami lebih dekat dengan mengikuti sosial media kami
				</span>
				<div class="socmed d-flex justify-content-between">
					<i class="bi bi-whatsapp"></i>
					<i class="bi bi-messenger"></i>
					<i class="bi bi-facebook"></i>
					<i class="bi bi-twitter"></i>
					<i class="bi bi-instagram"></i>
				</div>
			</div>
		</div>
		<div class="my-4"></div>
		<div class="row footer_copyright">
			<span>&copy; Copyright ERB. All Rights Reserved</span>
		</div>
	</section>
</template>
<script>
export default {
	name: "Footer",
	computed: {
		darkmode() {
			return this.$store.getters.getDarkMode;
		},
		sidebarHide() {
			return this.$store.getters.getSidebarHide;
		},
	},
};
</script>
<style lang="scss" scoped>
.footer {
	width: 100%;
	height: 100%;
	padding: 2rem 5rem;
	background: var(--bgNavbar-lightmode-reverse);
	color: var(--colorNavbar-lightmode);
	box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%),
		0px 1px 3px 1px rgb(60 64 67 / 15%);
	.footer_logo {
		img {
			transition: all ease 1s;
			width: 10rem;
		}
	}
	a {
		text-decoration: none;
		color: var(--colorNavbar-lightmode);
		&:hover {
			color: tomato;
		}
	}
	.social_media_section {
		.socmed {
			width: 10rem;
			padding-top: 1rem;
		}
	}
	.address_section span {
		white-space: nowrap;
	}
	.footer_logo_minimized {
		display: none;
	}
	&.darkmode {
		background: var(--bgNavbar-darkmode-reverse) !important;
		color: var(--colorNavbar-darkmode);
		a {
			text-decoration: none;
			color: var(--colorNavbar-darkmode);
			&:hover {
				color: tomato;
			}
		}
	}
}

@media only screen and (max-width: 600px) {
	.footer {
		padding: 2rem 1rem;
	}
	div[class$="_section"] {
		margin-bottom: 100rem;
	}
}
</style>
