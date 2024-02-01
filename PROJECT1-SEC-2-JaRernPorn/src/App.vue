<script setup></script>

<template>
  <div id="body" class="bg-main-bgColor w-full h-screen p-5 relative">
    <div
      class="border-double border-8 border-title box-border w-full h-full relative text-center flex justify-center items-center"
    >
      <img
        class="w-16 absolute right-12 top-12"
        src="./assets/settingButton.png"
        alt="Setting button"
      />
      <div class="text-center relative translate-middle text-white">
        <img
          src="./assets/complimentFrame.png"
          alt="Picture that said Excellent!"
          class="mx-auto my-60"
        />
        <div
          class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          <h1
            class="uppercase text-4xl font-alkatra md:text-compliment-size sm:text-6xl xl:text-compliment-size"
          >
            excellent!
          </h1>
          <p
            class="text-2xl font-outfit md:text-resultButton-size sm:text-4xl xl:text-resultButton-size"
          >
            Let’s See The Result
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
