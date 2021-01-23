<template>
  <div class="tum-urunler-main col-sm-12 px-0">
    <div class="col-sm-12">
      <ul id="side_category_menu" class="side_category_menu col-sm-12">
        <li :id="listItem.id" class="list-item" v-for="listItem in list" v-bind:key="listItem.id">
          <nuxt-link to="/allproducts" v-if="listItem.id == 1"><span @click="toggle(listItem)"  class="item-name active">{{ listItem.name }}</span></nuxt-link>
          <nuxt-link to="/allproducts" v-else ><span @click="toggle(listItem)" class="item-name"> {{ listItem.name }} </span></nuxt-link>
          <span v-if="listItem.show">
            <div
              v-for="subItem in listItem.subList"
              v-bind:key="subItem.id"
              class="pl-5 sub-item"
            >
                <nuxt-link to="/allproducts">
                  <span @click="filter(subItem.name)" class="sub-item">{{ subItem.name }}</span>
                </nuxt-link>
            </div>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  data() {
    return {
      list: [
        {
          id: 0,
          name: "Aile Boyu",
          show: false,
          active:false
        },
        {
          id: 1,
          name: "Tüm Ürünler",
          show: false,
          active:true
        },
        {
          id: 2,
          name: "Sebze & Meyve",
          show: false,
          active:false,
          subList: [
            {
              id: 0,
              name: "Biber",
            },
            {
              id: 1,
              name: "Domates",
            },
          ],
        },
        {
          id: 3,
          name: "Süt & Peynir",
          show: false,
          active:false,
          subList: [
            {
              id: 0,
              name: "Süt",
            },
            {
              id: 1,
              name: "Peynir",
            },
          ],
        },
        {
          id: 4,
          name: "Yumurta & Sucuk",
          show: false,
          active:false
        },
        {
          id: 5,
          name: "Salça & Turşu",
          show: false,
          active:false
        },
        {
          id: 6,
          name: "Zeytin & Zeytinyağı",
          show: false,
          active:false
        },
        {
          id: 7,
          name: "Reçel & Bal",
          show: false,
          active:false
        },
        {
          id: 8,
          name: "Sebzeler",
          show: false,
          active:false
        },
        {
          id: 9,
          name: "Ekmek",
          show: false,
          active:false
        },

        {
          id: 10,
          name: "Meyveler",
          show: false,
          active:false
        },
        {
          id: 11,
          name: "Hediye Paketleri",
          show: false,
          active:false
        },
        {
          id: 12,
          name: "Paketler",
          show: false,
          active:false
        },
      ],
    };
  },
  methods: {
    toggle: function (item) {
      this.filter(item.name);
      item.active = !item.active;
      item.show = !item.show;
      var liContainer = document.getElementById("side_category_menu");
      var lis = document.getElementsByClassName("list-item");
      for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("click",function(){
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.getElementsByClassName("item-name")[0].className += " active";
        })
      }
    },
    filter(category){
      this.$store.commit("allProduct/filterCategory",category)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side_category_menu {
  padding: 70px 20px 20px 20px;
  background: url(../assets/images/tum-urunler/side_pattern.png);
  position: relative;
  text-align: left;
}
.side_category_menu:before {
  background: url(../assets/images/tum-urunler/urunlerimiz_tabela.png) no-repeat;
  content: "";
  display: block;
  width: 500px;
  height: 66px;
  position: absolute;
  left: -6px;
  top: -8px;
}
.side_category_menu li {
  margin-bottom: 0;
  list-style-type: none;
}
.side_category_menu li:after {
  content: "";
  width: 100%;
  height: 3px;
  background: url(../assets/images/tum-urunler/side_item_border.png) no-repeat;
  display: block;
  margin: 4px 0;
}

.side_category_menu li a {
  color: #b67646;
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: bold;
  display: block;
  padding: 6px 0;
  font-size: 19px;
}

.side_category_menu li a:hover {
  color: #738638;
}
.side_category_menu li span.active,.sub-item{
  color: #738638;
}
.sub-item {
  letter-spacing: 1px;
  text-decoration: none;
  font-weight: bold;
  display: block;
  font-size: 19px;
}
</style>
