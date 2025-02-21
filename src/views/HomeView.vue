<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref(null)
const isLoading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = res.data
    isLoading.value = false
  } catch (err) {
    isLoading.value = true
    error.value = err
  }
})
</script>

<template>
  <div style="border: 1px solid #ff0000; padding: 10px">
    <div v-for="post in posts" :key="post.id">{{ post.id }} : {{ post.title }}</div>
  </div>
</template>
