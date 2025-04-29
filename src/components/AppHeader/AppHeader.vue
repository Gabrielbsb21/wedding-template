<script setup lang="ts">
import styles from './header.module.css'
</script>

<template>
  <header :class="styles.header">
    <div class="container-xl">
      <h1 class="visuallyhidden">Nome do Casal</h1>
      <RouterLink to="/">
        <img src="" alt="Logo do casal" />
      </RouterLink>
      <nav aria-label="navegação principal">
        <ul>
          <li>
            <RouterLink to="/">Início</RouterLink>
          </li>
          <li>
            <RouterLink to="/presentes">Presentes</RouterLink>
          </li>
          <li>
            <RouterLink to="/contato">Contato</RouterLink>
          </li>
          <li>
            <RouterLink to="/sobre">Sobre</RouterLink>
          </li>
        </ul>
      </nav>
      <button>Trocar tema</button>
    </div>
  </header>
</template>
