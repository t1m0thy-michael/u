const chai = require('chai')
const assert = chai.assert

import { makeSureItsAnArray } from './makeSureItsAnArray'

describe('makeSureItsAnArray()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof makeSureItsAnArray, 'function', 'Is a function')
	})

	it('Always returns an array', function () {
		assert.deepEqual(makeSureItsAnArray(undefined), [])
		assert.deepEqual(makeSureItsAnArray(null), [null])
		assert.deepEqual(makeSureItsAnArray(''), [''])
		assert.deepEqual(makeSureItsAnArray([]), [])
		assert.deepEqual(makeSureItsAnArray([1, 2, 3]), [1, 2, 3])

		var myIterable = {
			*[Symbol.iterator]() {
				yield 1
				yield 2
				yield 3
			}
		}
		assert.deepEqual(makeSureItsAnArray(myIterable), [1, 2, 3])
	})


})