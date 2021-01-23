<template>
  <div class="col-sm-12 banner px-0">
    <div class="col-sm-12 my-2">
      <nav>
        <div class="container">
          <ul class="nav d-flex justify-content-around col-sm-12 ">
            <li class="nav-items">
              <nuxt-link to="/"><div class="anasayfa"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2">
              <nuxt-link to="/"><div class="ciftlik"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('')">
              <nuxt-link to="/allproducts"><div class="tum-urunler"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Sebzeler')">
              <nuxt-link to="/allproducts" ><div class="domates-biber"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Süt')">
              <nuxt-link to="/allproducts"><div class="sut-peynir"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Yumurta & Sucuk')">
              <nuxt-link to="/allproducts"><div class="yumurta-sucuk"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Salça & Turşu')">
              <nuxt-link to="/allproducts"><div class="salca-tursu"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Zeytin & Zeytinyağı')">
              <nuxt-link to="/allproducts"><div class="zeytin-zeytinyagi"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Reçel & Bal')">
              <nuxt-link to="/allproducts"><div class="recel-bal"></div></nuxt-link>
            </li>
            <li class="nav-items mt-2" @click="filter('Ekmek')"> 
              <nuxt-link to="/allproducts"><div class="ekmek"></div></nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  methods: {
      filter(category){
      this.$store.commit("allProduct/filterCategory",category)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <!-- background-color: #E64452; -->
<style scoped>
.container{
  max-width: 1140px;
}

.bottom-banner {
  background: url(../assets/images/banner/nav_bg.png);
}
.anasayfa {
  background: url(../assets/images/banner/kategori/anasayfa.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 65px;
  transition:all 0.2s ease-in 0s;  
}

.ciftlik {
  background: url(../assets/images/banner/kategori/ciftlik.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 45px;
  transition:all 0.2s ease-in 0s;  
}

.tum-urunler {
  background: url(../assets/images/banner/kategori/tum-urunler.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
  transition:all 0.2s ease-in 0s;  
}

.domates-biber {
  background: url(../assets/images/banner/kategori/sebze-meyve.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
  transition:all 0.2s ease-in 0s;  
}

.sut-peynir {
  background: url(../assets/images/banner/kategori/sut-peynir.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
  transition:all 0.2s ease-in 0s;  
}

.yumurta-sucuk {
  background: url(../assets/images/banner/kategori/yumurta.png) no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
  transition:all 0.2s ease-in 0s;  
}

.salca-tursu {
  background: url(../assets/images/banner/kategori/salca-tursu.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
  transition:all 0.2s ease-in 0s;  
}

.zeytin-zeytinyagi {
  background: url(../assets/images/banner/kategori/zeytin-zeytinyagi.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
  transition:all 0.2s ease-in 0s;  
}

.recel-bal {
  background: url(../assets/images/banner/kategori/recel-bal.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
  transition:all 0.2s ease-in 0s;  
}

.ekmek {
  background: url(../assets/images/banner/kategori/ekmek.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
  transition:all 0.2s ease-in 0s;  
}

.anasayfa:hover {
  background: url(../assets/images/banner/kategori/black/anasayfa.png) no-repeat
    center;
  background-size: contain;
  background-position: center;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 65px;
}

.ciftlik:hover {
  background: url(../assets/images/banner/kategori/black/ciftlik.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  height: 50px;
  width: 45px;
  max-width: 100%;
}

.tum-urunler:hover {
  background: url(../assets/images/banner/kategori/black/tum-urunler.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.domates-biber:hover {
  background: url(../assets/images/banner/kategori/black/sebze-meyve.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.sut-peynir:hover {
  background: url(../assets/images/banner/kategori/black/sut-peynir.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 70px;
}

.yumurta-sucuk:hover {
  background: url(../assets/images/banner/kategori/black/yumurta-sucuk.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 100px;
}

.salca-tursu:hover {
  background: url(../assets/images/banner/kategori/black/salca-tursu.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 90px;
}

.zeytin-zeytinyagi:hover {
  background: url(../assets/images/banner/kategori/black/zeytin-zeytinyagi.png)
    no-repeat center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 120px;
}

.recel-bal:hover {
  background: url(../assets/images/banner/kategori/black/recel-bal.png) no-repeat
    center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 80px;
}

.ekmek:hover {
  background: url(../assets/images/banner/kategori/black/ekmek.png) no-repeat
  center;
  background-size: contain;
  background-color: transparent;
  max-width: 100%;
  height: 50px;
  width: 50px;
}
</style>
