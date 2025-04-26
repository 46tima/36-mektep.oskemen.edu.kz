import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'; // Импортируйте плагин Vue
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path'; // Импортируйте resolve для алиасов

export default defineConfig({
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js', // Добавьте этот алиас
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(), // Добавьте плагин Vue
        tailwindcss(),
    ],
});
