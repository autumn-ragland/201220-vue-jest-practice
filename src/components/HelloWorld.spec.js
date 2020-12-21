import HelloWorld from './HelloWorld.vue'
import {mount} from '@vue/test-utils'

describe('HelloWorld.vue', () => {
    test('increments counter when clicked', async() => {
        const wrapper = mount(HelloWorld) 
        expect(wrapper.text()).toContain("Counter : 0")
        await wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain("Counter : 1")
    });
})