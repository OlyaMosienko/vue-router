import NotFoundView from '@/pages/NotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: () => import('../pages/DashboardView.vue') },
		{ path: '/dashboard', redirect: '/' },
		{ path: '/tasks', component: () => import('../pages/TasksView.vue') },
		{
			path: '/tasks/:id',
			component: () => import('../pages/TaskDetailsView.vue'),
			props: true,
		},
		{
			path: '/settings',
			component: () => import('../pages/SettingsView.vue'),
			children: [
				{ path: '', redirect: '/settings/profile' },
				{ path: 'profile', component: () => import('../pages/ProfileView.vue') },
				{
					path: 'security',
					component: () => import('../pages/SecurityView.vue'),
				},
			],
		},
		{ path: '/404', name: 'Page Not Found', component: NotFoundView },
		{ path: '/:pathMatch(.*)*', redirect: '/404' },
	],
	linkActiveClass: 'router-link--intermediate',
	linkExactActiveClass: 'router-link--active',
});

export default router;
