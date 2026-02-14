import DashboardView from '@/pages/DashboardView.vue';
import NotFoundView from '@/pages/NotFoundView.vue';
import ProfileView from '@/pages/ProfileView.vue';
import SecurityView from '@/pages/SecurityView.vue';
import SettingsView from '@/pages/SettingsView.vue';
import TaskDetailsView from '@/pages/TaskDetailsView.vue';
import TasksView from '@/pages/TasksView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:pathMatch(.*)*', name: 'Page Not Found', component: NotFoundView },
		{ path: '/', component: DashboardView },
		{ path: '/dashboard', redirect: '/' },
		{ path: '/tasks', component: TasksView },
		{ path: '/tasks/:id', component: TaskDetailsView },
		{
			path: '/settings',
			component: SettingsView,
			children: [
				{ path: 'profile', component: ProfileView },
				{ path: 'security', component: SecurityView },
			],
		},
	],
	linkActiveClass: 'router-link--intermediate',
	linkExactActiveClass: 'router-link--active',
});

export default router;
