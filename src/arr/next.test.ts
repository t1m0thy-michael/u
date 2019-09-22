const chai = require('chai')
const assert = chai.assert

import { next } from './next'

describe('next()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof next, 'function', 'Is a function')
	})

	it('Correct details', function () {

		const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1]

		const fn = (val: number) => val === 1

		assert.strictEqual(next(arr, 1, fn).val, 1, 'Filter is function: Next occurrence of 1 from idx 1 <value>')
		assert.strictEqual(next(arr, 1, fn).idx, 4, 'Filter is function: Next occurrence of 1 from idx 1 <idx>')

		assert.strictEqual(next(arr, 3, fn).val, 1, 'Filter is function: Next occurrence of 1 from idx 3 <value>')
		assert.strictEqual(next(arr, 3, fn).idx, 4, 'Filter is function: Next occurrence of 1 from idx 3 <idx>')

		assert.strictEqual(next(arr, 1, 1).val, 1, 'Filter is value: Next occurrence of 1 from idx 1 <value>')
		assert.strictEqual(next(arr, 1, 1).idx, 4, 'Filter is value: Next occurrence of 1 from idx 1 <idx>')

		assert.strictEqual(next(arr, 3, 1).val, 1, 'Filter is value: Next occurrence of 1 from idx 3 <value>')
		assert.strictEqual(next(arr, 3, 1).idx, 4, 'Filter is value: Next occurrence of 1 from idx 3 <idx>')

		assert.strictEqual(next(arr, 5).val, 3, 'No filter given')
		assert.strictEqual(next(arr, 5).idx, 6, 'No filter given')

	})

	it('{val: undefined, idx: -1} when there is no next...', function () {

		const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1]

		const fn = (val: number) => val === 9

		assert.strictEqual(next(arr, 1, fn).val, undefined)
		assert.strictEqual(next(arr, 1, fn).idx, -1)

	})

})