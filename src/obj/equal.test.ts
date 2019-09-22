const chai = require('chai')
const assert = chai.assert

import { equal } from './equal'

describe('equal()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof equal, 'function', 'Is a function')
	})

	it('Returns true', function () {
		let obj1 = { a: { z: 999 }, b: 1, c: 'a', d: [1, 2, 3] }
		let obj2 = { a: { z: 999 }, b: 1, c: 'a', d: [1, 2, 3] }
		assert.ok(equal(obj1, obj2))

		assert.ok(equal(1, 1))
		assert.ok(equal('str', 'str'))

	})

	it('Returns false', function () {
		let obj1 = { a: { z: 999 }, b: 1, c: 'a', d: [1, 2, 3] }
		let obj2 = { a: { z: 111 }, b: 1, c: 'a', d: [1, 2, 3] }
		assert.notOk(equal(obj1, obj2))

		assert.notOk(equal(1, 2))
	})
})



