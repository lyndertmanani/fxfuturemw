<template>
    <div class="relative w-full h-screen font-normal ">
      <!-- Background Image -->
      <img src="../../assets/images/hero.png" alt="" class="w-full h-full object-cover object-center absolute" />
  
      <!-- Login Form -->
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form action="./data.blog " method="get" class="w-full max-w-sm text-white">
          <div class="flex items-center justify-center mb-4">
            <img src="../../assets/icons/svg-logo-white-w.svg" class="h-14" alt="PashoyoMw_logo">
          </div>
          <div class="flex justify-center mt-3 px-5">
            <div class="inline ">
              <input type="text" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="Username / email" />
              <input type="password" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75  duration-300 " placeholder="Password" />
            </div>
          </div>
          <div class="flex justify-center mt-1">
            <input type="submit" class="w-3/4 px-4 py-1.5 mb-2  border-none outline-none rounded-md cursor-pointer bg-gray-500 text-white hover:text-white hover:bg-opacity-50  duration-500" />
          </div>
          <div class="flex justify-center mt-1">
            <div class="inline-flex text-gray-700">
              <p class="mr-2 hover:underline "><NuxtLink to="./signup">Sign up</NuxtLink> |</p>
              <p class="mr-2 hover:underline"><a class="mr-2" href="#">forgot Password ?</a>|</p>
              <p class="mr-2 hover:underline"><a class="mr-2" href="#">help</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Log',
  }
  </script>
  