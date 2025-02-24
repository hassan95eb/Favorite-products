import axios from 'axios'
import { onMounted, ref } from 'vue'
export default function useFetch(url) {
  const products = ref(null)
  const isLoading = ref(true)
  const error = ref(null)
  async function fechData() {
    try {
      let response = await axios.get(url, {
        auth: {
          username: '09120000001',
          password: 'qwert12345',
        },
      })
      products.value = response.data.products
      isLoading.value = false
      console.log(response)
    } catch (err) {
      error.value = err
    }
  }
  onMounted(() => {
    fechData()
  })
  return { products, isLoading, error }
}
