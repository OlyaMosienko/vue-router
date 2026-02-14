import { ref } from 'vue';

export const isLoggenIn = ref(false);

export const login = () => (isLoggenIn.value = true);
export const logout = () => (isLoggenIn.value = false);
