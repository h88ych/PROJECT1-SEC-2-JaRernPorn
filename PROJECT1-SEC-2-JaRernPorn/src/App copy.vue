<script setup>
import { ref, computed } from 'vue'

const images = [
  { id: 1, src: './assets/play-game/fruits/apple-01.png', word: 'Apple' },
  { id: 2, src: './assets/play-game/fruits/banana-01.png', word: 'Banana' },
  { id: 3, src: './assets/play-game/fruits/mango-01.png', word: 'Mango' },
  { id: 4, src: './assets/play-game/fruits/grape-01.png', word: 'Grapes' },
  {
    id: 5,
    src: './assets/play-game/fruits/pineapple-01.png',
    word: 'Pineapple'
  },
  {
    id: 6,
    src: './assets/play-game/fruits/strawberry-01.png',
    word: 'Strawberry'
  },
  {
    id: 7,
    src: './assets/play-game/fruits/watermelon-01.png',
    word: 'Watermelon'
  }
]

const answer = ref('')
const showResult = ref(false)
const resultMessage = ref('')
const options = ref([])
const currentIndex = ref(0)

// รูปที่แสดงตอนเล่น
const currentImage = computed(() => {
  const index = Math.floor(Math.random() * images.length)
  answer.value = images[index].word
  options.value = generateOptions(answer.value)

  if (currentIndex.value === images.length) {
    return '' // เกมสิ้นสุด
  }

  answer.value = images[currentIndex.value].word
  options.value = generateOptions(answer.value)
  return images[currentIndex.value].src
  // return images[index].src
})

// สร้างตัวเลือก
const generateOptions = (answer) => {
  const optionsArray = []
  optionsArray.push({ id: 1, value: answer })
  while (optionsArray.length < 4) {
    const randomWord = images[Math.floor(Math.random() * images.length)].word

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
    resultMessage.value = 'Wrong!'
  }

  if (currentIndex.value === images.length - 1) {
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
  <section class="playGame">
    <div id="app" class="mx-auto max-w-screen-lg">
      <div class="header flex justify-between items-center py-4">
        <div class="play ml-4 absolute left-10 top-5">
          <h1 class="text-title text-5xl font-outfit font-bold">
            Category: fruits
          </h1>
        </div>

        <div class="setting mr-4 absolute right-10 top-6 hover:scale-125">
          <img src="./assets/home-page/setting.png" alt="" class="w-12" />
        </div>
      </div>

      <div id="bg-image" class="flex justify-center my-12">
        <img class="w-96 my-8" :src="currentImage" alt="bg-image" />
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
          class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md"
        >
          {{ option.value }}
        </button>
      </div>

      <p class="mt-4" v-if="showResult">{{ resultMessage }}</p>
    </div>
  </section>
</template>

<style scoped></style>
