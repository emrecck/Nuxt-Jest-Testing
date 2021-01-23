import { mount } from '@vue/test-utils'
import Bill from '@/components/Bill.vue'

describe('Cart', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Bill, {

      stubs: {
        NuxtLink: true,
        // Any other component that you want stubbed
      },
    }
      )
    expect(wrapper.vm).toBeTruthy()
  })
})
