import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import cart from '@/store/cart'
import { cloneDeep } from 'lodash'

test('increment "count"',()=> {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(cloneDeep(cart))
    store.state.itemList = [
        {
            id: 0,
            name: "Dolgulu Yeşil Zeytin ( Bademli ) 500 Gr",
            subName: "500 Gr Badem Dolgulu Zeytin",
            cost:44.25,
            category:"Zeytin & Zeytinyağı",
            imgSource:"@/assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg",
            quantity:1
        }
    ]
    expect(store.state.itemList[0].quantity).toBe(1)
    store.commit('incCounter',0)
    expect(store.state.itemList[0].quantity).toBe(2)
})