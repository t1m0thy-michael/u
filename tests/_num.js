const chai = require('chai')
const assert = chai.assert

import u_num from '../src/_num'

describe('_num', function () {

	describe('clamp()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_num.clamp, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u_num.clamp(1,2,3), 'number')
		})

		it('Returns val', function () {
			assert.strictEqual(u_num.clamp(0, 10, 5), 5)
		})

		it('Clamps to min', function () {
			assert.strictEqual(u_num.clamp(0, 10, -1), 0)
		})

		it('Clamps to max', function () {
			assert.strictEqual(u_num.clamp(0, 10, 11), 10)
		})
	})

	describe('scale()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_num.scale, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u_num.scale(1, 2, 3, 4, 5), 'number')
		})

		it('Retuns correctly scaled number', function () {
			assert.strictEqual(u_num.scale(5, 0, 10, 0, 1), 0.5)
		})
	})

	describe('randomNumber()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_num.randomNumber, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u_num.randomNumber(), 'number')
		})

		it('Retuns a number between default min (0) and default max (10)', function () {
			for (let i = 0; i < 100; i++) {
				let result = u_num.randomNumber()
				assert.ok((0 <= result && 10 >= result))
			}
		})

		it('Retuns a number between min and max', function () {
			for (let i = 0; i < 100; i++) {
				let result = u_num.randomNumber(19, 21)
				assert.ok((19 <= result && 21 >= result))
			}
		})
	})

	describe('randomInt()', function () {

		it('Is a function', function () {
			assert.strictEqual(typeof u_num.randomInt, 'function', 'Is a function')
		})

		it('Retuns a number', function () {
			assert.strictEqual(typeof u_num.randomInt(), 'number')
		})

		it('Always returns an integer', function () {
			for (let i = 0; i < 100; i++) {
				let result = u_num.randomInt()
				// @ts-ignore
				assert.strictEqual(result, parseInt(result), 'Integer')
			}
		})

		it('Retuns a number between min and max', function () {
			for (let i = 0; i < 100; i++) {
				let result = u_num.randomInt(29, 39)
				assert.ok((29 <= result && 39 >= result))
			}
		})
	})
})