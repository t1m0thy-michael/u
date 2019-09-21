const chai = require('chai')
const assert = chai.assert

import { scale } from './scale'

describe('scale()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof scale, 'function', 'Is a function')
	})

	it('Retuns a number', function () {
		assert.strictEqual(typeof scale(1, 2, 3, 4, 5), 'number')
	})

	it('Retuns correctly scaled number', function () {
		assert.strictEqual(scale(5, 0, 10, 0, 1), 0.5)
	})
})