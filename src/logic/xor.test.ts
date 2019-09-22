const chai = require('chai')
const assert = chai.assert

import { xor } from './xor'

describe('xor()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof xor, 'function', 'Is a function')
	})

	const rT = () => true
	const rF = () => false

	it('Returns true', function () {
		assert.strictEqual(xor(rT, rF, rF, rF), true, 'When passed functions')
		assert.strictEqual(xor(false, false, false, true), true, 'When passed bools')
		assert.strictEqual(xor(0, 1, 0, 0), true, 'When passed scalar values')
		assert.strictEqual(xor('truthy', '', '', ''), true, 'When passed scalar values')
	})

	it('Returns false', function () {
		assert.strictEqual(xor(rT, rT, rF, rF), false, 'When passed functions')
		assert.strictEqual(xor(true, false, false, true), false, 'When passed bools')
		assert.strictEqual(xor(1, 0, 1, 0), false, 'When passed scalar values')
		assert.strictEqual(xor('truthy', '', 'truthy', ''), false, 'When passed scalar values')
	})
})