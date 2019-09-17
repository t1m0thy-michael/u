const chai = require('chai')
const assert = chai.assert

import { previous } from './previous'

describe('previous()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof previous, 'function', 'Is a function')
	})

	it('Correct details', function () {

		const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1]

		const fn = (val: number) => val === 1

		assert.strictEqual(previous(arr, 8, fn).val, 1, 'Filter is function: Previous occurrence of 1 from idx 1 <value>')
		assert.strictEqual(previous(arr, 8, fn).idx, 4, 'Filter is function: Previous occurrence of 1 from idx 1 <idx>')

		assert.strictEqual(previous(arr, 3, fn).val, 1, 'Filter is function: Previous occurrence of 1 from idx 3 <value>')
		assert.strictEqual(previous(arr, 3, fn).idx, 0, 'Filter is function: Previous occurrence of 1 from idx 3 <idx>')

		assert.strictEqual(previous(arr, 8, 1).val, 1, 'Filter is function: Previous occurrence of 1 from idx 1 <value>')
		assert.strictEqual(previous(arr, 8, 1).idx, 4, 'Filter is function: Previous occurrence of 1 from idx 1 <idx>')

		assert.strictEqual(previous(arr, 3, 1).val, 1, 'Filter is function: Previous occurrence of 1 from idx 3 <value>')
		assert.strictEqual(previous(arr, 3, 1).idx, 0, 'Filter is function: Previous occurrence of 1 from idx 3 <idx>')

		assert.strictEqual(previous(arr, 5).val, 1, 'No filter given')
		assert.strictEqual(previous(arr, 5).idx, 4, 'No filter given')
	})

	it('{val: undefined, idx: -1} when there is no previous...', function () {

		const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1]

		const fn = (val: number) => val === 9

		assert.strictEqual(previous(arr, 1, fn).val, undefined)
		assert.strictEqual(previous(arr, 1, fn).idx, -1)

	})

})