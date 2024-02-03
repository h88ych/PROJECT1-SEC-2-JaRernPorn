<script setup></script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="relative">
      <div
        class="rounded-3xl bg-white bg-opacity-95 w-[200px] h-[403px] border border-1 border-black sm:w-[300px] md:w-[450px] md:h-[403px]"
      >
        <div class="flex-col p-5">
          <img
            src="./assets/setting-features/cancel.png"
            alt="setting button"
            class="absolute right-4 top-5 w-5 sm:w-8"
          />

          <div
            class="text-center text-2xl font-alkatra text-title font-semibold sm:text-6xl md:text-settingButton-size"
            style="text-shadow: 2px 2px 4px rgba(18, 17, 17, 0.5)"
          >
            Setting
          </div>

          <div class="flex flex-col items-center gap-4 mt-4">
            <img
              src="./assets/setting-features/resumeButton.png"
              alt="resume button"
              class="resume button"
            />
            <img
              src="./assets/setting-features/restartButton.png"
              alt="restart button"
              class="mb-2"
            />
            <img
              src="./assets/setting-features/homebutton.png"
              alt="home button"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
