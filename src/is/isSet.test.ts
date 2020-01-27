const chai = require('chai')
const assert = chai.assert

import { isSet } from './isSet'

describe('isSet()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isSet, 'function', 'Is a function')
	})

	it('returns true', function () {
		const mySet = new Set()
		assert.strictEqual(isSet(mySet), true)
	})

	it('returns false', function () {
		assert.strictEqual(isSet([]), false)
	})
})