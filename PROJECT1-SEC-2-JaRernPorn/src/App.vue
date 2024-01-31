<script setup>
import { ref } from 'vue';

const showHomePage=ref(true)
const showCategoryPage=ref(false)

const handleClickPlay=()=>{
  showCategoryPage.value=!showCategoryPage.value
  showHomePage.value=!showHomePage.value
}
</script>

<template>
  <section class="homePage" v-if="showHomePage">
    <div class="h-screen bg-main-bgColor p-5">
    <div
      class="border-double border-8 border-title box-border h-full w-full flex flex-col"
    >
      <img
        class="w-16 absolute right-12 top-12"
        src="./assets/home-page/setting.png"
        alt=""
      />
      <div class="logo-title text-center text-title text-title-size pt-title">
        <div class="font-alkatra font-medium leading-title">HELLO !</div>
        <div class="font-alkatra font-medium leading-title">CHINESE</div>
      </div>
      <div class="sub-title text-center">
        <p class="font-outfit tracking-sub-title text-sub-title-size">
          LET'S PRACTICE YOUR CHINESE VOCABULARY
        </p>
      </div>

      <div id="home-page-button">
        <div id="play-button" class="flex justify-center pt-14" >
          <img
            class="w-72 relative"
            src="./assets/home-page/red-bible-button.png"
            alt="play-button"
            @click="handleClickPlay"
          />
          <p class="absolute font-outfit font-normal text-white text-4xl p-5" @click="handleClickPlay">
            PLAY
          </p>
        </div>
        <div id="HTP-button" class="flex justify-center pt-6">
          <img
            class="w-72 relative"
            src="./assets/home-page/red-bible-button.png"
            alt="HTP-button"
          />
          <p class="absolute font-outfit font-normal text-white text-2xl p-6">
            HOW TO PLAY
          </p>
        </div>
      </div>
    </div>
    </div>
  </section>

  <section class="category" v-if="showCategoryPage">
    <div class="m-10">
    <div class="header flex justify-between">
      <div
        class="categories text-title font-semibold font-outfit text-5xl justify-center items-center"
      >
        Categories
      </div>
      <div>
        <img src="./assets/categories/setting.png" alt="" class="w-16 hover:scale-125" />
      </div>
    </div>

    <div class="allbox flex content-center justify-center">
      <div class="boxes font-semibold text-black font-outfit flex flex-col flex-wrap">
        <div class="firstLine flex space-x-36 pb-10 ">
          <div class="fruits flex flex-col items-center">
            <div class="pic w-56 pb-2">
              <img src="./assets/categories/cate_fruits.png" alt="" class="hover:drop-shadow-lg" />
            </div>
            <p class="text-xl">Fruits</p>
          </div>
          <div class="animals flex flex-col items-center">
            <div class="pic w-56 pb-2">
              <img src="./assets/categories/cate_animals.png" alt="" class="hover:drop-shadow-lg"/>
            </div>
            <p class="text-xl">Animals</p>
          </div>
          <div class="colors flex flex-col items-center">
            <div class="pic w-56 pb-2">
              <img src="./assets/categories/cate_colors.png" alt="" class="hover:drop-shadow-lg"/>
            </div>
            <p class="text-xl">Colors</p>
          </div>
        </div>

        <div class="secondLine flex space-x-36 ">
          <div class="family flex flex-col items-center">
            <div class="pic w-56 pb-2">
              <img src="./assets/categories/cate_family.png" alt="" class="hover:drop-shadow-lg"/>
            </div>
            <p class="text-xl">Family</p>
          </div>
          <div class="numbers flex flex-col items-center">
            <div class="pic w-56 pb-2">
              <img src="./assets/categories/cate_numbers.png" alt="" class="hover:drop-shadow-lg"/>
            </div>
            <p class="text-xl">Numbers</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  
  <section class="quiz">
    
  </section>
  
</template>

 
<style scoped>

</style>
