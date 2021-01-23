<template>
  <div class="products col-sm-12">
    <div class="row">
      <div class="col-sm-4 px-0 p-2" v-for="pitem in product" v-bind:key="pitem.id">
        <div class="col-sm-12 p-3 border-layer">
          <div class="col-sm-12 px-0 urun">
            <div class="col-sm-12 p-0">
              <a href="#">
                <nuxt-link to="/product"><img @click="addProductItem(pitem)" class="urun-img" v-bind:src="pitem.imgSource" /></nuxt-link>
              </a>
            </div>

            <div class="col-sm-12 pt-3 px-0">
              <h3 class="urun-isim text-left cursor">{{ pitem.name.substr(0,30) }}...</h3>
              <h5 class="urun-alt-isim text-left">{{ pitem.subName }}</h5>
            </div>

            <div class="fiyat-at-sepete clearfix">
              <div class="row">
                <div class="col-sm-6">
                  <h3 class="urun-fiyat text-left">{{ pitem.cost }} TL</h3>
                </div>

                <button @click="addItem(pitem)" class="col-sm-6 at-sepete-buton">
                  <!-- <a class="col-sm-6 at-sepete-buton"> -->
                    <img src="../assets/images/banner/at_sepete_sprite.png" />
                  <!-- </a> -->
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  props: {},
  computed:{
    product(){
      if ( this.$store.state.allProduct.filteredCategory.length > 0){
        return this.$store.state.allProduct.filteredCategory
      }else{
        return this.$store.state.allProduct.allProductList
      }
      
    },
  },
  methods: {
    addItem(item){
      this.$store.commit('cart/add', item);
    },
    updateProduct(product){
      this.$store.dispatch('updateProducts',products)
    },
    addProductItem(productItem){
      this.$store.commit('addProductItem',productItem)
    },

  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cursor:hover{
  cursor:pointer;
}
img {
  max-width: 100%;
  width: 100%;
}
.border-layer {
  border: 1px solid #dcdcdc;
  transition: border-color 0.3s ease-in 0.1s;
}
.border-layer:hover {
  border-color: #d53235;
}
.urun-img {
  transition: all 0.3s ease-in 0s;
}
.urun-img:hover {
  opacity: 0.8;
}
.urun-fiyat {
  font-size: 2.5rem;
  color: #d53235;
}
.at-sepete-buton {
  cursor: pointer;
  border: none;
  outline:none;
  background-color: transparent;
}
.at-sepete-buton img {
  height: 36px;
  width: 115px;
}

/* .at-sepete-button{
    cursor: pointer;
    margin-top: -55px;
    margin-left: 185px;
    float: right;
    border: 0px;
    background-color: transparent;
} */

.at-sepete-button img {
  /* height: 36px;
    width: 115px; */
}

.at-sepete-buton:active,
.at-sepete-buton:focus {
  border: 0px;
}

.yeni-lezzetlerimiz {
  height: 600px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.reklam-yeni-lezzetlerimiz {
  margin-top: 9px;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
}

.reklam-yeni-lezzetlerimiz img {
  margin-left: 7px;
  padding: 0px;
}

.ciftlikten-sectiklerimiz {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.urun-alt-isim {
  text-overflow: ellipsis;
  color: #737373;
  font-size: 1.35rem;
}
</style>
