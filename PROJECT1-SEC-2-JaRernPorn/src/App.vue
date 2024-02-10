<script setup>
import { reactive, ref, computed } from 'vue'
import images from '../data/categories'

const answer = ref('')
const showResult = ref(false)
const selectedAnswer = ref('')
const resultMessage = ref('')
const options = ref([])
const currentIndex = ref(0)
const currentIndexCate = ref(0)

//all page will add to this
const allPage = reactive({
  categoryPage: true,
  playgamePage: ''
})

const showPlaygame = (index) => {
  currentIndexCate.value = index
  allPage.playgamePage = true
  allPage.categoryPage = false
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

// logic check answer
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

  setSelectedAnswer(selectedOption)
}

// track selected answer from user by ref
const setSelectedAnswer = (value) => {
  selectedAnswer.value = value
}

// Change color's button if selected answer is correct!
const setButtonCorrect = (optionValue) => {
  if (showResult.value && optionValue === selectedAnswer.value) {
    if (optionValue === answer.value) {
      return 'bg-green-600'
    } else {
      return 'bg-red-600'
    }
  }
  return 'bg-button-bgColor'
}
</script>

<template>
  <section class="category" v-if="allPage.categoryPage">
    <div class="p-7 bg-main-bgColor h-screen overflow-y-hidden">
      <header>
        <img
          class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out cursor-pointer"
          src="./assets/categories/icon/left-arrow-01.png"
          alt="left-arrow"
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
            class="firstLine flex flex-col md:flex-row space-x-0 md:space-x-28 pb-10 md:flex-wrap"
          >
            <div
              v-for="(category, categoryIndex) in images"
              :key="category.categoryName"
              class="category-item flex flex-col items-center cursor-pointer"
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

  <section class="playGame" v-else-if="allPage.playgamePage">
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
            Category: {{ currentCategory }}
          </h1>
        </div>

        <div class="setting mr-4 absolute right-10 top-6 hover:scale-125">
          <img
            src="./assets/play-game/setting.png"
            alt="setting-image"
            class="w-12"
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

      <div class="flex flex-col justify-center items-center">
        <div class="grid grid-cols-2 gap-5 justify-center w-3/4">
          <button
            v-for="(option, index) in options"
            :key="index"
            @click="checkAnswer(option.value)"
            :class="setButtonCorrect(option.value)"
            class="flex justify-center items-center bg-button-bgColor text-white font-normal text-2xl h-20 rounded-md hover:drop-shadow-lg"
          >
            {{ option.value }}
          </button>
        </div>

        <p class="mt-4" v-if="showResult">{{ resultMessage }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
