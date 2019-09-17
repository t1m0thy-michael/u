const chai = require('chai')
const assert = chai.assert

import { unique } from './unique'

describe('unique()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof unique, 'function', 'Is a function')
	})

	it('Correct details', function () {

		const a1 = [1, 1, 1]
		const a2 = [2, 2, 2]
		const a3 = [3, 3, 4]
		const a4 = [5, 6, 6]

		assert.deepEqual(unique(a1), [1])
		assert.deepEqual(unique(a1, a2, a3, a4), [1, 2, 3, 4, 5, 6])
	})
})