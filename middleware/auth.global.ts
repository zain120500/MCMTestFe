import { storeToRefs } from "pinia";

export default defineNuxtRouteMiddleware((to, from) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token');
      console.log('midle');
      console.log(token);
      
    if (token.value) {
        authenticated.value = true;
    }

    // if (to.path !== '/') {
    //     return navigateTo('/')
    //   }
    // if (token.value && to?.name === 'login') {
    //     return navigateTo('/dashboard');
    // }

    // if (!token.value && to?.name !== 'login') {
    //     abortNavigation();
    //     return navigateTo('/');
    // }
})