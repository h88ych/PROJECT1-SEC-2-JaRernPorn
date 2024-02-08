<script setup>
import { ref } from 'vue'

const settingButton = ref(false)
const openSetting = () => {
  settingButton.value = true
}
const closeSetting = () => {
  settingButton.value = false
}
</script>

<template>
  <section class="playGame">
    <div id="app" class="mx-auto max-w-screen-lg">
      <div class="-z-10 absolute">
        <img
          src="./assets/play-game/background.png"
          alt="background"
          class="h-screen bg-cover bg-center"
        />
      </div>
      <section
        id="settingButton"
        v-if="settingButton"
        class="fixed inset-0 z-50"
      >
        <!-- class="w-full h-screen flex justify-center items-center backdrop-blur-[2px]" -->

        <div
          class="w-full h-screen flex justify-center items-center bg-black bg-opacity-15"
        >
          <div class="relative">
            <div
              class="rounded-3xl bg-white bg-opacity-100 w-[200px] h-[403px] border border-1 border-black sm:w-[300px] md:w-[450px] md:h-[403px]"
            >
              <div class="flex-col p-5">
                <img
                  src="./assets/setting-features/cancel.png"
                  alt="cancel button"
                  class="absolute right-4 top-5 w-5 sm:w-8 cursor-pointer"
                  @click="closeSetting"
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
      </section>

      <div class="header flex justify-between items-center py-4">
        <div class="play ml-4 absolute left-10 top-5">
          <h1 class="text-title text-5xl font-outfit font-bold">
            Category: fruits
          </h1>
        </div>
        <div
          class="setting mr-4 absolute right-10 top-6 hover:scale-125 cursor-pointer"
        >
          <img
            src="./assets/play-game/setting.png"
            alt="setting-img"
            class="w-12 hover:scale-110"
            @click="openSetting"
          />
        </div>
      </div>

      <div id="bg-image" class="flex justify-center my-12">
        <img
          class="w-96 my-8"
          src="./assets/play-game/bg-image.png"
          alt="bg-image"
        />
        <img
          class="absolute font-outfit mb-4 mx-8 my-20 size-48"
          src="./assets/play-game/fruits/apple-01.png"
          alt="Apple"
        />
      </div>

      <div class="grid grid-cols-2 gap-4 justify-center">
        <button
          class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md"
        >
          Apple
        </button>
        <button
          class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md"
        >
          Apple
        </button>
        <button
          class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md"
        >
          Apple
        </button>
        <button
          class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md"
        >
          Apple
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
