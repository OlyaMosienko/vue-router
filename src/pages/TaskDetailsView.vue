<script setup>
defineProps({
	id: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div>
		<h1>Задача {{ id }}</h1>
		<p>Детали задачи #{{ id }}</p>
	</div>
</template>
