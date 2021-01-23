import { mount } from '@vue/test-utils'
import Bill from '@/components/Bill.vue'

describe('Cart', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Bill)
    expect(wrapper.vm).toBeTruthy()
  })
})
