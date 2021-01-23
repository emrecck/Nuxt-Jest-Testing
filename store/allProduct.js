export const state = () => ({
    allProductList : [],
    filteredCategory : []
  })


export const mutations = {
    addAllProduct(state,allProduct){
      state.allProductList = allProduct;
    },
    filterCategory(state,category){
      state.filteredCategory = state.allProductList.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
      )
    }
}

export const actions = {
  setAllProducts(Context, products){
    Context.commit("addAllProduct",products)
  }
}