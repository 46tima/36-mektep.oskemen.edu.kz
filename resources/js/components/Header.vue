<template>
    <header>
        <samp>Вход | Регистрация</samp><br>
        <samp>Қазақша | Русский</samp>
        <h1>
            Коммунальное государственное учреждение «Средняя школа №36» отдела
            образования по городу Усть-Каменогорску управления образования
            Восточно-Казахстанской области
        </h1>
        <h2>
            Қабылдау бөлімі: +7(7232) 26-84-48 Есепші: +7(7232) 26-02-01
            36_mektep_oskemen@vko.edu.kz Версия для слабовидящих
        </h2>
        <nav>
            <ul class="menu">
                <li><a href="/">Главная</a></li>
                <li><a href="/about">О нас</a></li>
                <li><a href="/services">Услуги</a></li>
                <li><a href="/contact">Контакты</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
};
</script>

<style scoped>
header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.menu {
    list-style-type: none;
    padding: 0;
}

.menu li {
    display: inline;
    margin: 0 15px;
}

.menu li a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

.menu li a:hover {
    text-decoration: underline;
}
</style>
