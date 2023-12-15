 <script>
import NavigationBar from '~/components/private/nav_v2.vue';
import footBar from '~/components/private/endbar.vue';

export default {
  name: 'Navbar',
  components: {
    NavigationBar,
    footBar, // Corrected placement
  },
};
</script>


<template>
 <NavigationBar v-if="$route.path !== '/authentication/' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify'  && $route.path !== '/private'" />

 <div class="pashoyo_font">
   <NuxtLayout>
    <NuxtPage/>
   </NuxtLayout>
 </div>
 
 <footBar v-if="$route.path !== '/authentication/' && $route.path !== '/authentication/signup' && $route.path !== '/authentication/verify' && $route.path !== '/private'"/>
</template>
 
<style>
.pashoyo_font{
  font-family:'poppins',san serif;
  font-weight: 200;
}
</style>