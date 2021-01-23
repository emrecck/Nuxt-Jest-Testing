<template>
  <div class="container pt-5 mt-5">
    <div class="product-bilgi col-sm-12 row">
      <div class="product-image col-lg-6 col-sm-12 pb-sm-5">
        <a href=""
          ><img class="productimg" v-bind:src="productItem.imgSource" alt=""
        /></a>
      </div>

      <div class="baslik-sepet-ozellik col-lg-6 col-sm-12">
        <div class="product-baslik text-left clearfix">
          <h1 class="d-inline-block">{{ productItem.name }}</h1>
          <span class="float-right">{{ productItem.cost }} TL</span>
          <p>{{ productItem.subName }}</p>
        </div>

        <div class="product-sepet text-left col-sm-12 px-0">
          <span class="product-quantity">
            <label class="adet-label mt-4 pt-4">Adet:</label>

            <div class="buttons pb-5 mb-4">
              <div class="btn-group" role="group" aria-lael="Basic example">
                <button
                  :disabled="productItem.quantity <= 1"
                  @click="decQuantity"
                  type="button"
                  class="minus-button"
                  title="-"
                ></button>
                <input
                  type="text"
                  class="input-button"
                  v-model="value"
                />
                <button
                  @click="incQuantity"
                  type="button"
                  class="plus-button"
                  title="+"
                ></button>
              </div>
            </div>

            <input
              @click="add(productItem)"
              type="button"
              class="product-buton col-sm-12 col-lg-7 mb-5"
            />

            <div class="product-quality">
              <img
                src="../assets/images/urun/product_quality_icons.png"
                alt=""
              />
            </div>
            <img
              class="kargo-bedava-badge"
              src="../assets/images/urun/kargo_bedava_badge.png"
            />
          </span>
        </div>

        <div class="product-ozellik text-left mt-5 col-sm-12 px-0">
          <h3>
            <img src="../assets/images/urun/bugday_icon.png" alt="" /> Ürün
            Özellikleri
          </h3>
          <p>
            Taze, çıtır çıtır biberlerimizi günlük olarak hasat ediyor;
            siparişinizle topluyoruz. Yemeklerinizde, kahvaltılarınızda afiyetle
            yiyebilirsiniz.
          </p>
          <a href="https://www.hasanbey.com/tr/gunluk-cikanlar"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {},
  computed: {
    productItem() {
      return this.$store.state.productItem;
    },
    value: {
      get() {
        return this.$store.state.productItem.quantity;
      },
      set(value) {
        this.$store.commit("setQuantity", value);
      },
    },
  },
  methods: {
    add(item) {
      this.$store.commit("cart/add", item);
    },
    incQuantity(state) {
      this.$store.commit("incQuantity");
    },
    decQuantity(state) {
      this.$store.commit("decQuantity");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-image {
  max-width: 100%;
  width: 100%;
}
.productimg {
  max-width: 100%;
}
.product-baslik h1 {
  font-weight: bold;
  line-height: initial;
  font-size: 2.4rem;
}
.product-baslik span {
  color: #d53235;
  font-family: inherit;
  font-weight: bold;
  line-height: initial;
  display: initial;
  font-size: 2.4rem;
}
.product-baslik p {
  color: #737373;
  font-weight: bold;
  font-size: 1.6rem;
}
.product-sepet {
  position: relative;
}
.adet-label {
  font-size: 1.3rem;
  display: block;
  color: #b76f3b;
  text-align: left;
  font-weight: bold;
  margin: 5px 0;
}
.minus-button {
  background-image: url("../assets/images/urun/spinner_minus.png");
  background-clip: border-box;
  background-size: cover;
  border: 0;
  color: #b76f3b;
  width: 45px;
  height: 41px;
  font-size: 1.4rem;
  background-color: transparent;
}
.input-button {
  text-align: center;
  background-image: url("../assets/images/urun/spinner_bg.png");
  background-clip: border-box;
  background-size: cover;
  text-align: center;
  border: 0;
  color: #b76f3b;
  width: 45px;
  height: 41px;
  font-size: 1.4rem;
  background-color: transparent;
}
.plus-button {
  background-image: url("../assets/images/urun/spinner_plus.png");
  background-clip: border-box;
  background-size: cover;
  text-align: center;
  border: 0;
  color: #b76f3b;
  width: 45px;
  height: 41px;
  font-size: 1.4rem;
  background-color: transparent;
}
.product-buton {
  cursor: pointer;
  border-radius: 0;
  background: url(../assets/images/urun/sepete_ekle_btn.png) center center
    no-repeat !important;
  background-color: #74a02f !important;
  height: 46px;
  border: 0;
  color: transparent;
}
.product-buton:hover {
  background-color: rgb(99, 128, 42) !important;
  transition: background-color 0.4s ease-in-out 0s;
}
.product-quality img {
  width: 350px;
}
.kargo-bedava-badge {
  position: absolute;
  top: 0;
  width: 125px;
  margin: 0;
  float: right;
  right: 0;
  border: 0;
}
.product-ozellik h3 {
  color: rgb(183, 111, 59);
  font-family: kg_turning_tablesregular, sans-serif;
  text-align: left;
  font-size: 18px;
}
.product-ozellik p {
  font-size: 14px;
  color: rgb(136, 111, 93);
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>
