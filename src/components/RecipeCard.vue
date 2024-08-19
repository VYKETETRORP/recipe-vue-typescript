<template>
  <div class="card">
    <img :src="details.strMealThumb" alt="" class="thumbnail" />
    <div>{{ details.strMeal }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'RecipeCard',
  props: {
    details: {
      type: Object as PropType<{ strMealThumb: string }>,
      required: true,
    },
  },
  setup(props) {
    return {
      details: props.details,
    };
  },
});
</script>

<style scoped>
.card {
  background-color: #fff;
  min-height: 270px;
  max-height: 320px;
  border-radius: 5px;
  padding: 10px;
}
.thumbnail{
  height: 180px;
  width: 100%;
  object-fit: cover;
}
</style>
