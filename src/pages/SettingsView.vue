<script setup>
import { Transition } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div>
		<h1>Настройки</h1>
		<div class="settings-tabs">
			<RouterLink to="/settings/profile" class="settings-tab">Профиль</RouterLink>
			<RouterLink to="/settings/security" class="settings-tab"
				>Безопасность</RouterLink
			>
		</div>
		<div class="settings-panel">
			<RouterView v-slot="{ Component }">
				<Transition name="fade">
					<Component :is="Component" />
				</Transition>
			</RouterView>
		</div>
	</div>
</template>
