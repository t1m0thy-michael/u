const chai = require('chai')
const assert = chai.assert

import { randomInt } from './randomInt'

describe('randomInt()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof randomInt, 'function', 'Is a function')
	})

	it('Retuns a number', function () {
		assert.strictEqual(typeof randomInt(), 'number')
	})

	it('Always returns an integer', function () {
		for (let i = 0; i < 100; i++) {
			let result = randomInt()
			// @ts-ignore
			assert.strictEqual(result, parseInt(result), 'Integer')
		}
	})

	it('Retuns a number between min and max', function () {
		for (let i = 0; i < 100; i++) {
			let result = randomInt(29, 39)
			assert.ok((29 <= result && 39 >= result))
		}
	})
})