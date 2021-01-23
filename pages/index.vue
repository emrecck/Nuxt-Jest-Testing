<template>
  <div>
    <div class="container">
      <Slider />
      <Products />
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Products from "../components/Products.vue";
export default {
  components: {
    Slider,
    Products
  }
};
</script>

<style>
.container {
  max-width: 1400px;
}
</style>