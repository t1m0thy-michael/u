const chai = require('chai')
const assert = chai.assert

import { and } from './and'

describe('and()', function () {

	it('Is a function', function () {
		assert.strictEqual(typeof and, 'function', 'Is a function')
	})

	const rT = () => true
	const rF = () => false

	it('Returns true', function () {
		assert.strictEqual(and(rT, rT, rT, rT), true, 'When passed functions')
		assert.strictEqual(and(true, true), true, 'When passed bools')
		assert.strictEqual(and(1, 1, 1, 1, 1, 1, 1), true, 'When passed scalar values')
		assert.strictEqual(and('truthy'), true, 'When passed scalar values')
	})

	it('Returns false', function () {
		assert.strictEqual(and(rT, rT, rF, rF), false, 'When passed functions')
		assert.strictEqual(and(true, false, true, true), false, 'When passed bools')
		assert.strictEqual(and(1, 1, 1, 0), false, 'When passed scalar values')
		assert.strictEqual(and('truthy', '', 'truthy', ''), false, 'When passed scalar values')
	})
})