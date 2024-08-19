<template>
  <div class="container">
    <div class="header">
      <div class="title">Recipe</div>

      <div class="input-wrapper">
        <input type="text" />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </div>
    <div class="list">
      <RecipeCard v-for="recipe in recipe" :details="recipe "/>
     
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecipeCard from "../components/RecipeCard.vue";
import http from '../httpCommon.ts'
import {onMounted, ref} from 'vue'
export default defineComponent({
  name: "Gallery",
  components: {
    RecipeCard,
  },
  setup(){

    const recipe = ref ([])
    onMounted (()=>{

http.get('/filter.php?a=Canadian').then((res)=>{
  console.log('res',res)
  recipe.value=res.data.meals
})

});
return {
  recipe,
}
  }



});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.header {
  padding: 10px;
  display: flex;
}
.title {
  flex: 1;
}
.input-wrapper {
  border: 2px solid grey;
  border-radius: 5px;
}
.input-wrapper input {
  outline: none;
  border: none;
}
.list {
  height: 90vh;
  /* flex: 1; */
  background: #bdc3c7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c3e50,
    #bdc3c7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2c3e50, #bdc3c7);
  padding-top: 60px;
  padding-left: 50px;
  padding-right: 50px;

  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
</style>
