<template>
  <div>
      <div class="container pt-5">
        <div class="row">
            <div class="col-sm-3">
                <Menu/>
            </div>

            <div class="col-sm-9">
                <AllProducts/>
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import AllProducts from "../components/AllProducts.vue";
import Menu from "../components/Menu.vue";

export default {
  components: {
    Menu,
    AllProducts
  },
};
</script>

<style>

</style>