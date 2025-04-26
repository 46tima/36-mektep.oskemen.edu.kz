<template>
    <div>
        <h1>Управление меню</h1>
        <form @submit.prevent="addMenuItem">
            <input v-model="newMenuItem.title" placeholder="Название" required />
            <input v-model="newMenuItem.url" placeholder="URL" required />
            <button type="submit">Добавить</button>
        </form>
        <ul>
            <li v-for="item in menuItems" :key="item.id">
                {{ item.title }} - {{ item.url }}
                <button @click="editMenuItem(item)">Редактировать</button>
                <button @click="deleteMenuItem(item.id)">Удалить</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [],
            newMenuItem: {
                title: '',
                url: ''
            }
        };
    },
    methods: {
        fetchMenuItems() {
            axios.get('/api/menu-items').then(response => {
                this.menuItems = response.data;
            });
        },
        addMenuItem() {
            axios.post('/api/menu-items', this.newMenuItem).then(() => {
                this.fetchMenuItems();
                this.newMenuItem.title = '';
                this.newMenuItem.url = '';
            });
        },
        editMenuItem(item) {
            // Логика редактирования
        },
        deleteMenuItem(id) {
            axios.delete(`/api/menu-items/${id}`).then(() => {
                this.fetchMenuItems();
            });
        }
    },
    mounted() {
        this.fetchMenuItems();
    }
};
</script>
