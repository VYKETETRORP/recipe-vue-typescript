<template>
<Gallery />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Gallery from './views/Gallery.vue'
export default defineComponent({
  name: 'App',
  components : {
    Gallery,

  }
 
});
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css');
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/fontawesome.min.css" integrity="sha512-Rcr1oG0XvqZI1yv1HIg9LgZVDEhf2AHjv+9AuD1JXWGLzlkoKDVvE925qySLcEywpMAYA/rkg296MkvqBF07Yw==" crossorigin="anonymous" referrerpolicy="no-referrer"'); */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;

}



</style>

