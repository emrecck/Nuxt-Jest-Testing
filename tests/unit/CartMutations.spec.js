import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from '@/components/Cart'
import cart from '@/store/cart'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Cart.vue',()=> {
    let mutations
    let state
    let store
    
    beforeEach(() => {
       
        state = {
            itemList : [
                {
                    id: 0,
                    name: "Dolgulu Yeşil Zeytin ( Bademli ) 500 Gr",
                    subName: "500 Gr Badem Dolgulu Zeytin",
                    cost:44.25,
                    category:"Zeytin & Zeytinyağı",
                    imgSource:"@/assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg"
                }
            ],
            productList: [
                {
                    id: 0,
                    name: "Dolgulu Yeşil Zeytin ( Bademli ) 500 Gr",
                    subName: "500 Gr Badem Dolgulu Zeytin",
                    cost:44.25,
                    category:"Zeytin & Zeytinyağı",
                    imgSource:"@/assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg"
                }
            ],
            imageList: [
                {
                    id: 0,
                    imgSource: "@/assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg"
                }
            ],
            productItem:'',
            allProductList : [
                {
                    id: 0,
                    name: "Dolgulu Yeşil Zeytin ( Bademli ) 500 Gr",
                    subName: "500 Gr Badem Dolgulu Zeytin",
                    cost:44.25,
                    category:"Zeytin & Zeytinyağı",
                    imgSource:"@/assets/images/tum-urunler/urunler/yesil-zeytin-kirma-450-gr_500.jpeg"
                }
            ],
            filteredCategory : []
        }
       
        mutations = {
            addProductItem: jest.fn(),
            add: jest.fn(),
            remove: jest.fn(),
            mutationInput: jest.fn(),
            incCounter :jest.fn(),
            decCounter :jest.fn(),
        }

        store = new Vuex.Store({
            modules: {
                cart: {
                    state,
                    mutations,
                    namespaced:true
                },
                allProduct: {
                    state,
                    mutations,
                    namespaced:true
                }
            },
            state,
            mutations,
            namespaced:true
        })
        
    })

    it('Cart.vue remove button', () => {
        const wrapper = shallowMount(Cart, { store, localVue, 
            stubs: {
                NuxtLink: true,
                // Any other component that you want stubbed
              } })
        wrapper.findAll('button').at(0).trigger('click')
        expect(mutations.decCounter).toHaveBeenCalled()
    }),
    it('Cart.vue increament button', () => {
        const wrapper = shallowMount(Cart, { store, localVue, 
            stubs: {
                NuxtLink: true,
                // Any other component that you want stubbed
              } })
        wrapper.findAll('button').at(1).trigger('click')
        expect(mutations.incCounter).toHaveBeenCalled()
    }),
    it('Cart.vue decreament button', () => {
        const wrapper = shallowMount(Cart, { store, localVue, 
            stubs: {
                NuxtLink: true,
                // Any other component that you want stubbed
              } })
        wrapper.findAll('button').at(2).trigger('click')
        expect(mutations.remove).toHaveBeenCalled()
    })
    it('Cart.vue addProductItem',()=> {
        const wrapper = shallowMount(Cart, { store, localVue,
            stubs: {
                NuxtLink: true
            }})
        wrapper.findAll('img').trigger('click')
        expect(mutations.addProductItem).toHaveBeenCalled()
    })
 
})