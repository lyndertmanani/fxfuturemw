<template>
    <div class="relative w-full h-screen font-normal">
      <!-- Background Image -->
      <img src="../../assets/images/hero.png" alt="" class="w-full h-full object-cover object-center absolute" />
      <!-- effect-layer -->
     <!-- <div class="bg-gradient-to-r from-transparent to-gray-950   w-full h-full absolute top-0 left-0 z-0"></div>
     <div class="bg-gradient-to-l from-transparent to-gray-950   w-full h-full absolute top-0 left-0 z-0"></div>
     <div class="bg-gradient-to-b from-transparent to-gray-950   w-full h-full absolute top-0 left-0 z-0"></div> -->
      <!-- Login Form -->
      <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form action="./verify " method="get" class="w-full max-w-sm text-white">
          <div class="flex items-center justify-center mb-4">
            <img src="../../assets/icons/svg-logo-white-w.svg" class="h-14" alt="PashoyoMw_logo">
          </div>
          <div class="flex justify-center mt-3 px-3">
            <div class="inline ">
                <div class="grid grid-cols-2 gap-x-2" > 
              <input type="text" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder=" Firstname" />
              <input type="text" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75  duration-300 " placeholder="Surname" />
                </div>
              <input type="text" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="Username" />
              <input type="email" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="email" />
              <input type="tel" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="Mobile" />
              <input  v-model="password" :toggle="true"  @score="showScore"  @feedback="showFeedback" type="password" id="password" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="Password" /> 
              <input type="password" class="w-full px-4 py-2 mb-2 border-none outline-none rounded-md bg-gray-400 bg-opacity-40 focus:bg-gray-500 hover:bg-opacity-90 delay-75 duration-300" placeholder="Confirm Password" />
            </div>
          </div>
          <div class="flex justify-center mt-1">
            <input type="submit" value="Sign up" class="w-3/4 px-4 py-1.5 mb-2 border-none outline-none rounded-md cursor-pointerrounded-md cursor-pointer bg-gray-500 text-white hover:text-white hover:bg-opacity-50  duration-300" />
          </div>
          <div class="flex justify-center mt-1 text-slate-500">
            <div class="inline-flex">
              <p class="mr-2 hover:underline  "><NuxtLink to="./login">Login</NuxtLink> |</p>
              <p class="mr-2 hover:underline"><a class="mr-2" href="#">forgot Password ?</a>|</p>
              <p class="mr-2 hover:underline"><a class="mr-2" href="#">help</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
 
 import Password from 'vue-password-strength-meter'
  export default {
    components: { Password },
    data: () => ({
      password: null
    }),
    methods: {
      showFeedback ({suggestions, warning}) {
        console.log('🙏', suggestions)
        console.log('⚠', warning)
      },
      showScore (score) {
        console.log('💯', score)
      }
    }
  }
//   export default {
//     name: 'Log',
//   }
  
 

  </script>
  <style>
.po-password-strength-bar {
    border-radius: 2px;
    transition: all 0.2s linear;
    height: 5px;
    margin-top: 8px;
}

.po-password-strength-bar.risky {
    background-color: #f95e68;
    width: 10%;
}

.po-password-strength-bar.guessable {
    background-color: #fb964d;
    width: 32.5%;
}

.po-password-strength-bar.weak {
    background-color: #fdd244;
    width: 55%;
}

.po-password-strength-bar.safe {
    background-color: #b0dc53;
    width: 77.5%;
}

.po-password-strength-bar.secure {
    background-color: #35cc62;
    width: 100%;
}
</style>