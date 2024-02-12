const categories = [
  {
    name: 'Fruits',
    image: 'src/assets/categories/cate_fruits.png',
    items: [
      {
        id: 1,
        src: 'src/assets/play-game/fruits/apple.png',
        word: '苹果 (píngguǒ)',
        meaning: 'Apple'
      },
      {
        id: 2,
        src: 'src/assets/play-game/fruits/banana.png',
        word: '香蕉 (xiāngjiāo)',
        meaning: 'Banana'
      },
      {
        id: 3,
        src: 'src/assets/play-game/fruits/mango.png',
        word: '芒果 (mángguǒ)',
        meaning: 'Mango'
      },
      {
        id: 4,
        src: 'src/assets/play-game/fruits/grape.png',
        word: '葡萄 (pú táo)',
        meaning: 'Grape'
      },
      {
        id: 5,
        src: 'src/assets/play-game/fruits/pineapple.png',
        word: '菠萝 (bōluó)',
        meaning: 'Pineapple'
      },
      {
        id: 6,
        src: 'src/assets/play-game/fruits/strawberry.png',
        word: '草莓 (cǎoméi)',
        meaning: 'Strawberry'
      },
      {
        id: 7,
        src: 'src/assets/play-game/fruits/watermelon.png',
        word: '西瓜 (xīguā)',
        meaning: 'Watermelon'
      }
    ]
  },

  {
    name: 'Animals',
    image: 'src/assets/categories/cate_animals.png',
    items: [
      {
        id: 1,
        src: 'src/assets/play-game/animal/cat.png',
        word: '猫 (Māo)',
        meaning: 'Cat'
      },
      {
        id: 2,
        src: 'src/assets/play-game/animal/dog.png',
        word: '狗 (gǒu)',
        meaning: 'dog'
      },
      {
        id: 3,
        src: 'src/assets/play-game/animal/elephat.png',
        word: '大象 (dà xiàng)',
        meaning: 'Elephant'
      },
      {
        id: 4,
        src: 'src/assets/play-game/animal/lion.png',
        word: '狮子	(Shīzi)',
        meaning: 'Lion'
      },
      {
        id: 5,
        src: 'src/assets/play-game/animal/monkey.png',
        word: '猴子 (hóuzi)',
        meaning: 'Monkey'
      },
      {
        id: 6,
        src: 'src/assets/play-game/animal/rabbit.png',
        word: '兔子 (Tùzǐ)',
        meaning: 'Rabbit'
      },
      {
        id: 7,
        src: 'src/assets/play-game/animal/tiger.png',
        word: '老虎	(Lǎohǔ)',
        meaning: 'Tiger'
      }
    ]
  },

  {
    name: 'Colors',
    image: 'src/assets/categories/cate_colors.png',
    items: [
      {
        id: 1,
        src: 'src/assets/play-game/color/black.png',
        word: '黑色 (hēi sè)',
        meaning: 'Black'
      },
      {
        id: 2,
        src: 'src/assets/play-game/color/blue.png',
        word: '蓝色 (lán sè)',
        meaning: 'Blue'
      },
      {
        id: 3,
        src: 'src/assets/play-game/color/green.png',
        word: '绿色 (lǜ sè)',
        meaning: 'Green'
      },
      {
        id: 4,
        src: 'src/assets/play-game/color/orange.png',
        word: '橙色 (chéng sè)',
        meaning: 'Orange'
      },
      {
        id: 5,
        src: 'src/assets/play-game/color/pink.png',
        word: '粉红色 (fěn hóng sè)',
        meaning: 'Pink'
      },
      {
        id: 6,
        src: 'src/assets/play-game/color/purple.png',
        word: '紫色 (zǐ sè)',
        meaning: 'Purple'
      },
      {
        id: 7,
        src: 'src/assets/play-game/color/yellow.png',
        word: '黄色 (huáng sè)',
        meaning: 'Yellow'
      }
    ]
  },

  {
    name: 'Family',
    image: 'src/assets/categories/cate_family.png',
    items: [
      {
        id: 1,
        src: 'src/assets/play-game/family/grandfather.png',
        word: '爷爷 (yé ye)',
        meaning: 'Grandfather'
      },
      {
        id: 2,
        src: 'src/assets/play-game/family/mother.png',
        word: '妈妈 (mā ma)',
        meaning: 'Mother'
      },
      {
        id: 3,
        src: 'src/assets/play-game/family/father.png',
        word: '爸爸 (bà ba)',
        meaning: 'Father'
      },
      {
        id: 4,
        src: 'src/assets/play-game/family/older-brother.png ',
        word: '哥哥 (gē ge)',
        meaning: 'Elder brother'
      },
      {
        id: 5,
        src: 'src/assets/play-game/family/younger-brother.png',
        word: '弟弟 (dì di)',
        meaning: 'Younger brother'
      },
      {
        id: 6,
        src: 'src/assets/play-game/family/older-sister.png',
        word: '姐姐 (jiě jie)',
        meaning: 'Elder sister'
      },
      {
        id: 7,
        src: 'src/assets/play-game/family/younger-sister.png',
        word: '妹妹 (mèi mei)',
        meaning: 'Younger sister'
      }
    ]
  },

  {
    name: 'Numbers',
    image: 'src/assets/categories/cate_numbers.png',
    items: [
      {
        id: 1,
        src: 'src/assets/play-game/number/seven.png',
        word: '七 (qī)',
        meaning: 'Seven'
      },
      {
        id: 2,
        src: 'src/assets/play-game/number/two.png',
        word: '二 (èr)',
        meaning: 'Two'
      },
      {
        id: 3,
        src: 'src/assets/play-game/number/five.png',
        word: '五 (wǔ)',
        meaning: 'Five'
      },
      {
        id: 4,
        src: 'src/assets/play-game/number/zero.png',
        word: '零 (líng)',
        meaning: 'Zero'
      },
      {
        id: 5,
        src: 'src/assets/play-game/number/one.png',
        word: '一 (yī)',
        meaning: 'One'
      },
      {
        id: 6,
        src: 'src/assets/play-game/number/ten.png',
        word: '十 (shí)',
        meaning: 'Ten'
      },
      {
        id: 7,
        src: 'src/assets/play-game/number/eight.png',
        word: '八 (bā)',
        meaning: 'Eight'
      }
    ]
  }
]

export default categories
