<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader/AppHeader.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>
