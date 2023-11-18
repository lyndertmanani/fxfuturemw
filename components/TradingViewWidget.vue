<!-- TradingViewWidget.vue -->
<template>
   <section class="fixed w-full z-20  bottom-[-35px] ">
    <div class="tradingview-widget-container">
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  export default {
    mounted() {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbols: [
          { proName: "FOREXCOM:NSXUSD", title: "US 100" },
          { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
          { description: "GBP to USD", proName: "OANDA:GBPUSD" },
        ],
        showSymbolLogo: false,
        colorTheme: "light",
        isTransparent: false,
        displayMode: "adaptive",
        locale: "en",
      });
  
      this.$el.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  