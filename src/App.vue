<script setup>
import { Transition } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { isLoggenIn, logout } from './auth';

const router = useRouter();

const onUserLogout = () => {
	logout();
	router.push('/login');
};
</script>

<template>
	<div class="wrapper">
		<nav class="navigation">
			<div class="navigation-left">
				<RouterLink to="/">Dashboard</RouterLink>
				<RouterLink to="/tasks">Tasks</RouterLink>
				<RouterLink to="/settings">Settings</RouterLink>
			</div>
			<div class="navigation-right">
				<RouterLink v-if="!isLoggenIn" to="/login" class="">Login</RouterLink>
				<button v-else class="btn-logout" @click="onUserLogout">Logout</button>
			</div>
		</nav>
		<main class="container">
			<RouterView v-slot="{ Component }">
				<Transition name="fade" mode="out-in">
					<Component :is="Component" />
				</Transition>
			</RouterView>
		</main>
	</div>
</template>
