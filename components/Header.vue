<template>
  <div class="col-sm-12 banner px-0">
    <div class="top-banner col-sm-12">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 slogan">
            <p>
              Hasanbey Çiftliği'nden taze taze, doğal sebze, meyve, katkısız
              reçel, salça, turşu...
            </p>
          </div>

          <div class="col-sm-4 d-flex justify-content-center uye-islemleri">
            <nuxt-link to="/signup" class="kayit text-decoration-none">
              <i class="fas fa-angle-right text-danger icon"></i>
              Üye Olun</nuxt-link
            >
            <nuxt-link
              to="/signin"
              href="#"
              class="giris ml-5 text-decoration-none"
            >
              <i class="fas fa-angle-right text-danger icon"></i>
              Üye Girişi</nuxt-link
            >
          </div>

          <div class="col-sm-2 sepet">
            <div class="dropdown">
              <button
                @click="dropdown = !dropdown"
                class="btn dropdown-buton dropdown-toggle"
              >
                <img src="../assets/images/banner/red_basket_icon.png" alt="" />
                <span class="totalPrice" v-if="cart.length > 0">
                  {{ total.toFixed(2) }} TL
                </span>
                <span class="totalPrice" v-else>0,00 Tl</span>
              </button>
              <!-- <nuxt-link to="/cart">
              </nuxt-link> -->
              <div v-if="dropdown" class="dropdown-body">
                <div v-if="cart.length > 0" class="card dd-body cart-items">
                  <div class="clearfix pt-3">
                    <ul class="w-100 float-left cart-list-top">
                      <li class="float-left pr-img"></li>
                      <li class="float-left pr-name">Ürün Adı</li>
                      <li class="float-left pr-price">Tutar</li>
                      <li class="float-left pr-delete">Sil</li>
                    </ul>
                  </div>
                  <div class="dropdown-list">
                    <table class="table">
                      <tr
                        class="row"
                        v-for="(Cartitem, index) in cart"
                        v-bind:key="Cartitem.id"
                      >
                        <td class="col-sm-3 py-3 img">
                          <nuxt-link to="/product">
                            <img
                              @click="addProductItem(Cartitem)"
                              v-bind:src="Cartitem.imgSource"
                              width="80"
                              alt=""
                            />
                          </nuxt-link>
                        </td>
                        <td class="col-sm-4 py-3 name">
                          <nuxt-link to="/product" class="text-dark"
                            ><span @click="addProductItem(Cartitem)">{{
                              Cartitem.name
                            }}</span></nuxt-link
                          >
                        </td>
                        <td class="col-sm-3 py-3 cost">
                          {{ (Cartitem.cost * Cartitem.quantity).toFixed(2) }} TL
                        </td>
                        <td class="col-sm-2 py-3 delete">
                          <button
                            @click="remove(index)"
                            class="border-0 bg-white"
                          >
                            <img src="../assets/images/sepet/basket-x.png" />
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div class="dropdown-bottom col-sm-12 py-2">
                    <div class="row">
                      <div class="col-5 clearfix">
                        <span
                          class="col-sm-12 px-0 text-left float-left ara-toplam"
                          >Ara Toplam: {{ total.toFixed(2) }} TL</span
                        >
                      </div>
                      <div class="col-7 px-0">
                        <div class="row px-0">
                          <button class="col-7 show-cart-button">
                            <nuxt-link
                              to="/cart"
                              class="text-white text-decoration-none"
                            >
                              Sepetimi Göster
                            </nuxt-link>
                          </button>

                          <button class="ml-2 col-4 buy-button">
                            <nuxt-link
                              to="/bill"
                              class="text-white text-decoration-none"
                            >
                              SATIN AL
                            </nuxt-link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="card dd-body text-center py-5">
                  <p>Alışveriş sepetinizde hiç ürün bulunmamaktadır.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-banner pb-2 col-sm-12">
      <div class="container temp">
        <div class="col-sm-12 logo d-flex justify-content-center pt-5">
          <nuxt-link to="/"
            ><img src="../assets/images/banner/logo.png"
          /></nuxt-link>
        </div>

        <div class="arama-bar">
          <div class="row">
            <div class="bar col px-0">
              <input
                id="searchbox"
                v-model="search"
                type="text"
                placeholder="Yumurta, Domates, Süt..."
              />
            </div>
            <div class="buton col px-0">
              <button type="button" @click="filterCategory()"> 
                <img src="../assets/images/banner/red_magnifier_icon.png" />
              </button>
            </div>
            <!-- <label for="">{{search}}</label>
            <label for="">{{ searched[0].name }}</label> -->
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Header",
  props: {},
  components: {
    Navbar,
  },
  data() {
    return {
      dropdown: false,
      search: "",
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart.itemList;
    },
    total() {
      let temp = this.$store.state.cart.itemList;
      let total = 0;
      for (let index in temp) {
        total += temp[index].cost * temp[index].quantity;
      }
      return total;
    },
  },
  methods: {
    remove(index) {
      this.$store.commit("cart/remove", index);
    },
    addProductItem(productItem) {
      this.$store.commit("addProductItem", productItem);
    },
    addProduct(product) {
      this.$store.commit("addProduct", product);
    },
    filterCategory(){
      this.$store.dispatch("filtered",this.search)
      this.$store.commit("allProduct/filterCategory",this.search)
    },
    // searchbox(){
    //   var input = document.getElementById("searchbox");
    //   input.addEventListener("keyup",function(event){
    //     if(event.code == 13)
    //     {
    //       event.preventDefault();
    //       document.getElementById("searchbox").click();
    //     }
    //   })
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dropdown button{
  outline: none;
}

.totalPrice {
  color: #d53235;
  font-size: 1.8rem;
  font-weight: bold;
}
.ara-toplam {
  font-size: 1.8rem;
  color: #4a4643;
  padding: 12px 0;
}
.show-cart-button {
  background-color: #b8b8b8;
  color: #fff;
  border: 0;
  height: 41px;
  font-size: 1.7rem;
  display: block;
  font-weight: 600;
  cursor: pointer;
}
.buy-button {
  background-color: #73a12e;
  color: #fff;
  border: 0;
  height: 41px;
  font-size: 1.7rem;
  display: block;
  font-weight: 600;
  cursor: pointer;
}
.pr-img {
  width: 130px;
  height: 1px;
}
.pr-name {
  width: 180px;
  text-align: center;
}
.pr-price {
  width: 80px;
  text-align: center;
}
.pr-delete {
  width: 80px;
  text-align: right;
}
.cart-list-top {
  padding-bottom: 15px;
}
.cart-list-top li {
  list-style-type: none;
}
.cost {
  color: #d53235;
  font-size: 1.9rem;
}
.dropdown-body {
  position: relative;
}
.dropdown-bottom {
  position: absolute;
  bottom: 0;
  display: block;
  outline: none;
}
.dropdown-bottom::before {
  content: "";
  width: 480px;
  height: 2px;
  display: block;
  position: absolute;
  top: -10px;
  background-position: 0 0;
  background: url(../assets/images/sepet/flyout_borders.png);
}
.cart-items {
  height: 400px;
}
.cart-items::after {
  content: "";
  width: 480px;
  height: 2px;
  display: block;
  position: absolute;
  top: 35px;
  background-position: 0 0;
  background: url(../assets/images/sepet/flyout_borders.png);
}
.dd-body {
  z-index: 10000;
  right: 60px;
  top: 0px;
  width: 550px;
  position: absolute;
  font-size: 1.5rem;
  font-weight: bold;
}
.dropdown {
  position: relative;
  outline: none;
}
.dropdown-list {
  height: 270px;
  overflow-x: hidden;
}
.banner {
  display: block;
}

.top-banner {
  background: url(../assets/images/banner/page_top_bg.png);
  height: 35px;
}
.slogan p {
  color: inherit;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 40px;
}
.uye-islemleri {
  line-height: 40px;
}
.kayit {
  font-weight: bold;
  font-size: 1.4rem;
  color: rgb(23, 43, 123);
  opacity: 0.8;
}
.kayit:hover {
  opacity: 1;
  color: rgb(23, 43, 123);
}
.giris {
  font-weight: bold;
  font-size: 1.4rem;
  color: #d53235;
}
.giris:hover {
  opacity: 0.8;
  color: #d53235;
}
.icon {
  font-size: 1.2rem;
}
.dropdown-buton img {
  width: 25px;
}
.bottom-banner {
  background: url(../assets/images/banner/nav_bg.png);
}
.temp {
  position: relative;
}
.arama-bar {
  position: absolute;
  right: 40px;
  top: 50px;
  outline: none;
}
.bar input {
  width: 269px;
  height: 33px;
  border: 1px solid #eee;
  background: url(../assets/images/banner/search_input_bg.png);
  border-bottom: 1px solid #dcdcdc;
  font-size: 1.2rem;
  font-weight: bold;
  color: #E23943;
  padding: 5px 8px;
  outline: none;
}
.bar input::-webkit-input-placeholder {
  font-size: 1.2rem;
  font-weight: bold;
  color: #E23943;
}
.buton button {
  border: 0px;
  background-color: white;
  width: 33px;
  height: 33px;
  outline: none;
  cursor: pointer;
}
.buton img {
  max-width: 100%;
  width: 15px;
  height: 15px;
}
.dropdown-buton[data-v-1a9bb128]:focus {
    outline: 0;
    box-shadow: none;
}
</style>
