<script setup>
import { login } from '@/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const onUserLogin = () => {
	login();
	router.push('/');
};
</script>

<template>
	<div class="login">
		<h1>Вход</h1>
		<button @click="onUserLogin" class="btn-login">Войти как пользователь</button>
	</div>
</template>
