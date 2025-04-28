<template>
    <div class="home">
      <section class="hero">
        <h2>Добро пожаловать на сайт нашей школы!</h2>
        <p>Мы рады представить вам наш образовательный процесс и все возможности, которые предоставляет школа.</p>
        <!-- <img src="@/assets/images/school-photo.jpg" alt="Фото школы" class="hero-image" /> -->
      </section>
  
      <section class="about">
        <h3>О нас</h3>
        <p>
          Коммунальное государственное учреждение «Средняя школа №36» предлагает своим ученикам качественное образование с использованием современных технологий.
        </p>
      </section>
  
      <section class="services">
        <h3>Наши услуги</h3>
        <ul>
          <li>Подготовка к ЕНТ</li>
          <li>Школьные кружки и секции</li>
          <li>Дополнительные образовательные программы</li>
        </ul>
      </section>
    </div>
  </template>
  
  <script setup>
  // Здесь можно импортировать компоненты, если нужно
  // Например, Header или Footer, если хочешь их подключить к этой странице
  </script>
  
  <style scoped>
  .home {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 30px;
  }
  
  .hero h2 {
    font-size: 2em;
    color: #007bff;
  }
  
  .hero p {
    font-size: 1.2em;
    margin: 20px 0;
  }
  
  .hero-image {
    max-width: 100%;
    height: auto;
  }
  
  .about, .services {
    margin-bottom: 30px;
  }
  
  h3 {
    font-size: 1.5em;
    color: #007bff;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  
  ul li {
    font-size: 1.1em;
    margin: 5px 0;
  }
  </style>
  