<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-header">
    <div class="site-identity">
      <h1><a href="#">Site Name</a></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/favorite">Favorit</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.site-header {
  border-bottom: 1px solid #ccc;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
}

.site-identity h1 {
  font-size: 1.5em;
  margin: 0.6em 0;
  display: inline-block;
}

.site-navigation ul,
.site-navigation li {
  margin: 0;
  padding: 0;
}

.site-navigation li {
  display: inline-block;
  margin: 1.4em 1em 1em 1em;
}
.router-link-exact-active {
  font-weight: 700;
  font-size: 20px;
}
</style>
