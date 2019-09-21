const chai = require('chai')
const assert = chai.assert

import { decycle } from './decycle'
import { undecycle } from './undecycle'

describe('undecycle()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof undecycle, 'function', 'Is a function')
	})

	it('\'Rebuilds\' none-cyclic deep equal object', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		let result = undecycle(decycle(obj))
		assert.ok(result === obj, 'Same object returned')
		assert.deepEqual(result, obj, 'Results deep equal when not cyclic')
	})

	it('Rebuilds cyclic deep equal object', function () {
		let obj = { a: {}, b: 1, c: 'a', d: [1, 2, 3] }
		// @ts-ignore
		obj.e = obj
		let result = undecycle(decycle(obj))
		assert.ok(result === obj, 'Same object returned')
		assert.deepEqual(result, obj, 'Results deep equal when cyclic')
	})
})