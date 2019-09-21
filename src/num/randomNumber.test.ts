const chai = require('chai')
const assert = chai.assert

import { randomNumber } from './randomNumber'

describe('randomNumber()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof randomNumber, 'function')
	})

	it('Retuns a number', function () {
		assert.strictEqual(typeof randomNumber(), 'number')
	})

	it('Retuns a number between default min (0) and default max (10)', function () {
		for (let i = 0; i < 100; i++) {
			let result = randomNumber()
			assert.ok((0 <= result && 10 >= result))
		}
	})
})