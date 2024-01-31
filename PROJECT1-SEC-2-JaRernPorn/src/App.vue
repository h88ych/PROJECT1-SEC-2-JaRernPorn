<script setup></script>

<template>
  <div class="h-screen bg-main-bgColor p-5">
    <div class="border-double border-8 border-title box-border h-full w-full">
      <div
        class="logo-title text-center text-title pt-title sm:text-title-size mobile:text-mobile-title-size"
      >
        <div class="font-alkatra font-medium leading-title">HELLO !</div>
        <div class="font-alkatra font-medium leading-title">CHINESE</div>
      </div>
      <div class="text-black text-center">
        <p class="font-outfit tracking-sub-title sm:text-sub-title-size">
          LET'S PRACTICE YOUR CHINESE VOCABULARY
        </p>
      </div>

      <div id="home-page-button">
        <div id="play-button" class="flex justify-center pt-12">
          <img
            class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out"
            src="./assets/home-page/play-button.svg"
            alt="play-button"
          />
        </div>
        <div id="HTP-button" class="flex justify-center pt-6">
          <img
            class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out"
            src="./assets/home-page/HTP-button.svg"
            alt="HTP-button"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
