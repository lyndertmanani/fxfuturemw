<template>
  <header>
  <nav class="z-50 w-full fixed  overflow-hidden bg-opacity-20 backdrop-filter backdrop-blur-xl border-b border-transparent text-sm py-3 sm:py-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 ">
    <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="~/assets/icons/svg-logo-white-w.svg" class="h-8" alt="Main-logo" />
        <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> -->
    </NuxtLink>
    <div class="flex md:order-5 space-x-3 md:space-x-0 rtl:space-x-reverse ">
      <NuxtLink   to="/authentication/login" class="flex items-center gap-x-2 font-medium duration-500  text-gray-100 hover:text-blue-600 sm:border-l sm:border-gray-300 sm:my-6 sm:pl-6   ">
              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>
              Log in
            </NuxtLink>
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none dark:hover:bg-gray-700" aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
    </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      <ul class="flex flex-col font-medium p-5 md:p-0 mt-4  text-slate-100 rounded-lg  duration-500 space-y-4 lg:space-y-0  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
        <li>
          <NuxtLink  to="/" class="font-medium sm:py-6 hover:text-gray-500 duration-500"  > Home</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink  to="/private" class="font-medium  sm:py-6  hover:text-gray-500 duration-500" >Private </NuxtLink>    
          </li> -->
        <li>
          <NuxtLink  to="/Program" class="font-medium  sm:py-6  hover:text-gray-500 duration-500" >  Program </NuxtLink>
              </li>
        <li>
          <NuxtLink  to="/about" class="font-medium  sm:py-6  hover:text-gray-500 duration-500" > About </NuxtLink>      </li>
      </ul>
    </div>
    </div>
    <!-- <img src="../assets/images/hero.png" alt="" class="  w-full h-full object-cover object-center absolute " />   -->
  </nav>
  </header>
    </template>
  <script setup>
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  
  // initialize components based on data attribute selectors
  onMounted(() => {
      initFlowbite();
  })
  // export default {
  //   name: 'Navbar',
  // };
  </script>
    
   
   
  