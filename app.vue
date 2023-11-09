 
<script>
import NavigationBar from '~/components/nav_v1.vue';
import footBar from '~/components/footer.vue';

export default {
  name: 'Navbar',
  components: {
    NavigationBar,
    footBar, // Corrected placement
  },
};
</script>


<template>
 <NavigationBar v-if="$route.path !== '/authentication/login' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify'" />

 <div>
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
 </div>
 
 <footBar v-if="$route.path !== '/authentication/login' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify'"/>
</template>
 
