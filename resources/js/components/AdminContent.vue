<template>
    <div>
      <h1>Управление контентом</h1>
      <table>
        <thead>
          <tr>
            <th>Заголовок</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in content" :key="item.id">
            <td>{{ item.title }}</td>
            <td>
              <router-link :to="`/admin/content/${item.id}/edit`">Редактировать</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        content: [],
      };
    },
    created() {
      this.fetchContent();
    },
    methods: {
      async fetchContent() {
        const response = await axios.get('/api/admin/content');
        this.content = response.data;
      },
    },
  };
  </script>
  