<script setup></script>

<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="relative max-w-[80%]">
      <div
        class="rounded-3xl bg-white bg-opacity-95 w-[450px] h-[403px] border border-1 border-black"
      >
        <div class="flex-col p-5">
          <img
            src="./assets/cancel.png"
            alt="setting button"
            class="absolute right-4 top-5 w-8"
          />
          <div
            class="text-center text-settingButton-size font-alkatra text-title font-semibold"
            style="text-shadow: 2px 2px 4px rgba(18, 17, 17, 0.5)"
          >
            Setting
          </div>

          <div class="flex flex-col items-center gap-1">
            <img
              src="./assets/resumeButton.png"
              alt="resume button"
              class="resume button mt-1"
            />
            <img
              src="./assets/restartButton.png"
              alt="restart button"
              class="mb-2"
            />
            <img src="./assets/homebutton.png" alt="home button" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
