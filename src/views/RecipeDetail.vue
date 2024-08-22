<template>
  <div class="container">
    <img :src="detail.strMealThumb" alt="Meal Image">
    <div class="details">
      <h3>{{ detail.strMeal }}</h3>
      <h5>{{ detail.strArea }}</h5>
      <p>{{ detail.strInstructions }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import http from "../httpCommon";

export default defineComponent({
  name: 'RecipeDetail',

  setup() {
    const detail = ref<any>({});
    const route = useRoute();

    const fetchData = async (id: string) => {
      try {
        console.log('Fetching data for ID:', id);
        const response = await http.get(`/lookup.php?i=${id}`);
        console.log('API Response:', response.data);
        detail.value = response.data.meals[0];
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    onMounted(() => {
      fetchData(route.params.id as string);
    });

    return {
      detail,
    };
  },
});
</script>

<style scoped>
.container {
  padding: 60px;
  display: flex;
}
.details {
  padding: 10px;
}
</style>
