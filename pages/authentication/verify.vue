<template>
  <div class="relative w-full h-screen   ">
    <!-- Background Image -->
    <img src="../../assets/images/hero.png" alt="" class="w-full h-full object-cover object-center absolute" />

       <!-- login-starts-here -->
       <div class="absolute top-0 left-0 w-full h-full flex justify-center items-center">
       <form action="" method="post" class="w-full  max-w-sm  px-3 py-3 rounded" >
         <div class="flex items-center justify-center mb-4">
           <img src="../../assets/icons/svg-logo-white-w.svg" class="h-16" alt="PashoyoMw_logo">
         </div>
         <!-- instruction -->
         <div >
           <p class="mx-14 p-1 tracking-tight  text-xss align-middle text-gray-700  rounded-md">Please enter the 4-digit verification code we sent via SMS:</p>
          </div>
          <!-- input-here -->
         <div class="flex justify-center my-3 text-white ">
           <div class="inline-flex ">
             <input  class="w-12 px-4 py-3 mr-2  border outline-none rounded-xl border-cyan-600 bg-gray-950 bg-opacity-40 in-range:border-cyan-300 out-of-range:border-red-600"  maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="0" />
             <input  class="w-12 px-4 py-3 mr-2  border outline-none rounded-xl border-cyan-600 bg-gray-950 bg-opacity-40 in-range:border-cyan-300 out-of-range:border-red-600"  maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="0" />
             <input  class="w-12 px-4 py-3 mr-2  border outline-none rounded-xl border-cyan-600 bg-gray-950 bg-opacity-40 in-range:border-cyan-300 out-of-range:border-red-600"  maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="0" />
             <input  class="w-12 px-4 py-3 mr-2  border outline-none rounded-xl border-cyan-600 bg-gray-950 bg-opacity-40 in-range:border-cyan-300 out-of-range:border-red-600"  maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="0" />
          </div>
         </div>
<!-- button -->
         <div class="flex justify-center my-1">              
           <button type="submit" class="w-3/4 px-4 py-1.5 mb-2 border-none outline-none rounded-md cursor-pointer bg-gray-500 text-white hover:text-white hover:bg-opacity-50  duration-300" name="verification">verify</button> 
           </div>
           <div class="flex justify-center mt-1">    
           <div class="inline">
              <p class="text-gray-700">Didn't receive the code?</p>
              <p class="text-cyan-500 ml-5 hover:underline"> <a  class="mr-2" href="http://#">Send code again</a></p>
             </div>
           </div>
       </form>
     </div>
 
 </div>
   </template>