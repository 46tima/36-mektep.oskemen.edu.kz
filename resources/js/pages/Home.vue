<template>
  <AppLayout>
    <MainContent />
  </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue'
import MainContent from '@/Components/MainContent.vue'

export default {
  name: 'Home',
  components: { AppLayout, MainContent }
}
</script>
