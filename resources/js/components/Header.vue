<template>
    <header class="bg-white shadow-md">
      <!-- Верхняя линия -->
      <div class="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100">
        <div class="text-sm text-right space-y-1 hidden md:block">
          <div class="text-gray-700 font-medium">
            <a href="#" class="text-blue-600 hover:underline">Вход</a> |
            <a href="#" class="text-blue-600 hover:underline">Регистрация</a>
          </div>
          <div>
            <a href="#" class="hover:underline">Қазақша</a> |
            <a href="#" class="hover:underline">Русский</a>
          </div>
        </div>
      </div>
  
      <!-- Логотип, герб, флаг и контактные данные на одном уровне -->
      <div class="flex justify-between items-center px-4 py-4">
        <!-- Логотип -->
        <div class="flex items-center gap-4">
          <img :src="logo" alt="Логотип" class="h-20 w-auto" />
          <div class="text-sm text-gray-600 max-w-md leading-snug font-medium">
            Коммунальное государственное учреждение<br />
            <strong>«Средняя школа №36»</strong><br />
            отдела образования по городу Усть-Каменогорску управления образования ВКО
          </div>
        </div>
  
        <!-- Символика (Герб и Флаг) -->
        <div class="flex items-center gap-4">
          <img :src="Coat_of_arms" alt="Герб" class="h-20 w-auto" />
          <img :src="Flag" alt="Флаг" class="h-20 w-auto" />
        </div>
  
        <!-- Контактная информация -->
        <div class="text-xs text-gray-700 px-4 py-2 text-right hidden md:block">
          <p>Қабылдау бөлімі: <strong>+7 (7232) 26-84-48</strong></p>
          <p>Есепші: <strong>+7 (7232) 26-02-01</strong></p>
          <p>
            Email:
            <a href="mailto:36_mektep_oskemen@vko.edu.kz" class="text-blue-600 hover:underline">
              36_mektep_oskemen@vko.edu.kz
            </a>
          </p>
        </div>
      </div>
  
      <!-- Меню -->
      <Menu />
    </header>
  </template>
  
  <script>
  import logo from "@/assets/images/logo.png";
  import Coat_of_arms from "@/assets/images/coat_of_arms.png";
  import Flag from "@/assets/images/Flag.jpg";
  import Menu from "@/components/Menu.vue";  // Импортируем новый компонент Menu
  
  export default {
    name: "Header",
    components: {
      Menu,  // Регистрация компонента Menu
    },
    data() {
      return {
        logo,
        Coat_of_arms,
        Flag,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Можно добавить кастомную стилизацию тут при необходимости */
  </style>
  