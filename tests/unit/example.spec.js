import { shallowMount } from '@vue/test-utils'
import Bill from '@/components/Bill.vue'

describe('Bill', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Bill)
    expect(wrapper.text()).toContain("Fatura Adresi")
  })
})

