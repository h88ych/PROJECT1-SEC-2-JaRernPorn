<script setup></script>

<template>
  <div id="body" class="bg-main-bgColor w-full h-screen p-5 relative">
    <div
      class="w-full h-full relative text-center flex justify-center items-center"
    >
      <div class="text-center relative translate-middle text-white">
        <img
          src="./assets/wrongPopup/Frame.png"
          alt="Frame chinese theme"
          class="mx-auto my-60"
        />
        <div
          class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex-col space-y-14"
        >
          <h1
            class="uppercase font-outfit mt-10 font-semibold text-wrongPopup-size"
          >
            wrong
          </h1>
          <p
            class="uppercase text-2xl font-outfit md:text-resultButton-size sm:text-4xl xl:text-resultButton-size"
          >
            The answer is<br />
            <span class="text-answer-fontColor">西瓜 (xīguā)</span>
          </p>
          <div class="border-b w-[770px] mx-auto relative -top-[15px]"></div>
          <button
            class="border border-10 w-60 h-24 text-[50px] rounded-full bg-white text-black font-semibold relative -top-[22px] shadow-md shadow-zinc-600"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
