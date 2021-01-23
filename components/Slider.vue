<template>
  <div class="">
    <hooper
      class="hooper slider"
      :progress="true"
      :autoPlay="true"
      :playSpeed="2000"
      style="height: 300px"
      :infiniteScroll="true"
      :transition="3000"
      :wheelControl="false"
    >
      <slide class="slide"
        ><nuxt-link to="/allproducts"><img class="images" src="../assets/images/yilbasipaketi-138-.png" alt=""
      /></nuxt-link></slide>
      
      <slide class="slide"
        ><nuxt-link to="/allproducts"><img class="images" src="../assets/images/banner150-137-.jpg" alt=""
      /></nuxt-link></slide>

      <slide class="slide"
        ><nuxt-link to="/allproducts"><img class="images" src="../assets/images/sutbanner-136-.jpg" alt=""
      /></nuxt-link></slide>

      <slide class="slide"><nuxt-link to="/allproducts"><img class="images" src="../assets/images/gunluk_koy_yumurta-27-.jpg" alt=""
      /></nuxt-link></slide>

      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>

<style scoped>
.images {
  max-width: 100%;
  width: 100%;
  height: 100%;
  cursor:pointer;
}
.slide{
  max-width:100%;
  width: 100%;
}
</style>