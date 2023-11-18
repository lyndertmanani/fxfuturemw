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
 <NavigationBar v-if="$route.path !== '/authentication/login' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify'  && $route.path !== '/private'" />

 <div class="pashoyo_font">
   <NuxtLayout>
    <NuxtPage />
   </NuxtLayout>
 </div>
 
 <footBar v-if="$route.path !== '/authentication/login' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify' && $route.path !== '/private'"/>
</template>
 
<style>
.pashoyo_font{
  font-family:'poppins',san serif;
  font-weight: 200;
}
</style>