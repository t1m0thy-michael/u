const chai = require('chai')
const assert = chai.assert

import { decycle } from './decycle'

describe('decycle()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof decycle, 'function', 'Is a function')
	})

	it('Returns the same object', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		assert.ok(decycle(obj) === obj)
	})

	it('Returns a new object - deep equals', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		assert.deepEqual(decycle(obj), obj)
	})

	it('Returns the same array', function () {
		let arr = [{}, 1, 'a', [1, 2, 3]]
		assert.ok(decycle(arr) === arr)
	})

	it('Returns a new array - deep equals', function () {
		let arr = [{}, 1, 'a', [1, 2, 3]]
		assert.deepEqual(decycle(arr), arr)
	})



	it('Returns the same object', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		// @ts-ignore
		obj.e = obj
		assert.ok(decycle(obj) === obj)
	})

	it('Return object is not deep equal', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		// @ts-ignore
		obj.e = obj
		assert.deepEqual(decycle(obj), obj)
	})

	it('Returns the same array', function () {
		let arr = [{}, 1, 'a', [1, 2, 3]]
		arr.push(arr)
		assert.ok(decycle(arr) === arr)
	})

	it('Return arr does not contain itself', function () {
		let arr = [{}, 1, 'a', [1, 2, 3]]
		// @ts-ignore
		arr.push(arr)
		assert.notDeepInclude(decycle(arr), arr)
	})

})