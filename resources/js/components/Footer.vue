<template>
  <footer class="bg-gray-100 py-8 px-4 md:px-10 shadow-inner">
    <div class="max-w-5xl mx-auto text-center space-y-6">
      <!-- Заголовок и адрес -->
      <div>
        <h2 class="text-lg font-semibold text-gray-800 mb-2">Наш адрес</h2>
        <p class="text-sm text-gray-700 leading-relaxed">
          Республика Казахстан, 070004, ВКО, г. Усть-Каменогорск,<br />
          ул. Кабанбай батыра, 160
        </p>
      </div>

      <!-- Языковое переключение -->
      <div class="text-sm text-gray-700 space-x-2">
        <span class="font-medium">Язык:</span>
        <button class="hover:underline text-blue-600">Қазақша</button> |
        <button class="hover:underline text-blue-600">Русский</button>
      </div>

      <!-- Карта 2ГИС -->
      <div class="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://widgets.2gis.com/widget?type=firm&id=12807639721312712&options=hide_controls"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Кнопка "Как добраться" -->
      <div>
        <a
          href="https://2gis.kz/ust-kamenogorsk/firm/12807639721312712/82.628186%2C49.955081?m=82.628596%2C49.955309%2F18.75"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          🧭 Как добраться
        </a>
      </div>

      <!-- Копирайт -->
      <p class="text-xs text-gray-500">
        &copy; 2016–2022, КГУ «Средняя школа №36», Усть-Каменогорск,
        управление образования ВКО
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
