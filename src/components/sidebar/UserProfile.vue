<template>
	<section
		:class="[
			'sidebar_user_profile',
			sidebarHide ? 'minimized' : '',
			darkmode ? 'darkmode' : '',
		]"
	>
		<div class="sidebar_user_profile_img_section">
			<img src="@/assets/user.png" alt="user" />
			<div class="sidebar_user_profile_name_email_role">
				<div class="sidebar_user_profile_name">
					Welman Prenki Test Xddaad Faafaf
				</div>
				<div class="sidebar_user_profile_email">
					<span>welman@SinowellgroupSinowellgroupSinowellgroup.net</span>
				</div>
				<div class="sidebar_user_profile_badge">
					<!-- <span class="badge rounded-pill bg-danger text-white">Admin</span> -->
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: "UserProfile",
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
.sidebar_user_profile {
	background: var(--bgSidebar-lightmode);
	color: var(--colorSidebar-lightmode);
	border-right: 0.1rem solid #00b7ff;
	&.minimized {
		.sidebar_user_profile_img_section {
			.sidebar_user_profile_name_email_role {
				.sidebar_user_profile_name,
				.sidebar_user_profile_email,
				.sidebar_user_profile_badge {
					display: none;
				}
			}
		}
	}
	&.darkmode {
		background: var(--bgSidebar-darkmode) !important;
		color: var(--colorSidebar-darkmode);
	}
	.sidebar_user_profile_img_section {
		padding: 12px 10px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		img {
			width: 2.5rem;
		}
		.sidebar_user_profile_name_email_role {
			width: 12rem;
			margin-left: 10px;
			.sidebar_user_profile_name,
			.sidebar_user_profile_email {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.sidebar_user_profile_email {
				font-size: 0.6rem;
			}
		}
	}
}

@media only screen and (max-width: 600px) {
	.sidebar_user_profile {
		&.minimized {
			border-right: none;
			height: 4rem;
			img {
				display: none;
				transition: all ease 1s;
			}
		}
	}
}
</style>
