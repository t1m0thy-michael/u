const chai = require('chai')
const assert = chai.assert

import { set } from './set'

describe('set()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof set, 'function', 'Is a function')
	})

	it('Sets correct value at correct path', function () {
		const obj1 = { a: [] }

		set(obj1, 'a.0.b.c.d', 1)
		// @ts-ignore
		assert.strictEqual(obj1.a[0].b.c.d, 1)

		set(obj1, ['a', '1', 'b', 'c', 'e'], 2)
		// @ts-ignore
		assert.strictEqual(obj1.a[1].b.c.e, 2)

	})
})