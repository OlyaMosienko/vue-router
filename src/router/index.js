import { isLoggenIn } from '@/auth';
import NotFoundView from '@/pages/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: () => import('../pages/DashboardView.vue'),
			meta: { requiresAuth: true },
		},
		{ path: '/dashboard', redirect: '/', meta: { requiresAuth: true } },
		{ path: '/login', component: () => import('../pages/LoginView.vue') },
		{
			path: '/tasks',
			component: () => import('../pages/TasksView.vue'),
			meta: { requiresAuth: true },
		},
		{
			path: '/tasks/:id',
			component: () => import('../pages/TaskDetailsView.vue'),
			props: true,
			meta: { requiresAuth: true },
		},
		{
			path: '/settings',
			component: () => import('../pages/SettingsView.vue'),
			meta: { requiresAuth: true },
			children: [
				{ path: '', redirect: '/settings/profile' },
				{
					path: 'profile',
					component: () => import('../pages/ProfileView.vue'),
					meta: { requiresAuth: true },
				},
				{
					path: 'security',
					component: () => import('../pages/SecurityView.vue'),
					meta: { requiresAuth: true },
				},
			],
		},
		{ path: '/404', name: 'Page Not Found', component: NotFoundView },
		{ path: '/:pathMatch(.*)*', redirect: '/404' },
	],
	linkActiveClass: 'router-link--intermediate',
	linkExactActiveClass: 'router-link--active',
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !isLoggenIn.value) {
		next('/login');
	} else {
		next();
	}
});

export default router;
