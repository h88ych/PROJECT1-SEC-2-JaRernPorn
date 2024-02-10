<script setup>
import { reactive } from 'vue'
import images from '../data/categories';

//all page will add to this
const allPage = reactive({
  homePage: false,
  categoryPage: '',
  resultPage: ''
})

//play button click event
const playButton = () => {
  allPage.homePage = false
  allPage.categoryPage = true
  allPage.resultPage = false
}

//backToHome button click event
const backToHome = () => {
  allPage.homePage = true
  allPage.categoryPage = false
  allPage.resultPage = false
}
</script>

<template>
  <!-- Word List Page -->
  <section class="resultPage" v-if="allPage.resultPage == false">
    <div class="w-full h-screen bg-main-bgColor pt-4 flex justify-center">
      <img
        class="size-28 absolute left-5 md:size-36"
        src="./assets/result-page/result-top.png"
        alt="result-deco-top"
      />
      <div></div>
      <img
        class="size-28 absolute right-5 bottom-3 md:size-36"
        src="./assets/result-page/result-bottom.png"
        alt="result-deco-bottom"
      />

      <div dir="rtl">
        <img
          class="size-14 flex hover:scale-110 absolute top-3 right-7 start-0"
          src="./assets/result-page/home button.png"
          alt="home"
          @click="backToHome"
        />
      </div>

      <div class="flex flex-col justify-center gap-4 md:gap-10">
        <div class="flex flex-col">
          <header
            class="font-Alkarta font-semibold text-title text-7xl text-center md:text-8xl"
          >
            Word List
          </header>

          <div
            class="font-Outfit font-semibold text-md text-center tracking-subtitle sm:text-lg"
          >
            You did great! Here are the result.
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-5">
          <section class="flex flex-col">
            <div
              class="bg-white shadow-lg font-Outfit font-medium text-lg p-5 rounded-3xl w-72 h-60 overflow-auto md:text-xl md:w-80 md:h-96 md:overflow-visible"
            >
              Your Answer:
              <div class="border-b-2 border-black"></div>
              <div
                class="font-NotoSansSC font-medium text-lg tracking-title leading-listMobile md:text-xl md:leading-list"
              >
                1. 苹果 píngguǒ <br />
                2. 西瓜 (xīguā)<br />
                3. 草莓 (cǎoméi)<br />
                <span class="text-title">4. 木瓜 (mùguā)</span> <br />
                5. 芒果 (mángguǒ)<br />
                6. 香蕉 (xiāngjiāo)<br />
                7. 葡萄 (pú táo)
              </div>
            </div>
          </section>

          <section class="flex flex-col">
            <div
              class="bg-white shadow-lg font-Outfit text-lg font-medium p-5 rounded-3xl w-72 h-60 overflow-auto md:text-xl md:w-80 md:h-96 md:overflow-visible"
            >
              Answer:
              <div class="border-b-2 border-black"></div>
              <div
                class="font-NotoSansSC font-medium text-lg tracking-title leading-listMobile md:text-xl md:leading-list"
              >
                hi
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          <div class="flex justify-center">
            <div
              class="flex justify-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
            >
              Play Again
            </div>
          </div>
          <div
            class="flex justify-center bg-title rounded-lg font-Outfit font-semibold text-lg p-4 text-white uppercase text-center hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
          >
            Main Menu
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
