const chai = require('chai')
const assert = chai.assert

import { insert } from './insert'

describe('insert()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof insert, 'function', 'Is a function')
	})

	it('\'Rebuilds\' none-cyclic deep equal object', function () {
		assert.strictEqual(insert('b', 'acd', 1), 'abcd')
		assert.strictEqual(insert(1, 'acd', 1), 'a1cd')
		assert.strictEqual(insert(['q','w','e','r','t','y'], 'acd', 1), 'aq,w,e,r,t,ycd')
	})
})