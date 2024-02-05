<script setup>
import { reactive } from "vue";

//all page will add to this
const allPage = reactive({
  homePage: true,
  categoryPage: "",
  playgamePage: "",
  isPopUp: "",
});

//playbutton click event
const playButton = () => {
  allPage.homePage = false;
  allPage.categoryPage = true;
};

//howToPlayButton click event
const howToPlayButton = () => {
  allPage.homePage = true;
  allPage.isPopUp = true;
};

//closeButton click event
const close = () => {
  allPage.homePage = true;
  allPage.isPopUp = false;
};

//backToHomeButton click event
const backToHome = () => {
  allPage.homePage = true;
  allPage.categoryPage = false;
};

const showPlaygame = () => {
  allPage.playgamePage = true;
  allPage.categoryPage = false;
};

//categories
const categories = [
  { id: 1, src: "src/assets/categories/cate_fruits.png", word: "Fruits" },
  { id: 2, src: "src/assets/categories/cate_animals.png", word: "Animals" },
  { id: 3, src: "src/assets/categories/cate_colors.png", word: "Colors" },
  { id: 4, src: "src/assets/categories/cate_family.png", word: "Family" },
  { id: 5, src: "src/assets/categories/cate_numbers.png", word: "Numbers" },
];
</script>

<template>
  <!-- Home Page -->
  <section class="homePage" v-if="allPage.homePage">
    <div
      class="h-screen w-full bg-main-bgColor p-5"
      :class="{ absolute: allPage.isPopUp }"
    >
      <div class="border-double border-8 border-title box-border h-full w-full">
        <div
          class="logo-title text-center text-title pt-title sm:text-title-size mobile:text-mobile-title-size"
        >
          <div class="font-alkatra font-medium leading-title">HELLO !</div>
          <div class="font-alkatra font-medium leading-title">CHINESE</div>
        </div>
        <div class="text-black text-center">
          <p class="font-outfit tracking-sub-title sm:text-sub-title-size">
            LET'S PRACTICE YOUR CHINESE VOCABULARY
          </p>
        </div>

        <div id="home-page-button">
          <!-- Play Button -->
          <div id="play-button" class="flex justify-center pt-12">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out"
              src="./assets/home-page/play-button.svg"
              alt="play-button"
              @click="playButton"
            />
          </div>
          <!-- How to Play Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out"
              src="./assets/home-page/HTP-button.svg"
              alt="HTP-button"
              @click="howToPlayButton"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- How To Play Page -->
    <div
      class="flex justify-center items-center h-screen"
      v-if="allPage.isPopUp"
    >
      <div
        class="overflow-y-scroll h-4/5 w-5/12 bg-white rounded-2xl drop-shadow-2xl md:text-left md:w-5/12 sm:px-16 sm:py-10 sm:text-center sm:w-6/12 mobile:w-11/12 mobile:px-8 mobile:py-14"
      >
        <!-- Close Button -->
        <div class="close absolute top-4 left-4" @click="close">
          <img
            class="w-6"
            title="close"
            src="./assets/HowToPlay-page/close-vector.png"
            alt="close-vector"
          />
        </div>
        <h1 class="text-4xl font-bold text-center mb-6 font-alkatra text-title">
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
              3. If you answer <span class="text-red-500">incorrectly</span>, a
              pop-up will appear with the correct answer before moving on to the
              next question.
            </p>
            <img
              class="mb-9 w-screen rounded-lg"
              src="./assets/HowToPlay-page/HTP-3.png"
              alt="HTP-3"
            />
          </div>

          <div class="HTP-4">
            <p class="text-lg mb-4 font-outfit">
              4. Game end: List displays your choice and correct answer. Correct
              is normal, incorrect is red.
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
  </section>

  <!-- Category Page -->
  <section class="category" v-else-if="allPage.categoryPage">
    <div class="p-7 bg-main-bgColor h-screen overflow-y-hidden">
      <header>
        <!-- Back to home Button -->
        <img
          class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out"
          src="./assets/categories/icon/left-arrow-01.png"
          alt="left-arrow"
          @click="backToHome"
        />
        <div class="header flex justify-center items-center">
          <div
            class="categories text-title font-semibold font-outfit text-5xl flex items-center justify-center w-full px-17"
          >
            Categories
          </div>
        </div>
      </header>

      <div class="allbox flex content-center justify-center mt-14">
        <div
          class="boxes font-semibold text-black font-outfit flex flex-col flex-wrap"
        >
          <div
            class="firstLine flex flex-col md:flex-row space-x-0 md:space-x-72 pb-10 md:flex-wrap md:ml-80"
          >
            <div
              class="fruits flex flex-col items-center"
              v-for="category in categories"
            >
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  :src="category.src"
                  alt="fruits image"
                  class="hover:drop-shadow-lg"
                  @click="showPlaygame"
                />
              </div>
              <p class="text-xl">{{ category.word }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Play Game Page -->
  <section class="playGame" v-if="false">
    <div id="app" class="mx-auto max-w-screen-lg">
      <div class="-z-10 absolute">
        <img
          src="./assets/play-game/background.png"
          alt="background"
          class="h-screen bg-cover bg-center"
        />
      </div>

      <div class="header flex justify-between items-center py-4">
        <div class="play ml-4 absolute left-10 top-5">
          <h1 class="text-title text-5xl font-outfit font-bold">
            Category: fruits
          </h1>
        </div>
        <div class="setting mr-4 absolute right-10 top-6 hover:scale-125">
          <img
            src="./assets/play-game/setting.png"
            alt="setting-img"
            class="w-12 hover:scale-110"
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
