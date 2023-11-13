<template>  
<nav_bar/>
 <div class="bg-gray-950">
     <div class="flex items-center justify-center bg-gray-950 mb-4   ">
        <img src="../assets/images/hero.png" alt="" class="lg:hidden flex  w-full h-full object-cover object-center absolute " />
        <img src="../assets/images/hero-x.png" alt="" class="  w-full h-full object-cover object-center absolute " />
    <section class="pt-20 lg:pt-0">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-36 z-10 relative  ">
            <NuxtLink to="authentication/login" class=" justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-800 bg-gray-700  rounded-full  transition-colors duration-500  inline-flex hover:bg-gray-300">
                <span class="text-xs bg-amber-300 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Signup and Login for more experience</span> 
                <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                </NuxtLink>  
            <h1 class="mb-4 text-6xl font-bold tracking-tight leading-none text-amber-300  md:text-5xl lg:text-8xl  ">Private Forex<br> Trading Lessons </h1>
            <p class="mb-8 text-sm lg:text-center font-normal text-gray-400 lg:text-sm sm:text-xs sm:px-20 lg:px-48  "> We are a registered online forex trading consultancy dedicated to providing 
    education and guidance in the ever-evolving world of finance. Our mission is to empower individuals 
    with the knowledge and skills   .</p>
        </div> 
    </section>
      </div>
      <div class=" px-5 lg:px-20 font-[poppins]">
        <prices/>
    </div>
     
</div>
<communityPort/>
<footerp/> 
</template>
<script>
import communityPort from '~/components/community'
import nav_bar from '~/components/private/nav_v2.vue'
import prices from '~/components/private/pricing.vue'
import footerp from '~/components/private/endbar.vue'
export default {
  components: { 
    communityPort,
    nav_bar,
    prices,
    footerp,
 
  },
};
</script>

 