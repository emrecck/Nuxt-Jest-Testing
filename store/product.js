

export const state = () => ({
    productList : [],
    imageList:[
          {
            id: 0,
            imgSource: require("../assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg"),
          },
          {
            id: 1,
            imgSource: require("../assets/images/tum-urunler/urunler/yesil-zeytin-cizik-450-gr_500.jpeg"),
          },
          {
            id: 2,
            imgSource: require("../assets/images/tum-urunler/urunler/naturel-sizma-zeytinyagi-750-ml_500.jpeg"),
          },
          {
            id: 3,
            imgSource: require("../assets/images/tum-urunler/urunler/0001145_dogal-ev-yapimi-enginar-receli-450-gr_500.png"),
          },
          {
            id: 4,
            imgSource: require("../assets/images/tum-urunler/urunler/0001241_ev-yapimi-domates-receli-800-gr_500.png"),
          },
          {
            id: 5,
            imgSource: require("../assets/images/tum-urunler/urunler/0001080_dogal-ev-yapimi-ayva-receli-450-gr_500.png"),
          },
          {
            id: 6,
            imgSource: require("../assets/images/tum-urunler/urunler/0001036_kapya-biberi-turuncu-500-gr_500.png"),
          },
          {
            id: 7,
            imgSource: require("../assets/images/tum-urunler/urunler/0001127_citir-biber-tatli-_500.png"),
          },
          {
            id: 8,
            imgSource: require("../assets/images/tum-urunler/urunler/0000986_salatalik_500.png"),
          },
          {
            id: 9,
            imgSource: require("../assets/images/tum-urunler/urunler/0001005_koy-ekmegi-750-gr_500.png"),
          },
          {
            id: 10,
            imgSource: require("../assets/images/tum-urunler/urunler/0001267_nar-suyu-1-litre_500.jpeg"),
          },
          {
            id: 11,
            imgSource: require("../assets/images/tum-urunler/urunler/0001102_padisah-ayvasi_500.png"),
          },
          {
            id: 12,
            imgSource: require("../assets/images/tum-urunler/urunler/0001265_uzum-suyu_500.png"),
          },
          {
            id: 13,
            imgSource: require("../assets/images/tum-urunler/urunler/0001180_kahvaltilik-peynir-paketi_500.jpeg"),
          },
          {
            id: 14,
            imgSource: require("../assets/images/tum-urunler/urunler/0001113_merhaba-paketi_500.jpeg"),
          },
          {
            id: 15,
            imgSource: require("../assets/images/tum-urunler/urunler/0001278_yilbasi-paketi_500.jpeg"),
          },
          {
            id: 16,
            imgSource: require("../assets/images/tum-urunler/urunler/0000980_haftanin-kirmizi-kutusu_500.jpeg"),
          },
          {
            id: 17,
            imgSource: require("../assets/images/tum-urunler/urunler/0001131_kaliforniya-biberi-kirmizi-_500 (1).png"),
          },
          {
            id: 18,
            imgSource: require("../assets/images/tum-urunler/urunler/0001061_kapya-biberi-kirmizi-500-gr_500.png"),
          },
          {
            id: 19,
            imgSource: require("../assets/images/tum-urunler/urunler/0001038_kapya-biberi-sari-500-gr_500.png"),
          },
          {
            id: 20,
            imgSource: require("../assets/images/tum-urunler/urunler/0000981_dolmalik-biber_500.png"),
          },
          {
            id: 21,
            imgSource: require("../assets/images/tum-urunler/urunler/0000991_mis-salkim-domates_500.png"),
          },
          {
            id: 22,
            imgSource: require("../assets/images/tum-urunler/urunler/0001135_seker-domates_500.png"),
          },
          {
            id: 23,
            imgSource: require("../assets/images/tum-urunler/urunler/0001134_sari-seker-domates_500.png"),
          },
          {
            id: 24,
            imgSource: require("../assets/images/tum-urunler/urunler/0001044_minik-esmer-domates-500-gr_500.png"),
          },
          {
            id: 25,
            imgSource: require("../assets/images/tum-urunler/urunler/0001114_bergama-tulum-peyniri-nek-300-gr_500.jpeg"),
          },
          {
            id: 26,
            imgSource: require("../assets/images/tum-urunler/urunler/0001147_cecil-peyniri-250-gr_500.png"),
          },
          {
            id: 27,
            imgSource: require("../assets/images/tum-urunler/urunler/0001144_corekotlu-abaza-peyniri-250-gr_500.png"),
          },
          {
            id: 28,
            imgSource: require("../assets/images/tum-urunler/urunler/0001272_sli-peynir-400-gr_500.jpeg"),
          },
          {
            id: 29,
            imgSource: require("../assets/images/tum-urunler/urunler/0001095_dogal-kuru-domates-ciftlik-sosu-355-gr_500.png"),
          },
          {
            id: 30,
            imgSource: require("../assets/images/tum-urunler/urunler/0001094_dogal-kuru-domates-zeytinyagli-355-gr_500.png"),
          },
          {
            id: 31,
            imgSource: require("../assets/images/tum-urunler/urunler/0001206_ispanakli-eriste-makarnasi-260-gr_500.jpeg"),
          },
          {
            id: 32,
            imgSource: require("../assets/images/tum-urunler/urunler/0001103_dogal-domates-suyu-1365-gr_500.png"),
          },
          {
            id: 33,
            imgSource: require("../assets/images/tum-urunler/urunler/0000982_gunluk-cig-sut-5-lt-_500 (1).png"),
          },
          {
            id: 34,
            imgSource: require("../assets/images/tum-urunler/urunler/0001170_suzme-yogurt-1-kg_500.png"),
          },
          {
            id: 35,
            imgSource: require("../assets/images/tum-urunler/urunler/0001236_yayik-tereyagi-500-gr_500.jpeg"),
          },
          {
            id: 36,
            imgSource: require("../assets/images/tum-urunler/urunler/0001234_gunluk-cig-sut-1-lt-cam-sise_500.jpeg"),
          },
          {
            id: 37,
            imgSource: require("../assets/images/tum-urunler/urunler/0001119_dogal-koy-yumurtasi-6-adet_500.jpeg"),
          },
          {
            id: 38,
            imgSource: require("../assets/images/tum-urunler/urunler/0001122_dogal-koy-yumurtasi-15-adet_500.png"),
          },
          {
            id: 39,
            imgSource: require("../assets/images/tum-urunler/urunler/0001179_bez-sucuk-500-gr_500.jpeg"),
          },
          {
            id: 40,
            imgSource: require("../assets/images/tum-urunler/urunler/0001182_file-sucuk-500-gr_500.jpeg"),
          },
          {
            id: 41,
            imgSource: require("../assets/images/ürünler/0001030_dogal-koy-yumurtasi-60-adet_500.png"),
          },
          {
            id: 42,
            imgSource: require("../assets/images/ürünler/0001227_dolgulu-yesil-zeytin-sarimsakli-kekikli-500-gr_500.jpeg"),
          },
    ],
    productItem:'',
    filteredList : []
  })

  export const mutations = {
      addProduct(state,product){
        state.productList = product;
      },
      addProductItem(state,productItem){
        state.productItem = productItem;
      },
      setQuantity(state,value){
        state.productItem.quantity = value;
      },
      incQuantity(state){
        state.productItem.quantity+=1
      },
      decQuantity(state){
        state.productItem.quantity-=1
      },
      filter(state,search){
        state.filteredList = state.productList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
        )
      }
  }