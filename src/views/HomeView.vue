<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const posts = ref(null)
const isLoading = ref(true)
const error = ref(null)
const images = ref(null)

onMounted(async () => {
  try {
    const [resPosts, resImages] = await Promise.all(
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/photos?_start=1&_limit=2'),
    )
    posts.value = resPosts.data
    images.value = resImages.data
    isLoading.value = false
  } catch (err) {
    isLoading.value = true
    error.value = err
  }
})
</script>

<template>
  <div class="home-data">
    <div v-for="post in posts" :key="post.id" class="box-data">
      <img
        v-if="images[post.id]"
        :src="images.value[post.id].ur"
        :alt="images.value[post.id].title"
      />
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style scoped>
.home-data {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  padding: 10px;
}
.box-data {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #999494;
  box-shadow: 0 0 0 #999494;
  padding: 5px 10px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
