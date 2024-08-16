<template>
  <div class="header">
    <div class="title">Recipe</div>

    <div class="input-wrapper">
      <input type="text">
    <i class="fa fa-search" aria-hidden="true"></i>
    </div>

  


  </div>  <div class="list">
      <RecipeCard />

    </div>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import RecipeCard from '../components/RecipeCard.vue'
 export default defineComponent({
   name: 'Gallery',
   components : {
    RecipeCard,
 
   }
  
 });
 </script>
 <style scoped>

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
  margin-top: 60px;
 }
 </style>