const chai = require('chai')
const assert = chai.assert

import { every } from './every'

describe('every()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof every, 'function', 'Is a function')
	})

	it('Returns true when condition function returns true for every element', function () {
		let result = every(() => true, [1, 2, 3, 4, 5])
		assert.ok(result, 'Returns true when test function returns true for every element')
	})

	it('Returns false when test function returns false for an element', function () {
		let result = every((val:number) => val !== 2, [1, 2, 3, 4, 5])
		assert.ok(!result)
	})

})