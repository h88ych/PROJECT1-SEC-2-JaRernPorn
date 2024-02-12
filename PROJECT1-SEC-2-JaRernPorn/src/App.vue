<script setup>
import { reactive, ref, computed } from 'vue'
import categories from '../data/categories'

const answer = ref('')
const isChecking = ref(false)
const selectedAnswer = ref('')
const options = ref([])
const currentIndexItem = ref(0)
const currentIndexCate = ref(0)
const settingButton = ref(false)
const userAnswer = ref([])

//init all values to default
const init = () => {
  settingButton.value = false
  currentIndexItem.value = 0
  currentIndexCate.value = 0
  userAnswer.value = []
  selectedAnswer.value = ''
  options.value = []
  answer.value = ''
}

//all page will add to this
const allPage = reactive({
  homePage: true,
  categoryPage: false,
  playgamePage: false,
  wordListPage: false
})

//pop up page will add to this
const popUp = reactive({
  showHowToPlayPage: false,
  showAnswer: false,
  showEndgame: false
})

//playbutton click event
const playButton = () => {
  allPage.homePage = false
  allPage.categoryPage = true
}

//howToPlayButton click event
const howToPlayButton = () => {
  allPage.homePage = true
  popUp.showHowToPlayPage = true
}

//closeButton click event
const closeHowToPlay = () => {
  allPage.homePage = true
  popUp.showHowToPlayPage = false
}

//backToHomeButton click event
const backToHome = () => {
  allPage.homePage = true
  allPage.categoryPage = false
  allPage.wordListPage = false
  init()
}

const showPlaygame = (index) => {
  currentIndexCate.value = index
  allPage.playgamePage = true
  allPage.categoryPage = false
}

const showWordListPage = () => {
  popUp.showEndgame = false
  allPage.wordListPage = true
}

//settingButton click event
const openSetting = () => {
  settingButton.value = true
}

//closeSettingButton click event
const closeSetting = () => {
  settingButton.value = false
}

const handleNextBtn = () => {
  popUp.showAnswer = false
  isChecking.value = false
  currentIndexItem.value++

  if (
    currentIndexItem.value === categories[currentIndexCate.value].items.length
  ) {
    allPage.playgamePage = false
    popUp.showEndgame = true
    setTimeout(() => {
      showWordListPage()
    }, 2000) // รอ 2 วิ ค่อยขึ้นจบเกม
  }
}

const currentCategory = computed(() => {
  return categories[currentIndexCate.value].name
})

//restartButton click event
const restartButton = () => {
  console.log('restart')
  popUp.showEndgame = false
  allPage.wordListPage = false
  allPage.playgamePage = true
  userAnswer.value = []
  currentIndexItem.value = 0
  closeSetting()
}

//mainMenuButton click event
const mainMenuButton = () => {
  allPage.wordListPage = false
  allPage.categoryPage = true
  init()
}

//homeButton click event
const homeButton = () => {
  allPage.playgamePage = false
  allPage.categoryPage = false
  allPage.homePage = true
  init()
}

// รูปที่แสดงตอนเล่น
const currentQuiz = computed(() => {
  if (
    currentIndexItem.value === categories[currentIndexCate.value].items.length
  ) {
    return '' // เกมสิ้นสุด
  }

  answer.value =
    categories[currentIndexCate.value].items[currentIndexItem.value].word
  options.value = generateOptions(answer.value)
  return categories[currentIndexCate.value].items[currentIndexItem.value].src
})

