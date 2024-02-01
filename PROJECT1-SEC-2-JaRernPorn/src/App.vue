<script setup></script>

<template>
    <section class="playGame">

        <div id="app" class="mx-auto max-w-screen-lg">

            <div class="-z-10 absolute ">
                <img src="./assets/play-game/background.png" alt="background" class="h-screen bg-cover bg-center">
            </div>

            <div class=" header flex justify-between items-center py-4">
                <div class="play ml-4 absolute left-10 top-5">
                    <h1 class="text-title text-5xl font-outfit font-bold">Category: fruits</h1>
                </div>
                <div class="setting mr-4 absolute right-10 top-6 hover:scale-125">
                    <img src="./assets/play-game/setting.png" alt="setting-img" class="w-12 hover:scale-110" />
                </div>
            </div>

            <div id="bg-image" class="flex justify-center my-12">
                <img class="w-96 my-8" src="./assets/play-game/bg-image.png" alt="bg-image" />
                <img class="absolute font-outfit mb-4 mx-8 my-20 size-48" src="./assets/play-game/fruits/apple-01.png"
                    alt="Apple">
            </div>

            <div class="grid grid-cols-2 gap-4 justify-center">
                <button class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md">Apple</button>
                <button class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md">Apple</button>
                <button class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md">Apple</button>
                <button class="bg-button-bgColor text-white font-semibold py-3 px-6 h-20 rounded-md">Apple</button>
            </div>

        </div>

    </section>
</template>

<style scoped></style>