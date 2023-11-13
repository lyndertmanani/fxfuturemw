<template>
     <div class="z-0 lg:h-[650px] h-[550px] overflow-hidden text-white bg-gray-950 relative">
       <!-- Background Image -->
       <img src="../assets/images/Hero-Transfers.png" alt="" class="hidden w-full h-full object-cover object-center absolute lg:flex" />
       <img src="../assets/images/hero.png" alt="" class="flex w-full h-full object-cover object-center absolute lg:hidden" />
     <!-- effect-layer -->
     <div class="bg-gradient-to-b from-transparent to-gray-950  w-full h-full absolute top-0 left-0 z-0"></div>
       <div class="mt-32 p-8 lg:p-32 text-6xl lg:text-8xl tracking-tighter font-bold relative">
         <h1 class="mb-4">FxfutureMw </h1>
         <h1 class="mt-[-10px] mb-4">Community </h1>
         <p class="lg:text-lg tracking-tight font-normal text-xl text-gray-400 mt-[8px]">Supported by a network of early advocates, traders, and experts </p>
         <div class="pt-[10px] lg:pt-[0px] text-6xl">
           <NuxtLink to="/" class="gradient-border text-3xl text-white tracking-normal rounded-full py-2 px-4 sm:py-3 sm:px-2 cursor-pointer">
             Telegram
           </NuxtLink> 
         </div>
        
       </div>
     </div>
     
   </template>
  
   <style scoped>
.spotlight{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border{background-color:rgba(255, 255, 255, 0.3)}.gradient-border::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border{background-color:rgba(20, 20, 20, 0.3)}.gradient-border::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border:hover::before{background-position:-50% 0;opacity:1}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer{cursor:pointer}.flex{display:-webkit-box;display:-ms-flexbox;display:-webkit-flex;display:flex}.grid{display:-ms-grid;display:grid}.place-content-center{place-content:center}.items-center{-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center}.font-sans{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}.font-medium{font-weight:500}.font-light{font-weight:300}.text-8xl{font-size:6rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.leading-tight{line-height:1.25}.mb-8{margin-bottom:2rem}.mb-16{margin-bottom:4rem}.max-w-520px{max-width:520px}.min-h-screen{min-height:100vh}.overflow-hidden{overflow:hidden}.px-8{padding-left:2rem;padding-right:2rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.fixed{position:fixed}.left-0{left:0}.right-0{right:0}.text-center{text-align:center}.text-black{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full{width:100%}.z-10{z-index:10}.z-20{z-index:20}@media (min-width: 640px){.sm\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\:text-xl{font-size:1.25rem;line-height:1.75rem}.sm\:text-10xl{font-size:10rem;line-height:1}.sm\:px-0{padding-left:0;padding-right:0}.sm\:py-3{padding-top:.75rem;padding-bottom:.75rem}.sm\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\:bg-black{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\:text-white{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}
 
   
   /* Additional styles for images */
   img {
     width: 100%;
     height: 100%;
     position: absolute;
     top: 0;
     left: 0;
     object-fit: cover;
     object-position: center;
   }
   </style>
   