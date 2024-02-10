<script setup>
import { reactive, ref, computed } from 'vue'
import images from '../data/categories'

const answer = ref('')
const showResult = ref(false)
const resultMessage = ref('')
const options = ref([])
const currentIndex = ref(0)
const currentIndexCate = ref(0)
const settingButton = ref(false)

//all page will add to this
const allPage = reactive({
  homePage: true,
  categoryPage: '',
  playgamePage: '',
  isPopUp: ''
})

//playbutton click event
const playButton = () => {
  allPage.homePage = false
  allPage.categoryPage = true
}

//howToPlayButton click event
const howToPlayButton = () => {
  allPage.homePage = true
  allPage.isPopUp = true
}

//closeButton click event
const close = () => {
  allPage.homePage = true
  allPage.isPopUp = false
}

//backToHomeButton click event
const backToHome = () => {
  allPage.homePage = true
  allPage.categoryPage = false
}

const showPlaygame = (index) => {
  currentIndexCate.value = index
  allPage.playgamePage = true
  allPage.categoryPage = false
}

//settingButton click event
const openSetting = () => {
  settingButton.value = true
}

//closeSettingButton click event
const closeSetting = () => {
  settingButton.value = false
}

const currentCategory = computed(() => {
  return images[currentIndexCate.value].categoryName
})

// รูปที่แสดงตอนเล่น
const currentImage = computed(() => {
  if (currentIndex.value === images[currentIndexCate.value].groups.length) {
    return '' // เกมสิ้นสุด
  }

  answer.value = images[currentIndexCate.value].groups[currentIndex.value].word
  options.value = generateOptions(answer.value)
  return images[currentIndexCate.value].groups[currentIndex.value].src
})

// สร้างตัวเลือก
const generateOptions = (answer) => {
  const optionsArray = []
  optionsArray.push({ id: 1, value: answer })
  while (optionsArray.length < 4) {
    const randomWord =
      images[currentIndexCate.value].groups[
        Math.floor(Math.random() * images[currentIndexCate.value].groups.length)
      ].word

    if (!optionsArray.some((option) => option.value === randomWord)) {
      optionsArray.push({ id: optionsArray.length + 1, value: randomWord })
    }
  }
  return shuffle(optionsArray)
}

// สลับลำดับ
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const checkAnswer = (selectedOption) => {
  showResult.value = true
  if (selectedOption === answer.value) {
    resultMessage.value = 'Correct!'
  } else {
    resultMessage.value = 'Wrong! The answer is ... ' + answer.value
  }

  if (currentIndex.value === images[currentIndexCate.value].groups.length - 1) {
    setTimeout(() => {
      resultMessage.value = 'Game Over!'
    }, 2000) // รอ 2 วิ ค่อยขึ้นจบเกม
    return resultMessage.value
  }

  setTimeout(() => {
    currentIndex.value++ // เลื่อนไปรูปถัดไป
    showResult.value = false // ไม่แสดงผลลัพธ์จากข้อที่แล้ว
  }, 2000) // รอ 2 วิ
}
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
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
              src="./assets/home-page/play-button.svg"
              alt="play-button"
              @click="playButton"
            />
          </div>
          <!-- How to Play Button -->
          <div id="HTP-button" class="flex justify-center pt-6">
            <img
              class="w-72 relative hover:w-80 transition-all duration-300 ease-in-out cursor-pointer"
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
        class="overflow-y-scroll h-4/5 bg-white rounded-2xl drop-shadow-2xl relative md:w-5/12 sm:w-6/12 mobile:w-11/12"
      >
        <!-- Close Button -->
        <div class="sticky top-3 cursor-pointer" @click="close">
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
                  3. If you answer
                  <span class="text-red-500">incorrectly</span>, a pop-up will
                  appear with the correct answer before moving on to the next
                  question.
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
  </section>

  <!-- Category Page -->
  <section class="category " v-else-if="allPage.categoryPage">
    <div class="p-7 bg-main-bgColor h-screen mobile:bg-main-bgColor mobile:h-screen">
      <header>
        <!-- Back to home Button -->
        <img
          class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
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

      <div class="flex content-center justify-center mt-14">
        <div
          class="font-semibold text-black font-outfit md:flex md:justify-center"
        >
          <div
            class="md:flex md:space-x-32 md:flex-wrap md:w-3/4 md:justify-center"
          >
            <div
              v-for="(category, categoryIndex) in images"
              :key="category.categoryName"
              class="category-item flex flex-col items-center md:mb-9"
              @click="showPlaygame(categoryIndex)"
            >
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  :src="category.cateImg"
                  :alt="category.categoryName"
                  class="hover:drop-shadow-lg"
                />
              </div>

              <p class="text-xl">{{ category.categoryName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Play Game Page -->
  <section class="playGame" v-else-if="allPage.playgamePage">
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
        <div
          class="w-full h-screen flex justify-center items-center bg-black bg-opacity-50"
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
                    class="resume button cursor-pointer"
                    @click="closeSetting"
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
            Category:{{ currentCategory }}
          </h1>
        </div>

        <div class="setting mr-4 absolute right-10 top-6 hover:scale-125">
          <img
            src="./assets/play-game/setting.png"
            alt="setting-image"
            class="w-12"
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
          :src="currentImage"
          :alt="answer"
        />
      </div>

      <div class="grid grid-cols-2 gap-4 justify-center">
        <button
          v-for="(option, index) in options"
          :key="index"
          @click="checkAnswer(option.value)"
          class="bg-button-bgColor text-white font-normal text-2xl py-3 px-6 h-20 rounded-md"
        >
          {{ option.value }}
        </button>
      </div>

      <p class="mt-4" v-if="showResult">{{ resultMessage }}</p>
    </div>
  </section>
</template>

<style scoped></style>
