<script setup></script>

<template>
  <div>
    <!-- Word List Page -->
    <div class="w-full h-screen bg-main-bgColor pt-4 flex justify-center">
      <img
        class="size-44 absolute left-5 sm:size-32"
        src="./assets/result-page/result-top.png"
        alt="result-top"
      />
      <img
        class="size-44 absolute right-5 bottom-3 sm:size-32"
        src="./assets/result-page/result-bottom.png"
        alt="result-bottom"
      />

      <div class="flex flex-col justify-center gap-9 sm:gap-3">
        <div class="flex flex-col">
          <header
            class="font-Alkarta font-semibold text-title text-8xl text-center sm:text-6xl"
          >
            Word List
          </header>
          <div
            class="font-Outfit font-semibold text-lg text-center tracking-title sm:text-md"
          >
            You did great! Here are the result.
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-10 sm:gap-5">
          <section class="flex flex-col">
            <div
              class="bg-white shadow-lg font-Outfit font-semibold text-xl p-5 rounded-3xl w-80 h-100 sm:text-lg sm:w-72 sm:h-60 sm:overflow-auto"
            >
              Your Answer:
              <div class="border-b-2 border-black"></div>
              <div
                class="list font-NotoSansSC font-semibold text-xl tracking-title leading-list sm:text-lg sm:leading-listMobile"
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
              class="bg-white shadow-lg font-Outfit text-xl font-semibold p-5 rounded-3xl w-80 h-100 sm:w-72 sm:h-60 overflow-auto sm:text-lg"
            >
              Answer:
              <div class="border-b-2 border-black"></div>
              <div
                class="list font-NotoSansSC font-semibold text-xl tracking-title leading-list sm:text-lg sm:leading-listMobile"
              >
                1. 苹果 píngguǒ <br />
                2. 西瓜 (xīguā)<br />
                3. 草莓 (cǎoméi)<br />
                4. 菠萝 (bōluó) <br />
                5. 芒果 (mángguǒ)<br />
                6. 香蕉 (xiāngjiāo)<br />
                7. 葡萄 (pú táo)
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-wrap justify-center pt-8 sm:pt-5">
          <div class="flex justify-center">
            <div
              class="flex bg-title rounded-lg font-Outfit font-semibold text-xl p-4 text-white uppercase w-40 text-center hover:bg-button-bgColor mx-5 sm:text-lg sm:p-3 sm:w-32"
            >
              Play Again
            </div>
          </div>
          <div
            class="bg-title rounded-lg font-Outfit font-semibold text-xl p-4 text-white uppercase w-40 text-center hover:bg-button-bgColor mx-5 sm:text-lg sm:p-3 sm:w-32"
          >
            Home
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
