import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavorit = defineStore('favoritProducts', () => {
  const favProducts = ref([])
  function addToFavorti(productId) {
    if (!favProducts.value.includes(productId)) {
      favProducts.value.push(productId)
    }
  }
  function removeFromFavorit(productId) {
    if (favProducts.value.includes(productId)) {
      favProducts.value = favProducts.value.filter((id) => id !== productId)
    }
  }
  function isFavorit(productId) {
    return favProducts.value.includes(productId)
  }

  return { favProducts, addToFavorti, removeFromFavorit, isFavorit }
})
