import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Cart from '@/components/Cart'
import cart from '../../store/cart'

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
            ]
        }
        mutations = {
            remove: jest.fn(),
            mutationInput: jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                cart: {
                    state,
                    mutations,
                    namespaced:true
                }
            }
        })
    })

    it('Cart.vue', () => {
        const wrapper = shallowMount(Cart, { store, localVue, 
            stubs: {
                NuxtLink: true,
                // Any other component that you want stubbed
              }
        })
        const buttons = wrapper.findAll('button').at(2).trigger('click')
        expect(mutations.remove).toHaveBeenCalled()
    })
})