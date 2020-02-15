import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon.vue'
import ButtonGroup from './Button-group.vue'
import Input from './Input.vue'
import Row from './Row.vue'
import Col from './Col.vue'
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Input.name, Input)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
new Vue({
	el: '#app',
	data: {
		loading: true,
		loading1: false,
		message: ''
	}
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

// 单元测试
try {
	{
		const Construtor = Vue.extend(Button)
		const button = new Construtor({
			propsData: {
				icon: 'setting'
			}
		}).$mount()
		let useElement = button.$el.querySelector('use')
		expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
		button.$el.remove()
		button.$destroy()
	}
	{
		const Construtor = Vue.extend(Button)
		const vm = new Construtor({
			propsData: {
				icon: 'settings',
				loading: true
			}
		})
		vm.$mount()
		let useElement = vm.$el.querySelector('use')
		let href = useElement.getAttribute('xlink:href')
		expect(href).to.eq('#i-loading')
		vm.$el.remove()
		vm.$destroy()
	}
	{
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Construtor = Vue.extend(Button)
		const vm = new Construtor({
			propsData: {
				icon: 'setting'
			}
		}).$mount(div)
		let svg = vm.$el.querySelector('svg')
		let { order } = window.getComputedStyle(svg)
		expect(order).to.eq('1')
		vm.$el.remove()
		vm.$destroy()
	}
	{
		const div = document.createElement('div')
		document.body.appendChild(div)
		const Construtor = Vue.extend(Button)
		const vm = new Construtor({
			propsData: {
				icon: 'settings',
				iconPosition: 'right'
			}
		})
		vm.$mount(div)
		let svg = vm.$el.querySelector('svg')
		let { order } = window.getComputedStyle(svg)
		expect(order).to.eq('2')
		vm.$el.remove()
		vm.$destroy()
	}
	{
		// mock
		const Construtor = Vue.extend(Button)
		const vm = new Construtor({
			propsData: {
				icon: 'settings'
			}
		}).$mount()
		let spy = chai.spy(function() {})
		vm.$on('click', spy)
		let button = vm.$el
		button.click()
		expect(spy).to.have.been.called()
		vm.$el.remove()
		vm.$destroy()
	}
} catch (error) {
	window.errors = [error]
} finally {
	window.errors &&
		window.errors.forEach(err => {
			console.error(err.message)
		})
}
