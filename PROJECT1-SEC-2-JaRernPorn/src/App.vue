<script setup>

</script>
 
<template>
  <div class="h-screen bg-main-bgColor p-5">
    <div
      class="border-double border-8 border-title box-border h-full w-full flex flex-col"
    >
      <img
        class="w-16 absolute right-12 top-12"
        src="./assets/home-page/setting.png"
        alt=""
      />
      <div class="logo-title text-center text-title text-title-size pt-title">
        <div class="font-alkatra font-medium leading-title">HELLO !</div>
        <div class="font-alkatra font-medium leading-title">CHINESE</div>
      </div>
      <div class="sub-title text-center">
        <p class="font-outfit tracking-sub-title text-sub-title-size">
          LET'S PRACTICE YOUR CHINESE VOCABULARY
        </p>
      </div>

      <div id="home-page-button">
        <div id="play-button" class="flex justify-center pt-14">
          <img
            class="w-72 relative"
            src="./assets/home-page/red-bible-button.png"
            alt="play-button"
          />
          <p class="absolute font-outfit font-normal text-white text-4xl p-5">
            PLAY
          </p>
        </div>
        <div id="HTP-button" class="flex justify-center pt-6">
          <img
            class="w-72 relative"
            src="./assets/home-page/red-bible-button.png"
            alt="HTP-button"
          />
          <p class="absolute font-outfit font-normal text-white text-2xl p-6">
            HOW TO PLAY
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

 
<style scoped>

</style>