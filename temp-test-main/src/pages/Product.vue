<template>
  <div class="row mt-5" v-if="product">
    <div class="col-4">
      <img src= "https://via.placeholder.com/150x100" class="w-100" />
    </div>
    <div class="col-8">
      <h1> product title </h1>
      <h3> 23 €</h3>

      <input type="text"  class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary">Add to Cart</button>

      <p class="mt-4">descizione del prodotto</p>
    </div>
  </div>
  </template>

<script>
export default {
  props: ['id'] 
};
</script>

<style>
</style>