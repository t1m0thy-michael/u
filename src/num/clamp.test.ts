const chai = require('chai')
const assert = chai.assert

import { clamp } from './clamp'

describe('clamp()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof clamp, 'function')
	})

	it('Retuns a number', function () {
		assert.strictEqual(typeof clamp(1, 10, 11), 'number')
	})

	it('Returns expected value', function () {
		assert.strictEqual(clamp(1, 10, 11), 10, 'Clamps to max')
		assert.strictEqual(clamp(-10, 10, -23), -10, 'Clamps to min')
		assert.strictEqual(clamp(1, 10, 5), 5, 'Returns val')
		assert.strictEqual(clamp(1.5, 2.6, 2.5), 2.5, 'Clamps to float')
	})
})