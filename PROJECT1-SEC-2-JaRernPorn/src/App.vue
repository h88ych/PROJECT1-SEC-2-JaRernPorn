<script setup></script>

<template>
  <div id="body" class="w-full h-screen p-5 relative">
    <div
      class="w-full h-full relative text-center flex justify-center items-center"
    >
      <div class="text-center relative translate-middle text-white">
        <img
          src="./assets/wrongPopup/Frame.png"
          alt="Frame chinese theme"
          class="w-10/12 mx-auto"
        />
        <div
          class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex-col space-y-14"
        >
          <div
            class="capitalize text-brownColor text-xl font-alkatra font-semibold tracking-wide relative right-7 top-8 sm:right-[50px] sm:text-4xl md:text-5xl lg:text-6xl lg:right-[60px]"
          >
            The answer is<br />
            <div
              class="text-answer-fontColor font-NotoSansSC font-medium lowercase text-sm relative sm:text-2xl md:text-4xl"
            >
              西瓜 (xīguā)
            </div>
          </div>
          <button
            class="text-sm text-brownColor font-semibold font-alkatra tracking-wider relative right-7 bottom-3 hover:text-answer-fontColor sm:right-[50px] sm:top-[18px] sm:text-2xl md:text-3xl lg:right-[60px]"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
