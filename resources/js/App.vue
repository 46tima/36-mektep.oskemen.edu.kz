<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import AppLayout from './Layouts/AppLayout.vue';

export default {
  components: { AppLayout },
};
</script>
