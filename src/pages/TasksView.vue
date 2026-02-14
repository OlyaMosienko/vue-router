<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
	<div>
		<h1>Список задач</h1>
		<ul class="task-list">
			<li class="task-item">
				<RouterLink to="/tasks/1" class="task-link">Задача 1</RouterLink>
			</li>
			<li class="task-item">
				<RouterLink to="/tasks/2" class="task-link">Задача 2</RouterLink>
			</li>
		</ul>
	</div>
</template>
