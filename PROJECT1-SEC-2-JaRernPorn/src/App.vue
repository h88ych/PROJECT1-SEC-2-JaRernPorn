<script setup></script>
<template>
  <div class="flex justify-center items-center h-screen">
    <div
      class="overflow-y-scroll h-4/5 bg-white rounded-2xl drop-shadow-2xl relative md:w-5/12 sm:w-6/12 mobile:w-11/12"
    >
      <div class="sticky top-3">
        <img
          class="w-6 sticky left-3"
          title="close"
          src="./assets/HowToPlay-page/close-vector.png"
          alt="close-vector"
        />
      </div>
      <div class="flex justify-center items-center">
        <div class="w-3/4">
          <h1
            class="text-4xl font-bold text-center mb-6 font-alkatra text-title"
          >
            HOW TO PLAY
          </h1>
          <div class="content">
            <div class="HTP-1">
              <p class="text-lg mb-4 font-outfit">1. Select the category.</p>
              <img
                class="mb-9"
                src="./assets/HowToPlay-page/HTP-1.png"
                alt="HTP-1"
              />
            </div>

            <div class="HTP-2">
              <p class="text-lg mb-4 font-outfit">
                2. Choose the word that matches the picture.
              </p>
              <img
                class="mb-9"
                src="./assets/HowToPlay-page/HTP-2.png"
                alt="HTP-2"
              />
            </div>

            <div class="HTP-3">
              <p class="text-lg mb-4 font-outfit">
                3. If you answer <span class="text-red-500">incorrectly</span>,
                a pop-up will appear with the correct answer before moving on to
                the next question.
              </p>
              <img
                class="mb-9 w-screen rounded-lg"
                src="./assets/HowToPlay-page/HTP-3.png"
                alt="HTP-3"
              />
            </div>

            <div class="HTP-4">
              <p class="text-lg mb-4 font-outfit">
                4. Game end: List displays your choice and correct answer.
                Correct is normal, incorrect is red.
              </p>
              <img
                class="mb-9"
                src="./assets/HowToPlay-page/HTP-4.png"
                alt="HTP-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
