export const state = () => ({
    itemList : []
    
  })

  export const mutations = {

    add(state, item){
      if( !state.itemList.find(i =>i.id ===item.id))
      {
        state.itemList.push(item)
      }else{
        state.itemList.find(i =>i.id === item.id).quantity+=1
      }
    },
    remove(state, index){
      state.itemList.splice(index, 1)
    },
    incCounter(state,index){
      state.itemList[index].quantity+=1
    },
    decCounter(state,index){
      state.itemList[index].quantity-=1
    }
  }