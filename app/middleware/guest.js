import { useStorage } from '@vueuse/core'
export default defineNuxtRouteMiddleware(() => {
    
    const isAuth = useStorage('isAuth', null)
    // console.log(isAuth.value);
    if (isAuth.value == 1) {
        return navigateTo('/')
    }
})