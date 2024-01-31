<script setup></script>

<template>
  <section class="category">
    <div class="m-10">
      <div class="header flex justify-between ">
        <div>
          <img src="./assets/categories/left-arrow-01.png" alt="left-arrow" class="w-24">
        </div>
        <div
          class="categories text-title font-semibold font-outfit text-5xl justify-center items-center"
        >
          Categories
        </div>
        <div>
          <img
            src="./assets/categories/setting.png"
            alt="setting button"
            class="w-16 hover:scale-125"
          />
        </div>
      </div>

      <div class="allbox flex content-center justify-center">
        <div
          class="boxes font-semibold text-black font-outfit flex flex-col flex-wrap"
        >
          <div class="firstLine flex flex-col md:flex-row space-x-0 md:space-x-36 pb-10 md:flex-wrap">
            <div class="fruits flex flex-col items-center">
              <div class="pic w-56 pb-2">
                <img
                  src="./assets/categories/cate_fruits.png"
                  alt="fruits image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Fruits</p>
            </div>
            <div class="animals flex flex-col items-center">
              <div class="pic w-56 pb-2">
                <img
                  src="./assets/categories/cate_animals.png"
                  alt="animals image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Animals</p>
            </div>
            <div class="colors flex flex-col items-center">
              <div class="pic w-56 pb-2">
                <img
                  src="./assets/categories/cate_colors.png"
                  alt="colors image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Colors</p>
            </div>
          </div>

          <div class="secondLine flex flex-col md:flex-row space-x-0 md:space-x-36 md:flex-wrap">
            <div class="family flex flex-col items-center">
              <div class="pic w-56 pb-2">
                <img
                  src="./assets/categories/cate_family.png"
                  alt="family image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Family</p>
            </div>
            <div class="numbers flex flex-col items-center">
              <div class="pic w-56 pb-2">
                <img
                  src="./assets/categories/cate_numbers.png"
                  alt="family image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Numbers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
