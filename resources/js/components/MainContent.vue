<template>
    <main class="p-6 text-center">
      <!-- Блок с фоновым изображением -->
      <div
        class="main-image h-64 bg-cover bg-center rounded-xl shadow-lg"
        :style="{ backgroundImage: `url(${mainImage})` }"
      ></div>
  
      <!-- Сетка карточек -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div
          v-for="n in 10"
          :key="n"
          class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
        >
          <img
            src="https://via.placeholder.com/300"
            alt="Card image"
            class="w-full h-auto rounded-md"
          />
          <h3 class="text-blue-600 text-lg font-semibold my-2">
            Карточка {{ n }}
          </h3>
          <p class="text-sm text-gray-700">
            Описание карточки номер {{ n }}. Здесь будет какая-то информация.
          </p>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import mainImage from "@/assets/images/main-image.jpg";
  
  export default {
    name: "MainContent",
    data() {
      return {
        mainImage,
      };
    },
  };
  </script>
  