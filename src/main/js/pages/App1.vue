<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import imgUrl from "./../../resources/img/vue.svg"
</script>

<template>
  <div>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="imgUrl" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="Main Page" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
