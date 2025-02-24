<script setup>
import useFetch from '@/services/useFetch'
import { useFavorit } from '@/stores/useFavorit'
import LinedSvg from '@/assets/images/LinedSvg.vue'
import UnlikeSvg from '@/assets/images/UnlikeSvg.vue'

const { products, isLoading, error } = useFetch('/site/api/v1/manage/store/products')
const favoritStore = useFavorit()
// const posts = ref(null)
// const isLoading = ref(true)
// const error = ref(null)
// const images = ref(null)

// onMounted(async () => {
//   try {
//     const [resPosts, resImages] = await Promise.all(
//       axios.get('https://jsonplaceholder.typicode.com/posts'),
//       axios.get('https://jsonplaceholder.typicode.com/photos?_start=1&_limit=2'),
//     )
//     posts.value = resPosts.data
//     images.value = resImages.data
//     isLoading.value = false
//   } catch (err) {
//     isLoading.value = true
//     error.value = err
//   }
// })
</script>

<template>
  <div v-if="isLoading">Please Wait....</div>
  <div v-else class="home-data">
    <div v-for="product in products" :key="product.id" class="box-data">
      <img
        :src="'https://carefree95.ir' + product.image"
        :alt="product.title"
        style="width: 100%"
      />
      <p>{{ product.title }}</p>
      <p>${{ product.price }}</p>
      <p v-if="error">error : {{ error }}</p>
      <p v-if="favoritStore.isFavorit"><LinedSvg /></p>
      <p v-if="!favoritStore.isFavorit"><UnlikeSvg /></p>
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
  height: auto;
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
