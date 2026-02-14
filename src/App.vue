<script setup>
import { Transition } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="wrapper">
		<nav class="navigation">
			<div class="navigation-left">
				<RouterLink to="/">Dashboard</RouterLink>
				<RouterLink to="/tasks">Tasks</RouterLink>
				<RouterLink to="/settings/profile">Settings</RouterLink>
			</div>
		</nav>
		<main class="container">
			<RouterView v-slot="{ Component }">
				<Transition name="fade">
					<Component :is="Component" />
				</Transition>
			</RouterView>
		</main>
	</div>
</template>
