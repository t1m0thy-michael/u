const chai = require('chai')
const assert = chai.assert

import { isMap } from './isMap'

describe('isMap()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof isMap, 'function', 'Is a function')
	})

	it('returns true', function () {
		const myMap = new Map()
		assert.strictEqual(isMap(myMap), true)
	})

	it('returns false', function () {
		assert.strictEqual(isMap([]), false)
	})
})