// สร้างตัวเลือก
const generateOptions = (answer) => {
  const optionsArray = []
  optionsArray.push({ id: 1, value: answer })
  while (optionsArray.length < 4) {
    const randomWord =
      categories[currentIndexCate.value].items[
        Math.floor(
          Math.random() * categories[currentIndexCate.value].items.length
        )
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
  isChecking.value = true
  userAnswer.value.push(selectedOption)
  console.log(userAnswer.value)
  console.log(currentIndexItem.value)

  if (selectedOption === answer.value) {
    setSelectedAnswer(selectedOption)
    setTimeout(() => {
      currentIndexItem.value++ // เลื่อนไปรูปถัดไป
      isChecking.value = false
    }, 1000)

    if (
      currentIndexItem.value ===
      categories[currentIndexCate.value].items.length - 1
    ) {
      setTimeout(() => {
        allPage.playgamePage = false
        popUp.showEndgame = true
      }, 1000)
      setTimeout(() => {
        showWordListPage()
      }, 3000) // รอ 2 วิ ค่อยขึ้นจบเกม
    }
  } else {
    popUp.showAnswer = true
  }
}

// track selected answer from user by ref
const setSelectedAnswer = (value) => {
  selectedAnswer.value = value
}

// Change color's button if selected answer is correct!
const setButtonCorrect = (optionValue) => {
  if (optionValue === selectedAnswer.value) {
    if (optionValue === answer.value) {
      return 'bg-green-600'
    } else {
      return ''
    }
  }
  return 'bg-button-bgColor'
}
</script>

<template>
  <!-- Home Page -->
  <section class="homePage" v-if="allPage.homePage">
    <div
      class="h-screen w-full bg-main-bgColor p-5"
      :class="{ absolute: popUp.showHowToPlayPage }"
    >
      <div class="border-double border-8 border-title box-border h-full w-full">
        <div
          class="logo-title text-center text-title pt-title sm:text-title-size mobile:text-mobile-title-size"
        >
          <div class="font-alkatra font-medium leading-title">HELLO !</div>
          <div class="font-alkatra font-medium leading-title">CHINESE</div>
        </div>
        <div class="text-black text-center">
          <p
            class="font-outfit font-medium tracking-sub-title sm:text-sub-title-size"
          >
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
      class="flex justify-center items-center h-screen bg-black bg-opacity-50 absolute"
      v-if="popUp.showHowToPlayPage"
    >
      <div
        class="overflow-y-scroll h-4/5 bg-white rounded-2xl drop-shadow-2xl relative md:w-5/12 sm:w-6/12 mobile:w-11/12"
      >
        <!-- Close Button -->
        <div class="sticky top-3 cursor-pointer w-10" @click="closeHowToPlay">
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
              class="text-5xl pt-4 font-bold text-center mb-6 font-alkatra text-title"
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
  <section class="category" v-else-if="allPage.categoryPage">
    <div class="p-7 bg-main-bgColor min-h-screen">
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
              v-for="(category, cateIndex) in categories"
              :key="category.name"
              class="category-item flex flex-col items-center md:mb-9 cursor-pointer"
              @click="showPlaygame(cateIndex)"
            >
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  :src="category.image"
                  :alt="category.name"
                  class="hover:drop-shadow-lg"
                />
              </div>

              <p class="text-xl">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Play Game Page -->
  <section
    class="playGame md:min-h-screen bg-main-bgColor"
    v-else-if="allPage.playgamePage"
  >
    <div id="app" class="mx-auto max-w-screen-lg relative">
      <!-- <div class="absolute">
        <img
          src="./assets/play-game/background.png"
          alt="background"
          class="h-screen bg-cover bg-center"
        />
      </div> -->

      <div class="header flex justify-between items-center py-4">
        <div class="play md:ml-4 absolute md:left-10 top-5 text-center">
          <h1 class="text-title text-5xl font-outfit font-bold">
            Category:{{ currentCategory }}
          </h1>
        </div>

        <div
          class="setting mr-4 absolute right-10 top-6 hover:scale-125 hover:transition-all duration-300 ease-in-out"
        >
          <img
            src="./assets/play-game/setting.png"
            alt="setting-image"
            class="w-12 cursor-pointer"
            @click="openSetting"
          />
        </div>
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
              class="rounded-3xl bg-white bg-opacity-100 w-[200px] h-[403px] sm:w-[300px] md:w-[450px] md:h-[403px]"
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
                    class="resume button cursor-pointer hover:scale-110 hover:transition-all duration-300 ease-in-out"
                    @click="closeSetting"
                  />
                  <img
                    src="./assets/setting-features/restartButton.png"
                    alt="restart button "
                    class="mb-2 cursor-pointer hover:scale-110 hover:transition-all duration-300 ease-in-out"
                    @click="restartButton"
                  />
                  <img
                    src="./assets/setting-features/homebutton.png"
                    alt="home button"
                    class="cursor-pointer hover:scale-110 hover:transition-all duration-300 ease-in-out"
                    @click="homeButton"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="bg-image" class="flex justify-center my-12">
        <img
          class="w-96 my-8"
          src="./assets/play-game/bg-image.png"
          alt="bg-image"
        />
        <img
          class="absolute font-outfit mb-4 mx-8 my-20 size-48"
          :src="currentQuiz"
          :alt="answer"
        />
      </div>

      <div class="flex flex-col justify-center items-center">
        <div class="grid grid-cols-2 gap-5 justify-center w-3/4">
          <button
            v-for="(option, index) in options"
            :key="index"
            @click="
              () => {
                if (!isChecking) checkAnswer(option.value)
              }
            "
            :class="setButtonCorrect(option.value)"
            class="flex justify-center items-center bg-button-bgColor text-white font-normal text-2xl h-20 rounded-md hover:drop-shadow-lg"
          >
            {{ option.value }}
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- Wrong popup  -->
  <section
    v-if="popUp.showAnswer"
    class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
  >
    <div id="body" class="w-full h-screen p-5 relative">
      <div
        class="w-full h-full relative text-center flex justify-center items-center"
      >
        <div class="text-center relative translate-middle text-white">
          <img
            src="./assets/wrongPopup/Frame.png"
            alt="Frame chinese theme"
            class="w-10/12 mx-auto"
          />
          <div
            class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex-col space-y-14"
          >
            <div
              class="capitalize text-brownColor text-xl font-alkatra font-semibold tracking-wide relative right-7 top-8 sm:right-[50px] sm:text-4xl md:text-5xl lg:text-6xl lg:right-[60px]"
            >
              The answer is<br />
              <div
                class="text-answer-fontColor font-NotoSansSC font-medium lowercase text-sm relative sm:text-2xl md:text-4xl"
              >
                {{ answer }}
              </div>
            </div>
            <button
              class="text-sm text-brownColor font-semibold font-alkatra tracking-wider relative right-7 bottom-3 hover:text-answer-fontColor sm:right-[50px] sm:top-[18px] sm:text-2xl md:text-3xl lg:right-[60px]"
              @click="handleNextBtn"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end game page  -->
  <section v-if="popUp.showEndgame">
    <div id="body" class="bg-main-bgColor w-full h-screen p-5 relative">
      <div
        class="border-double border-8 border-title box-border w-full h-full relative text-center flex justify-center items-center"
      >
        <div class="text-center relative translate-middle text-white">
          <img
            src="./assets/endgame-page/complimentFrame.png"
            alt="Picture that said Excellent!"
            class="mx-auto my-50"
          />
          <div
            class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <h1
              class="uppercase text-4xl font-alkatra md:text-compliment-size sm:text-6xl xl:text-compliment-size"
            >
              excellent!
            </h1>
            <p
              class="text-2xl font-outfit md:text-resultButton-size sm:text-4xl xl:text-resultButton-size"
            >
              Let's See The Result
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Word List Page -->
  <section class="wordListPage" v-if="allPage.wordListPage">
    <div class="w-full min-h-screen bg-main-bgColor pt-4 flex justify-center">
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
          class="size-14 flex hover:scale-110 absolute top-3 right-7 cursor-pointer hover:transition-all duration-300 ease-in-out"
          src="./assets/result-page/home button.png"
          alt="home"
          @click="backToHome"
        />
      </div>

      <div class="flex flex-col justify-center gap-4 md:gap-10">
        <div class="flex flex-col">
          <header
            class="font-alkatra font-semibold text-title text-7xl text-center md:text-8xl"
          >
            Word List
          </header>

          <div
            class="font-outfit font-semibold text-md text-center tracking-subtitle sm:text-lg"
          >
            You did great! Here are the result.
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-5">
          <section class="flex flex-col">
            <div
              class="bg-white shadow-lg font-outfit font-medium text-lg p-5 rounded-3xl w-72 h-60 overflow-auto md:text-xl md:w-80 md:h-96 md:overflow-visible"
            >
              Your Answer:
              <div class="border-b-2 border-black"></div>
              <div
                v-for="(userAns, index) in userAnswer"
                :key="index"
                :class="{
                  'text-red-500':
                    userAns !== categories[currentIndexCate].items[index].word
                }"
                class="flex font-NotoSansSC font-medium text-lg tracking-title leading-listMobile md:text-xl md:leading-list"
              >
                {{ index + 1 }}. {{ userAns }}
              </div>
            </div>
          </section>

          <section class="flex flex-col">
            <div
              class="bg-white shadow-lg font-outfit text-lg font-medium p-5 rounded-3xl w-72 h-60 overflow-auto md:text-xl md:w-96 md:h-96 md:overflow-x-auto"
            >
              Answer:
              <div class="border-b-2 border-black"></div>
              <div
                class="font-NotoSansSC font-medium text-lg tracking-title leading-listMobile md:text-xl md:leading-list"
                v-for="(answer, index) in categories[currentIndexCate].items"
                :key="index"
              >
                {{ index + 1 }}. {{ answer.word }} - {{ answer.meaning }}
              </div>
            </div>
          </section>
        </div>

        <div class="flex flex-wrap justify-center gap-3">
          <div class="flex justify-center">
            <div
              class="flex justify-center bg-title rounded-lg font-outfit font-semibold text-lg p-4 text-white uppercase text-center cursor-pointer hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
              @click="restartButton"
            >
              Play Again
            </div>
          </div>
          <div
            class="flex justify-center bg-title rounded-lg font-outfit font-semibold text-lg p-4 text-white uppercase text-center cursor-pointer hover:bg-button-bgColor sm:text-lg sm:p-3 sm:w-32"
            @click="mainMenuButton"
          >
            Main Menu
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
