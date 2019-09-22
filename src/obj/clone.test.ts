const chai = require('chai')
const assert = chai.assert

import { clone } from './clone'

describe('clone()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof clone, 'function', 'Is a function')
	})

	it('Returns deep equal copy', function () {
		let obj = { a: { z: 999 }, b: 1, c: 'a', d: [1, 2, 3] }
		assert.deepEqual(clone(obj), obj)
	})
})