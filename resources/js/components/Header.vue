<template>
    <header>
        <div class="head-line">
            <div class="logo-container">
                <img :src="logo" alt="Логотип" class="logo" />
                <div>
                    Коммунальное государственное учреждение «Средняя школа №36»
                    отдела образования по городу Усть-Каменогорску управления
                    образования Восточно-Казахстанской области
                </div>
            </div>

            <div class="top-bar">
                <div class="auth-links">
                    <a href="#">Вход</a> | <a href="#">Регистрация</a>
                </div>
                <div class="language-switch">
                    <a href="#">Қазақша</a> | <a href="#">Русский</a>
                </div>
            </div>
        </div>

        <div class="telefon-box">
            Қабылдау бөлімі: +7(7232) 26-84-48
            Есепші: +7(7232) 26-02-01
            36_mektep_oskemen@vko.edu.kz
        </div>

        <nav>
            <ul class="menu">
                <li><router-link to="/">Информация</router-link></li>
                <li><router-link to="/about">О школе</router-link></li>
                <li><router-link to="/services">Услуги</router-link></li>
                <li><router-link to="/contact">Контакты</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
import logo from "@/assets/images/logo.png";

export default {
    name: "Header",
    data() {
        return {
            logo,
        };
    },
};
</script>

<style scoped>
header {
    height: 210px;
    position: relative;
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.head-line {
    height: 40px;
    background-color: #f6f6f6;
}

.logo-container {
    margin-bottom: 10px;
}

.logo {
    height: 80px;
}

/* Новый блок для верхней полоски */
.top-bar {
    display: flex;
    justify-content: center;
    gap: 50px; /* расстояние между входом и языками */
    margin-bottom: 10px;
    font-size: 14px;
}

.top-bar a {
    color: #343a40;
    text-decoration: none;
    font-weight: 500;
}

.top-bar a:hover {
    text-decoration: underline;
}

.telefon-box {
    position: absolute;
    left: 730px;
    top: 40px;
    width: 200px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.nav {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-right: 50px;
}

.menu {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
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
