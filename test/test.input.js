const expect = chai.expect
import Vue from 'vue'
import Input from '../src/input'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
	it('存在Input', () => {
		expect(Input).to.be.exist
	})

	describe('props', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		it('接受属性-value', () => {
			vm = new Constructor({
				propsData: {
					value: 'normal'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.value).to.eq('normal')
		})

		it('接受属性-disabled', () => {
			vm = new Constructor({
				propsData: {
					disabled: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			expect(inputElement.disabled).to.eq(true)
		})

		it('接受属性-readonly', () => {
			vm = new Constructor({
				propsData: {
					readonly: true
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('input')
			// 这里的readonly，o必须大写，不然报错
			expect(inputElement.readOnly).to.equal(true)
		})

		it('接受属性-error', () => {
			vm = new Constructor({
				propsData: {
					error: '这是一个错误'
				}
			}).$mount()
			const inputElement = vm.$el.querySelector('span.errorMessage')
			expect(inputElement.innerText).to.equal('这是一个错误')
		})
	})

	describe('事件', () => {
		const Constructor = Vue.extend(Input)
		let vm
		afterEach(() => {
			vm.$destroy()
		})
		;['change', 'input', 'focus', 'blur'].forEach(eventName => {
			vm = new Constructor({}).$mount()
			const cb = sinon.fake()
			vm.$on(eventName, cb)
			let event = new Event(eventName)
			let inputElement = vm.$el.querySelector('input')
			inputElement.dispatchEvent(event)
			expect(cb).to.have.been.calledWith(event)
		})

		// it('支持 change 事件', () => {
		// 	vm = new Constructor({}).$mount()
		// 	const cb = sinon.fake()
		// 	vm.$on('change', cb)
		// 	// 触发change事件
		// 	let event = new Event('change')
		// 	let inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	expect(cb).to.have.been.calledWith(event)
		// })

		// it('支持 input 事件', () => {
		// 	vm = new Constructor({}).$mount()
		// 	const cb = sinon.fake()
		// 	vm.$on('input', cb)
		// 	let event = new Event('input')
		// 	let inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	expect(cb).to.have.been.calledWith(event)
		// })

		// it('支持 focus 事件', () => {
		// 	vm = new Constructor({}).$mount()
		// 	const cb = sinon.fake()
		// 	vm.$on('focus', cb)
		// 	let event = new Event('focus')
		// 	let inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	expect(cb).to.have.been.calledWith(event)
		// })

		// it('支持 blur 事件', () => {
		// 	vm = new Constructor({}).$mount()
		// 	const cb = sinon.fake()
		// 	vm.$on('blur', cb)
		// 	let event = new Event('blur')
		// 	let inputElement = vm.$el.querySelector('input')
		// 	inputElement.dispatchEvent(event)
		// 	expect(cb).to.have.been.calledWith(event)
		// })
	})
})
