<!-- resources/js/components/Menu.vue -->

<template>
    <nav class="bg-gray-50 border-t border-gray-200 mt-2">
      <ul class="flex flex-wrap justify-center text-sm font-semibold text-gray-800">
        <li class="mx-3 my-2">
          <router-link to="/" class="hover:text-blue-600">Информация</router-link>
        </li>
        <li class="relative group mx-3 my-2">
          <router-link to="/about" class="hover:text-blue-600">О школе</router-link>
          <ul class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg hidden group-hover:block z-10">
            <li>
              <router-link to="" class="block px-4 py-2 hover:bg-gray-100">Кабинет поддержки инклюзии (КПИ)</router-link>
            </li>
            <li>
              <router-link to="/about/history" class="block px-4 py-2 hover:bg-gray-100">История школы</router-link>
            </li>
            <li>
              <router-link to="/about/mission" class="block px-4 py-2 hover:bg-gray-100">Миссия и цели</router-link>
            </li>
          </ul>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/events" class="hover:text-blue-600">Мероприятия</router-link>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/students" class="hover:text-blue-600">Школьникам</router-link>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/parents" class="hover:text-blue-600">Родителям</router-link>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/food" class="hover:text-blue-600">Питание</router-link>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/budget" class="hover:text-blue-600">Открытый бюджет</router-link>
        </li>
        <li class="mx-3 my-2">
          <router-link to="/organ" class="hover:text-blue-600">Открытый орган</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Menu",
  };
  </script>
  
  <style scoped>
  /* Можно добавить кастомную стилизацию для меню тут */
  </style>
  