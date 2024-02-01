<script setup></script>

<template>
  <section class="category">
    <div class="p-7 bg-main-bgColor h-screen overflow-y-hidden">
      <header>
        <img
          class="w-16 absolute hover:w-catePage-20 transition-all duration-300 ease-in-out"
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
            <div class="fruits flex flex-col items-center">
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  src="./assets/categories/cate_fruits.png"
                  alt="fruits image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Fruits</p>
            </div>
            <div class="animals flex flex-col items-center">
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  src="./assets/categories/cate_animals.png"
                  alt="animals image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Animals</p>
            </div>
            <div class="colors flex flex-col items-center">
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  src="./assets/categories/cate_colors.png"
                  alt="colors image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Colors</p>
            </div>
          </div>

          <div
            class="secondLine flex flex-col md:flex-row justify-center md:space-x-28 md:flex-wrap"
          >
            <div class="family flex flex-col items-center">
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
                <img
                  src="./assets/categories/cate_family.png"
                  alt="family image"
                  class="hover:drop-shadow-lg"
                />
              </div>
              <p class="text-xl">Family</p>
            </div>
            <div class="numbers flex flex-col items-center">
              <div
                class="pic w-52 pb-2 hover:w-56 transition-all duration-300 ease-in-out"
              >
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
